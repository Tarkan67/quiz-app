const answerButton1 = document.querySelector('[data-js=answerButton1]');
const answer1 = document.querySelector('.answer1');

const bookmark1 = document.querySelector('[data-js=bookmark1]');
// Bookmark
bookmark1.addEventListener('click', () => {
  const imgWhite = 'http://127.0.0.1:5500/images/bookmark-white.png';
  const imgDark = 'images/bookmark-white.png';
  if (bookmark1.src == imgWhite) {
    bookmark1.src = 'images/bookmark-dark.png';
  } else {
    bookmark1.src = 'images/bookmark-white.png';
  }
});

// Show Answer
answerButton1.addEventListener('click', () => {
  answer1.classList.toggle('hide');
});
