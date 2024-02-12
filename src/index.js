import p5 from "p5";

new p5((p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(200, 200, 50, 50);
  };
});

const displayWindow = (tabSelection = "homepage") => {
  clearWindow();
  switch (tabSelection) {
    case "homepage":
      break;

    case "":
      break;

    case "":
      break;

    default:
      break;
  }
};

const clearWindow = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
};

function tabSelect(event) {
  displayWindow(event.target.id);
}

function setupListeners() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", tabSelect);
  }); //
}

setupListeners();
displayWindow();
