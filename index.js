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

// const titleCased = tutorials.map(titleCased);

// let newArray = tutorials.map(titleCased);

// function titleCased(tutorial) {


//  return newTutorial.join(' ')
// }

// const titleCased = tutorials.map(function (tutorial)) => {
//  return tutorials
// }

const titleCased = () => {
  return tutorials.map(tutorial => {
    const caps = []
    let newTutorial = tutorial.split(' ')
    for (let word of newTutorial) {
      caps.push(word[0].toUpperCase() + word.slice(1))
    }
    return caps.join(' ')
  })
}

titleCased()

