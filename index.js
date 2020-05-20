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

function capitalize(string){
  let arr = string.split(" ")
  let newArr = []
  for (element of arr){
    let lement = element.slice(1)
    newArr.push(element[0].toUpperCase() + lement)
  }
  newString = newArr.join(" ")
  return newString
};

const titleCased = tutorials.map(capitalize);

// THIS WORKS WHEN I RUN IT BUT THE TEST KEEPS SAYING TITLECASED IS NOT DEFINED
// IT'S RIGHT GODDAMNED THERE ON LINE 25
// AND IT FUNCTIONS CORRECTLY


