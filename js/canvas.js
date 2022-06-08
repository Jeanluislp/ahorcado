const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

export function drawHangman(n) {
  switch (n) {
    case 1:
      pole();
      break;
    case 2:
      head();
      break;
    case 3:
      body();
      break;
    case 4:
      arms();
      break;
    case 5:
      legs();
      break;
    case 6:
      eyes();
      break;
  }
}

function pole() {
  ctx.beginPath();

  ctx.moveTo(286, 346);
  ctx.lineTo(0, 346);
  ctx.moveTo(78, 346);
  ctx.lineTo(78, 4);
  ctx.lineTo(251, 4);
  ctx.lineTo(251, 52);

  ctx.lineWidth = 4;
  ctx.strokeStyle = "#0A3871";

  ctx.stroke();
  ctx.closePath();
}
function head() {
  ctx.beginPath();

  ctx.arc(251, 83, 29, 0, Math.PI * 2);

  ctx.strokeStyle = "#0A3871";
  ctx.lineWidth = 4;

  ctx.stroke();
  ctx.closePath();
}
function body() {
  ctx.beginPath();

  ctx.moveTo(251, 113);
  ctx.lineTo(251, 244);

  ctx.strokeStyle = "#0A3871";
  ctx.lineWidth = 4;

  ctx.stroke();
  ctx.closePath();
}

function arms() {
  ctx.beginPath();

  ctx.moveTo(251, 118);
  ctx.lineTo(221, 188);

  ctx.moveTo(251, 118);
  ctx.lineTo(281, 188);

  ctx.strokeStyle = "#0A3871";
  ctx.lineWidth = 4;

  ctx.stroke();
  ctx.closePath();
}
function legs() {
  ctx.beginPath();

  ctx.moveTo(251, 244);
  ctx.lineTo(221, 314);

  ctx.moveTo(251, 244);
  ctx.lineTo(281, 314);
  ctx.strokeStyle = "#0A3871";
  ctx.lineWidth = 4;

  ctx.stroke();
  ctx.closePath();
}
function eyes() {
  ctx.beginPath();

  ctx.moveTo(235, 72);
  ctx.lineTo(245, 82);
  ctx.moveTo(245, 72);
  ctx.lineTo(235, 82);

  ctx.moveTo(256, 72);
  ctx.lineTo(266, 82);
  ctx.moveTo(266, 72);
  ctx.lineTo(256, 82);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;

  ctx.stroke();
  ctx.closePath();
}
