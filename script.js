const bookMark1 = document.querySelector("#Bookmark1");

bookMark1.addEventListener("click", () => {
  var img1 = "http://127.0.0.1:3000/images/bookmark-white.png";
  var img2 = '<img id="Bookmark1" src="images/bookmark-dark.png">';
  if ((bookMark1.src = img1)) {
    document.getElementById("Bookmark1").src = "images/bookmark-dark.png";
  } else {
    document.getElementById("Bookmark1").src = "images/bookmark-white.png";
  }
});
