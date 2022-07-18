import "./style.css";
import javascriptLogo from "./javascript.svg";
import parserBabel from "prettier/esm/parser-babel";
import prettier from "prettier";

const source = `
let a = 3;
function test() {

}

`;

const formattedCode = `${prettier.format(source, {
	plugins: [parserBabel],
  parer: 'babel',
})}`

const textarea = document.getElementById('textarea')
textarea.innerHTML = formattedCode
// document.querySelector("#app").innerHTML = `<pre>${formattedCode}</pre>`;


console.log(formattedCode)