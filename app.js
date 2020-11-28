const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("[name = text-input]");
const textOutput = document.querySelector("#text-output");
const serverUrl = "https://api.funtranslations.com/translate/minion.json";

function urlCreater(text) {
  return serverUrl + "?text=" + text;
}

btnTranslate.addEventListener("click", () => {
  const inputText = textInput.value;
  fetch(urlCreater(inputText))
    .then((response) => response.json())
    .then((json) => (textOutput.innerHTML = json.contents.translated))
    .catch((err) => alert(err));
});
