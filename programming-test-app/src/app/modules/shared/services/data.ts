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
  300,
  'reverseString(str)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q2: Question = new Question(
  'js02',
  'Capitalise letters',
  'Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the same string with the first letter capitalized.',
  300,
  'capitalizeFirstLetter(str)',
  new TestCase('laptop', 'Laptop'),
  [
    new TestCase('', ''),
    new TestCase('melbourne', 'Melbourne'),
    new TestCase('welcome to australia', 'Welcome to australia'),
    new TestCase(' hello', ' Hello'),
    new TestCase('barak Obama', 'Barak Obama'),
  ]
);

const q3: Question = new Question(
  'js03',
  'Count the letter',
  'Write a function called countOccurrences that takes two parameters: a string and a character. The function should return the number of times the character appears in the string.',
  180,
  'countOccurrences(str, char)',
  new TestCase(['bottle', 't'], 2),
  [
    new TestCase(['good morning', 'o'], 3),
    new TestCase(['', 't'], 0),
    new TestCase(['Hello WORLD', 'l'], 3),
    new TestCase(['caterpillar', 'z'], 0),
    new TestCase(['chelsea', 'e'], 2),
  ]
);

const q4: Question = new Question(
  'js04',
  'Remove white spaces',
  'Write a function called removeWhitespace that takes a string as a parameter and returns the same string with all whitespace characters removed.',
  180,
  'removeWhitespace(str)',
  new TestCase('Hello World', 'HelloWorld'),
  [
    new TestCase('   ', ''),
    new TestCase('abc def ghi ', 'abcdefghi'),
    new TestCase(' air plane', 'airplane'),
    new TestCase('10 01', '1001'),
    new TestCase('', ''),
  ]
);

const q5: Question = new Question(
  'js05',
  'Count all letters',
  'Write a function called countLetters takes a string as a parameter and returns the count of all letters excluding white spaces.',
  180,
  'countLetters(str)',
  new TestCase('apple', 5),
  [
    new TestCase('Good Day', 8),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('', 0),
    new TestCase('aaaaaa aaaa', 10),
    new TestCase('a b c d e', 5),
  ]
);
const q6: Question = new Question(
  'js06',
  'Replace All',
  'Write a function called replaceAll that takes three parameters: a string, a substring to replace, and a replacement string. The function should return a new string with all instances of the substring replaced with the replacement string.',
  180,
  'replaceAll(str, substr, repstr)',
  new TestCase(['good morning', 'good', 'bad'], 'bad morning'),
  [
    new TestCase(['good morning', 'good', 'bad'], 'bad morning'),
    new TestCase(['my dog is a cat', 'dog', 'cat'], 'my cat is a cat'),
    new TestCase(['10034500', '00', 'xx'], '1xx345xx'),
    new TestCase(['abcdef', '', 'z'], 'abcdef'),
    new TestCase(['www.hello.com', '.com', '.au'], 'www.hello.au'),
  ]
);
const q7: Question = new Question(
  'js07',
  'Truncate a string',
  'Write a function called truncate that takes two parameters: a string and a number. If the length of the string is greater than the number, the function should return a truncated version of the string with ellipses (...) added at the end. If the length of the string is less than or equal to the number, the function should return the original string.',
  180,
  'truncate(str, num)',
  new TestCase(['apple', 3], 'app...'),
  [
    new TestCase(['Good morning my friend', 6], 'Good m...'),
    new TestCase(['  abcdef', 4], '  ab...'),
    new TestCase(['australia', 3], 'aus...'),
    new TestCase(['read more', 9], 'read more'),
    new TestCase(['', 2], ''),
  ]
);
const q8: Question = new Question(
  'js08',
  'Title Case',
  'Write a function called titleCase that takes a string as a parameter and returns the same string with the first letter of each word capitalized.',
  180,
  'titleCase(x)',
  new TestCase('welcome to jdoodle', 'Welcome To Jdoodle'),
  [
    new TestCase('abcdef g', 'Abcdef G'),
    new TestCase('   hello', '   Hello'),
    new TestCase('HELLO world', 'HELLO World'),
    new TestCase('10 apples', '10 Apples'),
    new TestCase('', ''),
  ]
);
const q9: Question = new Question(
  'js09',
  'Reverse a sentence',
  'Write a function called reverseWords that takes a string as a parameter and returns the same string with the order of the words reversed.',
  180,
  'reverseWords(str)',
  new TestCase('JDoodle', 'eldooDJ'),
  [
    new TestCase('Welcome my friend', 'dneirf ym emocleW'),
    new TestCase('  10   ', '   01  '),
    new TestCase('', ''),
    new TestCase('i like codinG', 'Gnidoc ekil i'),
    new TestCase('131313', '313131'),
  ]
);
const q10: Question = new Question(
  'js10',
  'Compress string',
  'Write a function called compressString that takes a string as a parameter and returns a compressed version of the string. The compressed version should replace repeated characters with the character followed by the number of times it appears consecutively. For example, the string "aaabbbccc" should be compressed to "a3b3c3".',
  180,
  'compressString(str)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q11: Question = new Question(
  'js11',
  'Sum of array',
  'Write a function called sum that takes an array of numbers as a parameter and returns their sum.',
  300,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q12: Question = new Question(
  'js12',
  'Array average',
  'Write a function called average that takes an array of numbers as a parameter and returns their average.',
  300,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q13: Question = new Question(
  'js13',
  'Max of array',
  'Write a function called max that takes an array of numbers as a parameter and returns the largest number in the array.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q14: Question = new Question(
  'js14',
  'Min of array',
  'Write a function called min that takes an array of numbers as a parameter and returns the smallest number in the array.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const q15: Question = new Question(
  'js15',
  'Reverse of array with only values larger than 5',
  'Write a function called reverse that takes an array as a parameter and returns a new array with the elements in reverse order, only including numbers greater than 5.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);
const q16: Question = new Question(
  'js16',
  'Sort ascending',
  'Write a function called sort that takes an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);
const q17: Question = new Question(
  'js17',
  'Unique numbers',
  'Write a function called unique that takes an array as a parameter and returns a new array with all duplicate elements removed.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);
const q18: Question = new Question(
  'js18',
  'Flatten nested arrays',
  'Write a function called flatten that takes an array of nested arrays as a parameter and returns a new array with all elements flattened into a single array.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);
const q19: Question = new Question(
  'js19',
  'Filter for values',
  'Write a function called filter that takes an array of numbers and a function as parameters. The function should return true or false depending on whether the number should be included in the filtered array. The function should return a new array with only the numbers for which the function returns true.',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);
const q20: Question = new Question(
  'js20',
  'Conditional math operations',
  'Write a function called that doubles the value of all numbers greater than 10, and triples the value of numbers less than 10. If the number is 7, leave it alone. Return the new array',
  180,
  'reverseString(x)',
  new TestCase('apple', 'elppa'),
  [
    new TestCase('apple', 'elppa'),
    new TestCase('canberra', 'arrebnac'),
    new TestCase('AusTraLia', 'aiLarTsuA'),
    new TestCase('10 01', '10 01'),
    new TestCase('', ''),
  ]
);

const topic1 = new Topic(
  'jst0001',
  'String basics',
  TopicDifficulty.Beginner,
  [
    'In this quiz, you will be tested on your knowledge of manipulating strings in JavaScript. String manipulation is an essential skill for any JavaScript developer, as it involves working with text data to perform various operations like concatenation, splitting, slicing, and more.',
    "By the end of this quiz, you should have a solid understanding of how to work with strings in JavaScript, and be able to apply that knowledge to real-world programming tasks.So get ready to put your JavaScript skills to the test, and let's get started!",
  ],
  [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
);

const topic2 = new Topic(
  'jst0002',
  'Array manipulation',
  TopicDifficulty.Beginner,
  [
    ' In this quiz, you will be tested on your knowledge of manipulating arrays in JavaScript. Array manipulation is a fundamental skill for any JavaScript developer, as it involves working with collections of data to perform various operations like sorting, filtering, mapping, and more.',
    'By the end of this quiz, you should have a solid understanding of how to work with arrays in JavaScript, and be able to apply that knowledge to real-world programming tasks.',
  ],
  [q11, q12, q13, q14, q15, q16, q17, q18, q19, q20]
);

export const js: Language = new Language('JavaScript', [topic1, topic2]);

export const allTopics = [topic1, topic2];

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

export const allLanguages = [js];

//C# Data

export const csharp: Language = new Language('C#', [
  new Topic(
    'cst0001',
    'Array basics',
    TopicDifficulty.Beginner,
    [],
    [
      new Question(
        'cs02',
        'Minus 2 if Even',
        'Write simple function to minus 2 for all even numbers only',
        300,
        'reverseString(x)',
        new TestCase('apple', 'elppa'),
        [
          new TestCase('apple', 'elppa'),
          new TestCase('canberra', 'arrebnac'),
          new TestCase('AusTraLia', 'aiLarTsuA'),
          new TestCase('10 01', '10 01'),
          new TestCase('', ''),
        ]
      ),
    ]
  ),
]);
