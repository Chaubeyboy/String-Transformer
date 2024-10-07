const input = document.querySelector('input')
const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascelCaseOutput = document.querySelector('#pascelcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')


function capitalizeString(str) {
  if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length);
}


function camelCase(str){
    const LowerCaseString = str.toLowerCase()
    const wordsArray = LowerCaseString.split(' ')
      const  finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word
        return capitalizeString(word)
       })
    return finalArray.join('');
}

function pascelCase(str){
    const LowerCaseString = str.toLowerCase()
    const wordsArray = LowerCaseString.split(' ')
      const  finalArray = wordsArray.map((word) => {
        return capitalizeString(word)
       })
    return finalArray.join('');
}

function snakeCase(str){
  const wordsArray = str.split(' ')
  return str.replaceAll('','_')
}
  function kebabCase(str){
    const wordsArray = str.split(' ')
    return str.replaceAll('','-')
  }
    function trim(str){
      const wordsArray = str.split(' ')
      return str.replaceAll('','')
    } 

 function updateScreen () {
lowerCaseOutput.innerText = input.value.trim().toLowerCase();
upperCaseOutput.innerText = input.value.trim().toUpperCase();
camelCaseOutput.innerText = camelCase(input.value.trim())
pascelCaseOutput.innerText = pascelCase(input.value.trim())
snakeCaseOutput.innerText = snakeCase(input.value.trim())
kebabCaseOutput.innerText = kebabCase(input.value.trim())
trimOutput.innerText = trim(input.value.trim())
 }
 updateScreen()

 input.addEventListener('input', updateScreen)