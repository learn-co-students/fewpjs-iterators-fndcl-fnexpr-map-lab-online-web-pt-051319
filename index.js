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

// function titleCased(tutorials) {
//   return tutorials.map tutorial => {
//   let sentence = tutorial.split(" ")
//   sentence.map(function(word) {
//     let newWord = word.split("");
//     let newNewWord = newWord[0].toUpperCase();
//     newWord[0] = newNewWord
//     let cappedWord = newWord.join('')
//     //console.log(cappedWord)
//   }).join('')
//   // sentence.join('')
//   // console.log(sentence)
// })
// }
// titleCased(tutorials);
// // })

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens = tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}
