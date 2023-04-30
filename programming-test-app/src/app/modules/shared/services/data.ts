import {
  Language,
  Topic,
  TopicDifficulty,
  Question,
  TestCase,
} from '../models/models';

// JavaScript Data
const q1: Question = new Question(
  'js01',
  'Reverse the string',
  'Write a function called reverseString that takes a string as a parameter and returns the reverse of the string.',
  180,
  'reverseString(str)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ],
  [
    new TestCase('apple', 'elppa', 'E.g. The entire word is reversed'),
    new TestCase(
      'AusTraLia',
      'aiLarTsuA',
      'E.g. Capitcal cases are also included in the reversal'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    reverseString(str);
    rl.close();
  });
  `
);

const q2: Question = new Question(
  'js02',
  'Capitalise letters',
  'Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the same string with the first letter capitalized.',
  180,
  'capitalizeFirstLetter(str)',
  new TestCase('laptop', 'Laptop'),
  [
    new TestCase('', ''),
    new TestCase('melbourne', 'Melbourne'),
    new TestCase('welcome to australia', 'Welcome to australia'),
    new TestCase(' hello', ' Hello'),
    new TestCase('barak Obama', 'Barak Obama'),
  ],
  [
    new TestCase('laptop', 'Laptop', 'E.g. First letter is capitalised'),
    new TestCase(
      'welcome to australia',
      'Welcome to australia',
      'E.g. Only the first word is capitalised in a sentence'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    capitalizeFirstLetter(str);
    rl.close();
  });
  `
);

const q3: Question = new Question(
  'js03',
  'Count the letter',
  'Write a function called countOccurrences that a string as parameter. The function should return most frequent letter from the string. If multiple letters are identified, return the character first to appear',
  180,
  'countOccurrences(str)',
  new TestCase('bottle', 't'),
  [
    new TestCase('good morning', 'o'),
    new TestCase('', ''),
    new TestCase('Hello WORLD', 'l'),
    new TestCase('caterpillar', 'r'),
    new TestCase('AustrAlia', 'A'),
  ],
  [
    new TestCase(
      'caterpillar',
      'r',
      'E.g. r and l both appear twice. The answer is r as it appears first'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    countOccurrences(str);
    rl.close();
  });
  `
);

const q4: Question = new Question(
  'js04',
  'Remove white spaces',
  'Write a function called removeWhitespace that takes a string as a parameter and returns the same string with all whitespace characters removed.',
  120,
  'removeWhitespace(str)',
  new TestCase('Hello World', 'HelloWorld'),
  [
    new TestCase('   ', ''),
    new TestCase('abc def ghi ', 'abcdefghi'),
    new TestCase(' air plane', 'airplane'),
    new TestCase('10 01', '1001'),
    new TestCase('', ''),
  ],
  [
    new TestCase(
      'Hello World',
      'HelloWorld',
      'E.g. Separate words become one word'
    ),
    new TestCase(
      ' air plane',
      'airplane',
      'E.g. Remove spaces even in front/end of words'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    removeWhitespace(str);
    rl.close();
  });
  `
);

const q5: Question = new Question(
  'js05',
  'Count all letters',
  'Write a function called countLetters takes a string as a parameter and returns the count of all letters excluding blank spaces.',
  180,
  'countLetters(str)',
  new TestCase('apple', 5),
  [
    new TestCase('Good Day', 8),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('', 0),
    new TestCase('aaaaaa aaaa', 10),
    new TestCase('a b c d e', 5),
  ],
  [
    new TestCase('apple', 5, 'E.g. Count all letters'),
    new TestCase('a b c d e', 5, 'E.g. Count excludes blank spaces'),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    countLetters(str);
    rl.close();
  });
  `
);
const q6: Question = new Question(
  'js06',
  'Replace vowels with X',
  'Write a function called replaceVowels that takes one parameter: a string, The function should output a new string with all instances of vowels with letter X',
  120,
  'replaceVowels(str)',
  new TestCase('good morning', 'gXXd mXrnXng'),
  [
    new TestCase(' bottle ', ' bXttlX '),
    new TestCase('aeiou', 'XXXXX'),
    new TestCase('zxzxzx', 'zxzxzx'),
    new TestCase('', ''),
    new TestCase('AaBbCc', 'XXBbCc'),
  ],
  [
    new TestCase(
      'good morning',
      'gXXd mXrnXng',
      'E.g. All vowels replaced with X'
    ),
    new TestCase(
      'AaBbCc',
      'XXBbCc',
      'E.g. Vowels replaced regardless of capital or lower casing'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    replaceVowels(str);
    rl.close();
  });
  `
);
const q7: Question = new Question(
  'js07',
  'Truncate a string to fit in an 7 letter space',
  'Write a function called truncate that takes a string as parameter. The function should output a truncated version of the string with ellipses ... added at the end. The total length of the new truncated must be 8 letters long. If shorter than 8 letters, return the original string',
  90,
  'truncate(str)',
  new TestCase('Australia', 'Austr...'),
  [
    new TestCase('Good morning my friend', 'Good ...'),
    new TestCase('  abcdef', '  abc...'),
    new TestCase('apple', 'apple'),
    new TestCase('abczzzzzzz', 'abczz...'),
    new TestCase('1a2 b3d', '1a2 b...'),
  ],
  [
    new TestCase(
      'Australia',
      'Austr...',
      'E.g. String is truncated to only 8 letters long'
    ),
    new TestCase(
      '  abcdef',
      '  abc...',
      'E.g. Spaces are included in the truncation'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    truncate(str);
    rl.close();
  });
  `
);
const q8: Question = new Question(
  'js08',
  'Title Case',
  'Write a function called titleCase that takes a string as a parameter and returns the same string with the first letter of each word capitalized.',
  120,
  'titleCase(str)',
  new TestCase('welcome to jdoodle', 'Welcome To Jdoodle'),
  [
    new TestCase('abcdef g', 'Abcdef G'),
    new TestCase('   hello', '   Hello'),
    new TestCase('HELLO world', 'HELLO World'),
    new TestCase('10 apples', '10 Apples'),
    new TestCase('', ''),
  ],
  [
    new TestCase(
      'welcome to jdoodle',
      'Welcome To Jdoodle',
      'E.g. Every word separated by a space is capitalised'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    titleCase(str);
    rl.close();
  });
  `
);
const q9: Question = new Question(
  'js09',
  'Reverse a sentence',
  'Write a function called reverseWords that takes a string as a parameter and returns the same string with the order of the words reversed.',
  120,
  'reverseWords(str)',
  new TestCase('JDoodle', 'eldooDJ'),
  [
    new TestCase('Welcome my friend', 'dneirf ym emocleW'),
    new TestCase('  10   ', '   01  '),
    new TestCase('', ''),
    new TestCase('i like codinG', 'Gnidoc ekil i'),
    new TestCase('131313', '313131'),
  ],
  [
    new TestCase(
      'JDoodle',
      'eldooDJ',
      'E.g. Entire word is reversed, case sensitive.'
    ),
    new TestCase(
      '  10   ',
      '   01  ',
      'E.g. Spaces need to be reversed as well.'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    reverseWords(str);
    rl.close();
  });
  `
);
const q10: Question = new Question(
  'js10',
  'Letter with most counts',
  'Write a function called findMostCounts that takes a string as a parameter and returns a the letter that appears most in the string. If there is more than one letter with the same count, return the first letter that appears.',
  180,
  'findMostCounts(str)',
  new TestCase('apple', 'p'),
  [
    new TestCase('apple', 'p'),
    new TestCase('canberra', 'a'),
    new TestCase('AaA TTT', 'T'),
    new TestCase('hello my name is jeLLo', 'l'),
    new TestCase('', ''),
  ],
  [
    new TestCase('apple', 'p'),
    new TestCase('AaA TTT', 'T', 'E.g. Letter counting is case sensitive'),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (str) => {
    findMostCounts(str);
    rl.close();
  });
  `
);

const q11: Question = new Question(
  'js11',
  'Sum of array',
  'Write a function called sum that takes an array of numbers as a parameter and returns their sum.',
  180,
  'sum(arr)',
  new TestCase([1, 2, 3], 6),
  [
    new TestCase([20], 20),
    new TestCase([9, 9, 9], 27),
    new TestCase([], 0),
    new TestCase([-10, 10], 0),
    new TestCase([2, 2, 2, 2, 2], 10),
  ],
  [new TestCase([1, 2, 3], 6)],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    sum(arr);
    rl.close();
  });
  `
);

const q12: Question = new Question(
  'js12',
  'Array average',
  'Write a function called average that takes an array of numbers as a parameter and returns their average.',
  180,
  'average(arr)',
  new TestCase([1, 2, 3], 2),
  [
    new TestCase([0, 0, 9], 3),
    new TestCase([], 0),
    new TestCase([10, -10, 30], 10),
    new TestCase([1, 2, 3, 4, 5, 6], 3.5),
    new TestCase([1, 2, 3], 2),
  ],
  [
    new TestCase([1, 2, 3], 2),
    new TestCase(
      [1, 2, 3, 4, 5, 6],
      3.5,
      'E.g. Return a decial number for average if needed'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    average(arr);
    rl.close();
  });
  `
);

const q13: Question = new Question(
  'js13',
  'Max of array',
  'Write a function called max that takes an array of numbers as a parameter and returns the largest number in the array.',
  180,
  'max(arr)',
  new TestCase([1, 2, 3], 3),
  [
    new TestCase([20, 90, 0, 10], 90),
    new TestCase([-10, -20, -30], -10),
    new TestCase([1, 1, 1, 1, 1, 1, 9], 9),
    new TestCase([1, 2, 3], 2),
    new TestCase([1, 2, 3], 2),
  ],
  [
    new TestCase(
      [-10, -20, -30],
      -10,
      'E.g. Consider negative numbers as well.'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    max(arr);
    rl.close();
  });
  `
);

const q14: Question = new Question(
  'js14',
  'Min of array',
  'Write a function called min that takes an array of numbers as a parameter and returns the smallest number in the array.',
  180,
  'min(arr)',
  new TestCase([1, 2, 3], 1),
  [
    new TestCase([-10, -20, -30], -30),
    new TestCase([0, 0, 0], 0),
    new TestCase([1, 1, 1, 1, 1, 1, 1, 1, 20], 1),
    new TestCase([5, 10, 3, 1], 1),
    new TestCase([-999, 999, -1000], -1000),
  ],
  [
    new TestCase(
      [-10, -20, -30],
      -10,
      'E.g. Consider negative numbers as well.'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    min(arr);
    rl.close();
  });
  `
);

const q15: Question = new Question(
  'js15',
  'Reverse of array with only values larger than 5',
  'Write a function called reverse that takes an array as a parameter and returns a new array with the elements in reverse order, only including numbers greater than 5.',
  180,
  'reverse(arr)',
  new TestCase([3, 4, 5, 6, 7, 8], [8, 7, 6]),
  [
    new TestCase([1, 2, 3], []),
    new TestCase([5, 6, 7, 8], [8, 7, 6]),
    new TestCase([10, 11, 12], [12, 11, 10]),
    new TestCase([], []),
    new TestCase([3, 4, 5, 6, 7, 8], [8, 7, 6]),
  ],
  [
    new TestCase(
      [3, 4, 5, 6, 7, 8],
      [8, 7, 6],
      'E.g. 3,4 are ignored as they are less than 5. The rest are reversed'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    reverse(arr);
    rl.close();
  });
  `
);
const q16: Question = new Question(
  'js16',
  'Sort ascending',
  'Write a function called sort that takes an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.',
  180,
  'sort(arr)',
  new TestCase([1, 4, 2, 3], [1, 2, 3, 4]),
  [
    new TestCase([0, 4, 2, 3], [0, 2, 3, 4]),
    new TestCase([-10, -30, -20], [-10, -20, -30]),
    new TestCase([], []),
    new TestCase([99, 98, 97], [97, 98, 99]),
    new TestCase([1, 4, 2, 3], [1, 2, 3, 4]),
  ],
  [new TestCase([1, 4, 2, 3], [1, 2, 3, 4])],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    sort(arr);
    rl.close();
  });
  `
);
const q17: Question = new Question(
  'js17',
  'Unique numbers',
  'Write a function called unique that takes an array as a parameter and returns a new array with all duplicate elements removed.',
  180,
  'unique(arr)',
  new TestCase([1, 2, 1, 3, 4], [1, 2, 3, 4]),
  [
    new TestCase([4, 3, 4, 3, 2, 1], [4, 3, 2, 1]),
    new TestCase([1, 3, 5, 7], [1, 3, 5, 7]),
    new TestCase([-10, 0, 0, -10, 5], [-10, 0, 5]),
    new TestCase([999, 997, 99, 9, 99, 99, 99], [999, 997, 99, 9]),
    new TestCase([1, 1, 1, 1, 1, 1, 1, 1, 2], [1, 2]),
  ],
  [
    new TestCase(
      [1, 2, 1, 3, 4],
      [1, 2, 3, 4],
      'E.g. Unique numbers returned in the order they appear'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    unique(arr);
    rl.close();
  });
  `
);
const q18: Question = new Question(
  'js18',
  'Flatten nested arrays',
  'Write a function called flatten that takes an array of nested arrays as a parameter and returns a new array with all elements flattened into a single array.',
  180,
  'flatten(arr)',
  new TestCase(
    [
      [1, 2],
      [3, 4],
    ],
    [1, 2, 3, 4]
  ),
  [
    new TestCase([[1, 2], []], [1, 2]),
    new TestCase([[], [3, 4]], [3, 4]),
    new TestCase(
      [
        [1, 2],
        [3, 4],
        [5, 6, 7, 8],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8]
    ),
    new TestCase([[], [3, 4], [], [5, 6]], [3, 4, 5, 6]),
    new TestCase([[1, 2, 3], [4, 5], [6]], [1, 2, 3, 4, 5, 6]),
  ],
  [
    new TestCase(
      [
        [1, 2],
        [3, 4],
      ],
      [1, 2, 3, 4],
      'E.g. Two arrays are flattened into 1 array.'
    ),
    new TestCase(
      [
        [1, 2],
        [3, 4],
        [5, 6, 7, 8],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8],
      'E.g. Arrays of different lengths are flattened into 1 array'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    flatten(arr);
    rl.close();
  });
  `
);
const q19: Question = new Question(
  'js19',
  'Filter for values',
  'Write a function called countOdd that returns the number of odd numbers in the array.',
  180,
  'countOdd(arr)',
  new TestCase([1, 2, 3, 4, 5], 3),
  [
    new TestCase([1, 2, 3, 4, 5], 3),
    new TestCase([2, 4, 6, 8], 0),
    new TestCase([], 0),
    new TestCase([1, 3, 5, 7, 9], 5),
    new TestCase([0, 1, 0, 1, -1], 3),
  ],
  [
    new TestCase([1, 2, 3, 4, 5], 3),
    new TestCase(
      [0, 1, 0, 1, -1],
      3,
      'E.g. Consider negative numbers or empty array'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    countOdd(arr);
    rl.close();
  });
  `
);
const q20: Question = new Question(
  'js20',
  'Conditional math operations',
  'Write a function called doubleSomeNumbers that doubles the value of all numbers greater than 10. Return the new array',
  180,
  'doubleSomeNumbers(arr)',
  new TestCase([1, 2, 3, 11], [1, 2, 3, 22]),
  [
    new TestCase([20, 1, 21, 2], [40, 1, 42, 2]),
    new TestCase([-50, 50], [-50, 100]),
    new TestCase([1, 10, 100], [1, 10, 200]),
    new TestCase([1.5, 9.5, 10.5], [1.5, 9.5, 21]),
    new TestCase([], []),
  ],
  [
    new TestCase([1, 2, 3, 11], [1, 2, 3, 22]),
    new TestCase(
      [1, 10, 100],
      [1, 10, 200],
      'E.g. 10 is not doubled as it is not greater than 10'
    ),
  ],
  `const readline = require("readline");
  let rl = readline.createInterface(process.stdin, process.stdout);

  //USERINPUT

  rl.on('line', (arr) => {
    doubleSomeNumbers(arr);
    rl.close();
  });
  `
);

const topic1 = new Topic(
  'jst0001',
  'String Basics',
  TopicDifficulty.Beginner,
  [
    'In this quiz, you will be tested on your knowledge of manipulating strings in JavaScript. String manipulation is an essential skill for any JavaScript developer, as it involves working with text data to perform various operations like concatenation, splitting, slicing, and more.',
    "By the end of this quiz, you should have a solid understanding of how to work with strings in JavaScript, and be able to apply that knowledge to real-world programming tasks.So get ready to put your JavaScript skills to the test, and let's get started!",
  ],
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
);

const topic2 = new Topic(
  'jst0002',
  'Array Manipulation',
  TopicDifficulty.Beginner,
  [
    ' In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
);

const topic3 = new Topic(
  'jst0003',
  'Math Operators',
  TopicDifficulty.Beginner,
  [
    ' In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  true
);

const topic4 = new Topic(
  'jst0004',
  'Working with Loops',
  TopicDifficulty.Beginner,
  [
    ' In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  true
);

const topic9 = new Topic(
  'jst0004',
  'String Interpolation',
  TopicDifficulty.Beginner,
  [
    'In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  true
);

const topic5 = new Topic(
  'jst0005',
  'String Exercises',
  TopicDifficulty.Intermediate,
  [
    'In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
);

const topic6 = new Topic(
  'jst0006',
  'Working with Loops',
  TopicDifficulty.Intermediate,
  [
    'In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  true
);

const topic7 = new Topic(
  'jst0007',
  'String Manipulation',
  TopicDifficulty.Advanced,
  [
    'In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
);

const topic8 = new Topic(
  'jst0008',
  'String Manipulation',
  TopicDifficulty.Advanced,
  [
    'In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  //TODO: Fix issue with multi-parameter stdin
  // [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  true
);

const jsScript = `{
\t//Enter your code here

}`;

export const js: Language = new Language(
  'NodeJS',
  [topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8, topic9],
  jsScript
);

const java: Language = new Language(
  'Java',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const csharp: Language = new Language(
  'C#',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const python3: Language = new Language(
  'Python 3',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const cplusplus: Language = new Language(
  'C++',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const sql: Language = new Language(
  'SQL++',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const html: Language = new Language(
  'HTML, CSS',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const php: Language = new Language(
  'PHP',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

const kotlin: Language = new Language(
  'Kotlin',
  [topic1, topic2, topic3, topic4],
  jsScript,
  true
);

export const allTopics = [
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  topic7,
  topic8,
  topic9,
];

export const allQuestions = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
  q16,
  q17,
  q18,
  q19,
  q20,
];

export const allLanguages = [
  js,
  java,
  csharp,
  python3,
  cplusplus,
  sql,
  html,
  php,
  kotlin,
];

//C# Data

// export const csharp: Language = new Language('C#', [
//   new Topic(
//     'cst0001',
//     'Array basics',
//     TopicDifficulty.Beginner,
//     [],
//     [
//       new Question(
//         'cs02',
//         'Minus 2 if Even',
//         'Write simple function to minus 2 for all even numbers only',
//         300,
//         'reverseString(x)',
//         new TestCase('apple', 'elppa'),
//         [
//           new TestCase('apple', 'elppa'),
//           new TestCase('canberra', 'arrebnac'),
//           new TestCase('AusTraLia', 'aiLarTsuA'),
//           new TestCase('10 01', '10 01'),
//           new TestCase('', ''),
//         ]
//       ),
//     ]
//   ),
// ]);
