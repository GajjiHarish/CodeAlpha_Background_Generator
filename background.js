var images = ["bg1.jpeg", "bg2.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpeg", "bg7.jpg", "bg8.jpg"];

function changeBackground() {
  var image = images[Math.floor(Math.random() * images.length)];
  imageContainer.style.backgroundImage = "url('" + image + "')";
}

var imageContainer = document.getElementById("image");
var changeButton = document.getElementById("changeBtn");
changeButton.addEventListener("click", changeBackground);
