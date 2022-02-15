const bookMark1 = document.querySelector('#Bookmark1');
const answer1Btn = document.querySelector('.answer1-btn');
const answer1 = document.querySelector('.answer1');

var img1 = 'http://127.0.0.1:3000/images/bookmark-white.png';
var img2 = '<img id="Bookmark1" src="images/bookmark-dark.png">';

bookMark1.addEventListener('click', () => {
  if (bookMark1.src == img1) {
    document.getElementById('Bookmark1').src = 'images/bookmark-dark.png';
  } else {
    document.getElementById('Bookmark1').src = 'images/bookmark-white.png';
  }
});

answer1Btn.addEventListener('click', () => {
  answer1.classList.toggle('hide');
});
