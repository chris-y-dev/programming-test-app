import { Language, Topic, TopicDifficulty, Question } from '../models/language';

// JavaScript Data
const q1: Question = new Question(
  'js01',
  'Reverse the string',
  'Write a function called reverseString that takes a string as a parameter and returns the reverse of the string.',
  300
);

const q2: Question = new Question(
  'js02',
  'Capitalise letters',
  'Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the same string with the first letter capitalized.',
  300
);

const q3: Question = new Question(
  'js03',
  'Count the letter',
  'Write a function called countOccurrences that takes two parameters: a string and a character. The function should return the number of times the character appears in the string.',
  180
);

const q4: Question = new Question(
  'js04',
  'Remove white spaces',
  'Write a function called removeWhitespace that takes a string as a parameter and returns the same string with all whitespace characters removed.',
  180
);

const q5: Question = new Question(
  'js05',
  'Count all letters',
  'Write a function called takes a string as a parameter and returns the count of all letters excluding white spaces.',
  180
);
const q6: Question = new Question(
  'js06',
  'Replace All',
  'Write a function called replaceAll that takes three parameters: a string, a substring to replace, and a replacement string. The function should return a new string with all instances of the substring replaced with the replacement string.',
  180
);
const q7: Question = new Question(
  'js07',
  'Truncate a string',
  'Write a function called truncate that takes two parameters: a string and a number. If the length of the string is greater than the number, the function should return a truncated version of the string with ellipses added at the end. If the length of the string is less than or equal to the number, the function should return the original string.',
  180
);
const q8: Question = new Question(
  'js08',
  'Title Case',
  'Write a function called titleCase that takes a string as a parameter and returns the same string with the first letter of each word capitalized.',
  180
);
const q9: Question = new Question(
  'js09',
  'Reverse a sentence',
  'Write a function called reverseWords that takes a string as a parameter and returns the same string with the order of the words reversed.',
  180
);
const q10: Question = new Question(
  'js10',
  'Compress string',
  'Write a function called compressString that takes a string as a parameter and returns a compressed version of the string. The compressed version should replace repeated characters with the character followed by the number of times it appears consecutively. For example, the string "aaabbbccc" should be compressed to "a3b3c3".',
  180
);

const q11: Question = new Question(
  'js11',
  'Sum of array',
  'Write a function called sum that takes an array of numbers as a parameter and returns their sum.',
  300
);

const q12: Question = new Question(
  'js12',
  'Array average',
  'Write a function called average that takes an array of numbers as a parameter and returns their average.',
  300
);

const q13: Question = new Question(
  'js13',
  'Max of array',
  'Write a function called max that takes an array of numbers as a parameter and returns the largest number in the array.',
  180
);

const q14: Question = new Question(
  'js14',
  'Min of array',
  'Write a function called min that takes an array of numbers as a parameter and returns the smallest number in the array.',
  180
);

const q15: Question = new Question(
  'js15',
  'Reverse of array with only values larger than 5',
  'Write a function called reverse that takes an array as a parameter and returns a new array with the elements in reverse order, only including numbers greater than 5.',
  180
);
const q16: Question = new Question(
  'js16',
  'Sort ascending',
  'Write a function called sort that takes an array of numbers as a parameter and returns a new array with the numbers sorted in ascending order.',
  180
);
const q17: Question = new Question(
  'js17',
  'Unique numbers',
  'Write a function called unique that takes an array as a parameter and returns a new array with all duplicate elements removed.',
  180
);
const q18: Question = new Question(
  'js18',
  'Flatten nested arrays',
  'Write a function called flatten that takes an array of nested arrays as a parameter and returns a new array with all elements flattened into a single array.',
  180
);
const q19: Question = new Question(
  'js19',
  'Filter for values',
  'Write a function called filter that takes an array of numbers and a function as parameters. The function should return true or false depending on whether the number should be included in the filtered array. The function should return a new array with only the numbers for which the function returns true.',
  180
);
const q20: Question = new Question(
  'js20',
  'Conditional math operations',
  'Write a function called that doubles the value of all numbers greater than 10, and triples the value of numbers less than 10. If the number is 7, leave it alone. Return the new array',
  180
);

const topic1 = new Topic('jst0001', 'String basics', TopicDifficulty.Beginner, [
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
]);

const topic2 = new Topic(
  'jst0002',
  'Array manipulation',
  TopicDifficulty.Beginner,
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
  new Topic('cst0001', 'Array basics', TopicDifficulty.Beginner, [
    new Question(
      'cs02',
      'Minus 2 if Even',
      'Write simple function to minus 2 for all even numbers only',
      300
    ),
  ]),
]);
