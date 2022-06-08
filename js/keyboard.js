const input = document.querySelector("#input-text");

setInterval(() => {
  input.focus();
  input.click();
  input.trigger("tap")
}, 100);
