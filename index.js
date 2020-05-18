const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// assuming 'sentence' is name of function
const titleCased = (sentence) => {
  /* going through tutorials array, identifying each
  item as 'tutorial' */
  return tutorials.map( tutorial => {
    // .split returns new array of words 
    let arrayWord = tutorial.split(" ");
    // mapping over new words array
    let newWords = arrayWord.map(word => 
      // start at 0 of each word, then uppercase
      // not sure what slice is doing
      word.charAt(0).toUpperCase() + word.slice(1));
    // joins edited words back and seperated by space
    let capSent = newWords.join(" ");
    return capSent;
  });
};