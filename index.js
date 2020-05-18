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

const titleCased = (input) => {
    return tutorials.map( tutorial => {  //why does this need return
    let newLine = tutorial.split(' ')
    let newCap = 
    newLine.map( line => line[0].toUpperCase() + line.slice(1)  ) //why is slice here
    console.log(newLine)  //why does this not show up with uppercase
    let response = newCap.join(' ')
    return response
   })
}
