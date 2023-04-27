(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global.webstomp = factory());
})(this, function () {
  "use strict";
  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (
          var _i = arr[Symbol.iterator](), _s;
          !(_n = (_s = _i.next()).done);
          _n = true
        ) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
    };
  })();
  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return Array.from(arr);
    }
  };
  var VERSIONS = {
    V1_0: "1.0",
    V1_1: "1.1",
    V1_2: "1.2",
    supportedVersions: function supportedVersions() {
      return "1.2,1.1,1.0";
    },
    supportedProtocols: function supportedProtocols() {
      return ["v10.stomp", "v11.stomp", "v12.stomp"];
    },
  };
  var PROTOCOLS_VERSIONS = {
    "v10.stomp": VERSIONS.V1_0,
    "v11.stomp": VERSIONS.V1_1,
    "v12.stomp": VERSIONS.V1_2,
  };
  function getSupportedVersion(protocol, debug) {
    var knownVersion = PROTOCOLS_VERSIONS[protocol];
    if (!knownVersion && debug) {
      debug(
        "DEPRECATED: " +
          protocol +
          " is not a recognized STOMP version. In next major client version, this will close the connection."
      );
    }
    return knownVersion || VERSIONS.V1_2;
  }
  var BYTES = { LF: "\x0A", NULL: "\x00" };
  var trim = function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
  };
  function unicodeStringToTypedArray(s) {
    var escstr = encodeURIComponent(s);
    var binstr = escstr.replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode("0x" + p1);
    });
    var arr = Array.prototype.map.call(binstr, function (c) {
      return c.charCodeAt(0);
    });
    return new Uint8Array(arr);
  }
  function typedArrayToUnicodeString(ua) {
    var binstr = String.fromCharCode.apply(String, toConsumableArray(ua));
    var escstr = binstr.replace(/(.)/g, function (m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = "0" + code;
      }
      return "%" + code;
    });
    return decodeURIComponent(escstr);
  }
  function sizeOfUTF8(s) {
    if (!s) return 0;
    return encodeURIComponent(s).match(/%..|./g).length;
  }
  function createId() {
    var ts = new Date().getTime();
    var rand = Math.floor(Math.random() * 1000);
    return ts + "-" + rand;
  }
  var Frame = (function () {
    function Frame(command) {
      var headers =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      classCallCheck(this, Frame);
      this.command = command;
      this.headers = headers;
      this.body = body;
    }
    createClass(
      Frame,
      [
        {
          key: "toString",
          value: function toString() {
            var _this = this;
            var lines = [this.command],
              skipContentLength = this.headers["content-length"] === false;
            if (skipContentLength) delete this.headers["content-length"];
            Object.keys(this.headers).forEach(function (name) {
              var value = _this.headers[name];
              lines.push(name + ":" + value);
            });
            if (this.body && !skipContentLength) {
              lines.push("content-length:" + sizeOfUTF8(this.body));
            }
            lines.push(BYTES.LF + this.body);
            return lines.join(BYTES.LF);
          },
        },
      ],
      [
        {
          key: "unmarshallSingle",
          value: function unmarshallSingle(data) {
            var divider = data.search(new RegExp(BYTES.LF + BYTES.LF)),
              headerLines = data.substring(0, divider).split(BYTES.LF),
              command = headerLines.shift(),
              headers = {},
              body = "",
              bodyIndex = divider + 2;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
              for (
                var _iterator = headerLines.reverse()[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var line = _step.value;
                var idx = line.indexOf(":");
                headers[trim(line.substring(0, idx))] = trim(
                  line.substring(idx + 1)
                );
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            if (headers["content-length"]) {
              var len = parseInt(headers["content-length"], 10);
              body = ("" + data).substring(bodyIndex, bodyIndex + len);
            } else {
              var chr = null;
              for (var i = bodyIndex; i < data.length; i++) {
                chr = data.charAt(i);
                if (chr === BYTES.NULL) break;
                body += chr;
              }
            }
            return new Frame(command, headers, body);
          },
        },
        {
          key: "unmarshall",
          value: function unmarshall(datas) {
            var frames = datas.split(new RegExp(BYTES.NULL + BYTES.LF + "*")),
              firstFrames = frames.slice(0, -1),
              lastFrame = frames.slice(-1)[0],
              r = {
                frames: firstFrames.map(function (f) {
                  return Frame.unmarshallSingle(f);
                }),
                partial: "",
              };
            if (
              lastFrame === BYTES.LF ||
              lastFrame.search(RegExp(BYTES.NULL + BYTES.LF + "*$")) !== -1
            ) {
              r.frames.push(Frame.unmarshallSingle(lastFrame));
            } else {
              r.partial = lastFrame;
            }
            return r;
          },
        },
        {
          key: "marshall",
          value: function marshall(command, headers, body) {
            var frame = new Frame(command, headers, body);
            return frame.toString() + BYTES.NULL;
          },
        },
      ]
    );
    return Frame;
  })();
  var Client = (function () {
    function Client(ws) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Client);
      var _options$binary = options.binary,
        binary = _options$binary === undefined ? false : _options$binary,
        _options$heartbeat = options.heartbeat,
        heartbeat =
          _options$heartbeat === undefined
            ? { outgoing: 10000, incoming: 10000 }
            : _options$heartbeat,
        _options$debug = options.debug,
        debug = _options$debug === undefined ? true : _options$debug,
        _options$protocols = options.protocols,
        protocols = _options$protocols === undefined ? [] : _options$protocols;
      this.ws = ws;
      this.ws.binaryType = "arraybuffer";
      this.isBinary = !!binary;
      this.hasDebug = !!debug;
      this.connected = false;
      this.heartbeat = heartbeat || { outgoing: 0, incoming: 0 };
      this.maxWebSocketFrameSize = 16 * 1024;
      this.subscriptions = {};
      this.partialData = "";
      this.protocols = protocols;
    }
    createClass(Client, [
      {
        key: "debug",
        value: function debug() {
          var _console;
          if (this.hasDebug)
            (_console = console).log.apply(_console, arguments);
        },
      },
      {
        key: "connect",
        value: function connect() {
          var _this = this;
          var _parseConnect2 = this._parseConnect.apply(this, arguments),
            _parseConnect3 = slicedToArray(_parseConnect2, 3),
            headers = _parseConnect3[0],
            connectCallback = _parseConnect3[1],
            errorCallback = _parseConnect3[2];
          this.connectCallback = connectCallback;
          this.debug("Opening Web Socket...");
          this.ws.onmessage = function (evt) {
            var data = evt.data;
            if (evt.data instanceof ArrayBuffer) {
              data = typedArrayToUnicodeString(new Uint8Array(evt.data));
            }
            _this.serverActivity = Date.now();
            if (data === BYTES.LF) {
              _this.debug("<<< PONG");
              return;
            }
            _this.debug("<<< " + data);
            var unmarshalledData = Frame.unmarshall(_this.partialData + data);
            _this.partialData = unmarshalledData.partial;
            unmarshalledData.frames.forEach(function (frame) {
              switch (frame.command) {
                case "CONNECTED":
                  _this.debug("connected to server " + frame.headers.server);
                  _this.connected = true;
                  _this.version = frame.headers.version;
                  _this._setupHeartbeat(frame.headers);
                  if (connectCallback) connectCallback(frame);
                  break;
                case "MESSAGE":
                  var subscription = frame.headers.subscription;
                  var onreceive =
                    _this.subscriptions[subscription] || _this.onreceive;
                  if (onreceive) {
                    var messageID =
                      (_this.version === VERSIONS.V1_2 && frame.headers.ack) ||
                      frame.headers["message-id"];
                    frame.ack = _this.ack.bind(_this, messageID, subscription);
                    frame.nack = _this.nack.bind(
                      _this,
                      messageID,
                      subscription
                    );
                    onreceive(frame);
                  } else {
                    _this.debug("Unhandled received MESSAGE: " + frame);
                  }
                  break;
                case "RECEIPT":
                  if (_this.onreceipt) _this.onreceipt(frame);
                  break;
                case "ERROR":
                  if (errorCallback) errorCallback(frame);
                  break;
                default:
                  _this.debug("Unhandled frame: " + frame);
              }
            });
          };
          this.ws.onclose = function (event) {
            _this.debug("Whoops! Lost connection to " + _this.ws.url + ":", {
              event: event,
            });
            _this._cleanUp();
            if (errorCallback) errorCallback(event);
          };
          this.ws.onopen = function () {
            _this.debug("Web Socket Opened...");
            headers["accept-version"] = getSupportedVersion(
              _this.ws.protocol || _this.protocols[0],
              _this.debug.bind(_this)
            );
            if (!headers["heart-beat"]) {
              headers["heart-beat"] = [
                _this.heartbeat.outgoing,
                _this.heartbeat.incoming,
              ].join(",");
            }
            _this._transmit("CONNECT", headers);
          };
          if (this.ws.readyState === this.ws.OPEN) {
            this.ws.onopen();
          }
        },
      },
      {
        key: "disconnect",
        value: function disconnect(disconnectCallback) {
          var headers =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          this._transmit("DISCONNECT", headers);
          this.ws.onclose = null;
          this.ws.close();
          this._cleanUp();
          if (disconnectCallback) disconnectCallback();
        },
      },
      {
        key: "send",
        value: function send(destination) {
          var body =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          var headers =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var hdrs = Object.assign({}, headers);
          hdrs.destination = destination;
          this._transmit("SEND", hdrs, body);
        },
      },
      {
        key: "begin",
        value: function begin() {
          var transaction =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : "tx-" + createId();
          this._transmit("BEGIN", { transaction: transaction });
          return {
            id: transaction,
            commit: this.commit.bind(this, transaction),
            abort: this.abort.bind(this, transaction),
          };
        },
      },
      {
        key: "commit",
        value: function commit(transaction) {
          this._transmit("COMMIT", { transaction: transaction });
        },
      },
      {
        key: "abort",
        value: function abort(transaction) {
          this._transmit("ABORT", { transaction: transaction });
        },
      },
      {
        key: "ack",
        value: function ack(messageID, subscription) {
          var headers =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var hdrs = Object.assign({}, headers);
          var idAttr = this.version === VERSIONS.V1_2 ? "id" : "message-id";
          hdrs[idAttr] = messageID;
          hdrs.subscription = subscription;
          this._transmit("ACK", hdrs);
        },
      },
      {
        key: "nack",
        value: function nack(messageID, subscription) {
          var headers =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var hdrs = Object.assign({}, headers);
          var idAttr = this.version === VERSIONS.V1_2 ? "id" : "message-id";
          hdrs[idAttr] = messageID;
          hdrs.subscription = subscription;
          this._transmit("NACK", hdrs);
        },
      },
      {
        key: "subscribe",
        value: function subscribe(destination, callback) {
          var headers =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var hdrs = Object.assign({}, headers);
          if (!hdrs.id) hdrs.id = "sub-" + createId();
          hdrs.destination = destination;
          this.subscriptions[hdrs.id] = callback;
          this._transmit("SUBSCRIBE", hdrs);
          return {
            id: hdrs.id,
            unsubscribe: this.unsubscribe.bind(this, hdrs.id),
          };
        },
      },
      {
        key: "unsubscribe",
        value: function unsubscribe(id) {
          var headers =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var hdrs = Object.assign({}, headers);
          delete this.subscriptions[id];
          hdrs.id = id;
          this._transmit("UNSUBSCRIBE", hdrs);
        },
      },
      {
        key: "_cleanUp",
        value: function _cleanUp() {
          this.connected = false;
          clearInterval(this.pinger);
          clearInterval(this.ponger);
        },
      },
      {
        key: "_transmit",
        value: function _transmit(command, headers, body) {
          var out = Frame.marshall(command, headers, body);
          this.debug(">>> " + out, {
            frame: { command: command, headers: headers, body: body },
          });
          this._wsSend(out);
        },
      },
      {
        key: "_wsSend",
        value: function _wsSend(data) {
          if (this.isBinary) data = unicodeStringToTypedArray(data);
          this.debug(">>> length " + data.length);
          while (true) {
            if (data.length > this.maxWebSocketFrameSize) {
              this.ws.send(data.slice(0, this.maxWebSocketFrameSize));
              data = data.slice(this.maxWebSocketFrameSize);
              this.debug("remaining = " + data.length);
            } else {
              return this.ws.send(data);
            }
          }
        },
      },
      {
        key: "_setupHeartbeat",
        value: function _setupHeartbeat(headers) {
          var _this2 = this;
          if (this.version !== VERSIONS.V1_1 && this.version !== VERSIONS.V1_2)
            return;
          var _split$map = (headers["heart-beat"] || "0,0")
              .split(",")
              .map(function (v) {
                return parseInt(v, 10);
              }),
            _split$map2 = slicedToArray(_split$map, 2),
            serverOutgoing = _split$map2[0],
            serverIncoming = _split$map2[1];
          if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {
            var ttl = Math.max(this.heartbeat.outgoing, serverIncoming);
            this.debug("send PING every " + ttl + "ms");
            this.pinger = setInterval(function () {
              _this2._wsSend(BYTES.LF);
              _this2.debug(">>> PING");
            }, ttl);
          }
          if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {
            var _ttl = Math.max(this.heartbeat.incoming, serverOutgoing);
            this.debug("check PONG every " + _ttl + "ms");
            this.ponger = setInterval(function () {
              var delta = Date.now() - _this2.serverActivity;
              if (delta > _ttl * 2) {
                _this2.debug(
                  "did not receive server activity for the last " + delta + "ms"
                );
                _this2.ws.close();
              }
            }, _ttl);
          }
        },
      },
      {
        key: "_parseConnect",
        value: function _parseConnect() {
          var headers = {},
            connectCallback = void 0,
            errorCallback = void 0;
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }
          switch (args.length) {
            case 2:
              headers = args[0];
              connectCallback = args[1];
              break;
            case 3:
              if (args[1] instanceof Function) {
                headers = args[0];
                connectCallback = args[1];
                errorCallback = args[2];
              } else {
                headers.login = args[0];
                headers.passcode = args[1];
                connectCallback = args[2];
              }
              break;
            case 4:
              headers.login = args[0];
              headers.passcode = args[1];
              connectCallback = args[2];
              errorCallback = args[3];
              break;
            default:
              headers.login = args[0];
              headers.passcode = args[1];
              connectCallback = args[2];
              errorCallback = args[3];
              headers.host = args[4];
          }
          return [headers, connectCallback, errorCallback];
        },
      },
    ]);
    return Client;
  })();
  var webstomp = {
    Frame: Frame,
    VERSIONS: VERSIONS,
    client: function client(url) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ws = new WebSocket(
        url,
        options.protocols || VERSIONS.supportedProtocols()
      );
      return new Client(ws, options);
    },
    over: function over() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      return new (Function.prototype.bind.apply(Client, [null].concat(args)))();
    },
  };
  return webstomp;
});
