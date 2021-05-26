const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which function and file would you like to create? Seperate by comma!',
  },
]

inquirer.prompt(questions).then(answers => {
  answers['file']
    .split(',')
    .forEach(answerEntry => writeFile(answerEntry.trim()))
})
