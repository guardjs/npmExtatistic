const fs = require('fs')
const path = require('path')
exports.command = ['create', 'create-feature']
exports.desc = 'create a feature file'
exports.builder = (arg) => {
  arg.positional('featureName', {
    alias: 'f',
    type: 'string',
    default: 'newFeature',
    describe: 'The name of the new feature',
  })
}
exports.handler = argv => { console.log('hi--------------------------') }
function createFile() {
  fs.readFile('./newFeature.sample', function read(err, data) {
    if (err) {
      throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    processFile(content);   // Or put the next step in a function and invoke it
  })
  argv.featureName
  fs.writeFile(`${__dirname}/${featureName}.js`, "Hey there!", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${__dirname}/${featureName}.js is created!`);
  })
}