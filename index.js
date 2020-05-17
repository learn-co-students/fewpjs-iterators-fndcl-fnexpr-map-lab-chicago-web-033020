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

// My code

// function capitalizeWords(string) {
//   let newString = string.split(' ')

//   for (let index = 0; index < newString.length; index++) {
//     newString[index] = newString[index].charAt(0).toUpperCase() + newString[index].slice(1)
//   }

//   let finalString = newString.join(' ')

//   return finalString
// }

// let capitalizedTutotitleCasedrials = tutorials.map(function(tutorial) {
//   return capitalizeWords(tutorial)
// })

// Test code

const titleCased = () => {
  const newTutorialsArray = tutorials.map(tutorial => {
    let tutorialArr = tutorial.split(' ')
    
    for (let index = 0; index < tutorialArr.length; index++) {
      tutorialArr[index] = tutorialArr[index].charAt(0).toUpperCase() + tutorialArr[index].slice(1)
    }

    let capitalizedTutorial = tutorialArr.join(' ')

    return capitalizedTutorial
  })
  
  return newTutorialsArray
}

titleCased()