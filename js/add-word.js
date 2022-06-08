const addBtn = document.querySelector("#save");
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
addBtn.addEventListener("click", (e) => {
  const textAreaValue = document
    .querySelector("#text-area")
    .value.toUpperCase();
  localStorage.setItem("word", JSON.stringify(textAreaValue));
  window.location.href = "../Hangman.html";
});
