let socketClient = webstomp.over(
  new SockJS("https://api.jdoodle.com/v1/stomp"),
  { heartbeat: false, debug: true }
);

function onWsConnection() {
  console.log("connection succeeded");

  socketClient.subscribe("/user/queue/execute-i", (message) => {
    let msgId = message.headers["message-id"];
    let msgSeq = parseInt(msgId.substring(msgId.lastIndexOf("-") + 1));

    let statusCode = parseInt(message.headers.statusCode);

    if (statusCode === 201) {
      this.wsNextId = msgSeq + 1;
      return;
    }

    let t0;
    try {
      t0 = performance.now();
      while (performance.now() - t0 < 2500 && this.wsNextId !== msgSeq) {}
    } catch (e) {}

    if (statusCode === 204) {
      //executionTime = message.body
    } else if (statusCode === 500 || statusCode === 410) {
      //server error
      console.log("server error");
    } else if (statusCode === 206) {
      //outputFiles = JSON.parse(message.body)
      //returns file list - not supported in this custom api
    } else if (statusCode === 429) {
      //Daily limit reached
      console.log("daily limit reached");
    } else if (statusCode === 400) {
      //Invalid request - invalid signature or token expired - check the body for details
      console.log("invalid request - invalid signature or token expired");
    } else if (statusCode === 401) {
      //Unauthorised request
      console.log("Unauthorised request");
    } else {
      var txt = document.getElementById("result").value;
      document.getElementById("result").value = txt + message.body;
    }

    this.wsNextId = msgSeq + 1;
  });

  let script = ` import java.util.Scanner;
 import java.util.NoSuchElementException;

public class MyClass {
 public static void main(String args[]) {
		Scanner scanner = new Scanner(System.in);

		try {
		 System.out.println("Type a Line and enter....");
		String txt = scanner.nextLine();
		System.out.println("You have typed...");
		System.out.println(txt);
		} catch (NoSuchElementException e) {
		    System.out.println("Type something in the Stdin box above....");
		}

	}
}`;

  let data = JSON.stringify({
    script: script,
    language: "java",
    versionIndex: 4,
  });

  socketClient.send("/app/execute-ws-api-token", data, {
    message_type: "execute",
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJKRE9PRExFIiwic3ViIjoiV1MtQVBJLVRPS0VOIiwiY2xpZW50LWlkIjoiODk0ZGVhYmQ1ZGYwZDBmZGE0NmZjZDI5NGM0ZTZmNmEiLCJpYXQiOjE2Nzg4ODQ0MDYsImV4cCI6MTY3ODg4NDU4Nn0.Vp2rqQ9HQxtxq1XcuQtWSkmHA21GiJbZltNs49zqlAs",
  });
}

function onWsConnectionFailed(e) {
  console.log("connection failed");
  console.log(e);
}

function onInput(e) {
  let key = e.key;
  if (e.key === "Enter") {
    key = "\n";
  }
  socketClient.send("/app/execute-ws-api-token", key, {
    message_type: "input",
  });
}

socketClient.connect({}, onWsConnection, onWsConnectionFailed);
