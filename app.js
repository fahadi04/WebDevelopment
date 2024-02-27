let myImage = document.querySelectorAll(".myImage img");
for (let i = 0; i < myImage.length; i++) {
  myImage[i].addEventListener("mouseover", () => {
    let mySrc = myImage[i].getAttribute("src");
    if (mySrc === "fahad.jpg") {
      myImage[i].setAttribute("src", "fahad.jpg");
    } else {
      myImage[i].setAttribute("src", "f img.jpg");
    }
  });
}

for (let i = 0; i < myImage.length; i++) {
  myImage[i].addEventListener("mouseout", () => {
    let mySrc = myImage[i].getAttribute("src");
    if (mySrc === "fahad.jpg") {
      myImage[i].setAttribute("src", "f img.jpg");
    } else {
      myImage[i].setAttribute("src", "fahad.jpg");
    }
  });
}

var typed = new Typed('.auto-text', {
  strings: ["Programmer", "Web Designer", "Web Developer"],
  typeSpeed: 150,
  BackSpeed: 60,
  loop: true
});