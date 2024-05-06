const containerElement = document.querySelector(".container");

const Careers = ["Web Devloper", "Web Designer", "Full Stack Web Devloper"];

let CaarerIndex = 0;
let CharecterIndex = 0;

UpdateText();

function UpdateText() {
  CharecterIndex++;
  containerElement.innerHTML = `<h1>I am a ${Careers[CaarerIndex].slice(0, CharecterIndex)}</h1>`;

  CharecterIndex++;
  if (CharecterIndex === Careers[CaarerIndex].length) {
    CaarerIndex++;
    CharecterIndex = 0;
  }

  if (CaarerIndex === Careers.length) {
    CareersIndex = 0;
  }
  setTimeout(UpdateText, 400);
}
