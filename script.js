// const indexHtml = document.querySelector('[data-js=indexHtml]');
const answerButton1 = document.querySelector('[data-js=answerButton1]');
const answer1 = document.querySelector('.answer1');

const bookmark1 = document.querySelector('[data-js=bookmark1]');
// Bookmark Toggle
bookmark1.addEventListener('click', () => {
  if (bookmark1.classList.contains('bookmark-src-white') == true) {
    bookmark1.classList.add('bookmark-src-black');
    bookmark1.classList.remove('bookmark-src-white');
  } else {
    bookmark1.classList.remove('bookmark-src-black');
    bookmark1.classList.add('bookmark-src-white');
  }
});

// Show Answer
answerButton1.addEventListener('click', () => {
  answer1.classList.toggle('hide');
});
