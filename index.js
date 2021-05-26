const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'fileName',
    message:
      'Which function and file would you like to create? Seperate by comma!',
  },
  {
    type: 'checkbox',
    message: 'select file type',
    name: 'fileTypes',
    choices: [{ name: 'component' }, { name: 'spec' }, { name: 'stories' }],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one fileType'
      }
      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  answers['fileName']
    .split(',')
    .forEach(answerEntry => writeFile(answerEntry.trim()))
})
