const prettier = require('prettier')


const source = `
let a = 3;
function test() {

}

`
console.log(prettier.format(source, {parser: 'babel'}))