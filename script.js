/*  const for question-card logic */
const collapseList = document.querySelectorAll('[data-js="collapse"]');
const bookmarkList = document.querySelectorAll('[data-js="bookmark"]');

/*  const for textarea counter */
const textArea1 = document.querySelector('[data-js=textArea]');
const textAreaCount = document.querySelector('[data-js=textAreaCount]');

/* const for single-page logic */
const indexDiv = document.querySelector('[data-js="index-div"]');
const bookmarkDiv = document.querySelector('[data-js="bookmark-div"]');
const createDiv = document.querySelector('[data-js="create-div"]');
const profileDiv = document.querySelector('[data-js="profile-div"]');

const indexLink = document.querySelector('[data-js="index-link"]');
const bookmarkLink = document.querySelector('[data-js="bookmark-link"]');
const createLink = document.querySelector('[data-js="create-link"]');
const profileLink = document.querySelector('[data-js="profile-link"]');

const indexHighlight = document.querySelector('[data-js="index-highlight"]');
const bookmarkHighlight = document.querySelector('[data-js="bookmark-highlight"]');
const createHighlight = document.querySelector('[data-js="create-highlight"]');
const profilesHighlight = document.querySelector('[data-js="profiles-highlight"]');

/* links for single-page logic */
indexLink.addEventListener('click', () => {
  indexHighlight.classList.add('highlight');
  bookmarkHighlight.classList.remove('highlight');
  createHighlight.classList.remove('highlight');
  profilesHighlight.classList.remove('highlight');

  indexDiv.classList.remove('hide');
  bookmarkDiv.classList.add('hide');
  createDiv.classList.add('hide');
  profileDiv.classList.add('hide');
  window.scrollTo(0, 0);
});

bookmarkLink.addEventListener('click', () => {
  indexHighlight.classList.remove('highlight');
  bookmarkHighlight.classList.add('highlight');
  createHighlight.classList.remove('highlight');
  profilesHighlight.classList.remove('highlight');

  bookmarkDiv.classList.remove('hide');
  indexDiv.classList.add('hide');
  createDiv.classList.add('hide');
  profileDiv.classList.add('hide');
  window.scrollTo(0, 0);
});

createLink.addEventListener('click', () => {
  indexHighlight.classList.remove('highlight');
  bookmarkHighlight.classList.remove('highlight');
  createHighlight.classList.add('highlight');
  profilesHighlight.classList.remove('highlight');

  createDiv.classList.remove('hide');
  indexDiv.classList.add('hide');
  profileDiv.classList.add('hide');
  bookmarkDiv.classList.add('hide');
  window.scrollTo(0, 0);
});

profileLink.addEventListener('click', () => {
  indexHighlight.classList.remove('highlight');
  bookmarkHighlight.classList.remove('highlight');
  createHighlight.classList.remove('highlight');
  profilesHighlight.classList.add('highlight');

  profileDiv.classList.remove('hide');
  indexDiv.classList.add('hide');
  createDiv.classList.add('hide');
  bookmarkDiv.classList.add('hide');
  window.scrollTo(0, 0);
});

/* logic for question cards */

collapseList.forEach(collapseElement => {
  const collapseTrigger = collapseElement.querySelector(
    '[data-js="collapse-trigger"]'
  );
  const collapseContent = collapseElement.querySelector(
    '[data-js="collapse-content"]'
  );
  collapseTrigger.addEventListener('click', () => {
    collapseContent.classList.toggle('hide');
  });
});

bookmarkList.forEach(bookmarkElement => {
  const collapseContent = bookmarkElement.querySelector('[data-js="bookmark"]');
  console.log(bookmarkElement, collapseContent);
  bookmarkElement.addEventListener('click', () => {
    if (bookmarkElement.classList.contains('bookmark-src-white') == true) {
      bookmarkElement.classList.add('bookmark-src-black');
      bookmarkElement.classList.remove('bookmark-src-white');
    } else {
      bookmarkElement.classList.remove('bookmark-src-black');
      bookmarkElement.classList.add('bookmark-src-white');
    }
    console.log(bookmarkElement, collapseContent);
  });
});

textArea1.addEventListener('input', () => {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});

textAreaCount.addEventListener('input', () => {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});

// const indexHtml = document.querySelector('[data-js=indexHtml]');
// const answerButton1 = document.querySelector('[data-js=answerButton1]');
// const answer1 = document.querySelector('.answer1');

// const bookmark1 = document.querySelector('[data-js=bookmark1]');
// // Bookmark Toggle
// bookmark1.addEventListener('click', () => {
//   if (bookmark1.classList.contains('bookmark-src-white') == true) {
//     bookmark1.classList.add('bookmark-src-black');
//     bookmark1.classList.remove('bookmark-src-white');
//   } else {
//     bookmark1.classList.remove('bookmark-src-black');
//     bookmark1.classList.add('bookmark-src-white');
//   }
// });

// Show Answer
// answerButton1.addEventListener('click', () => {
//   answer1.classList.toggle('hide');
// });

// querySelectoralltest

// const questionCard = document.querySelectorAll('[data-js=question-card]');

// questionCard.forEach(bookmarkElement => {
//   const bookmarkTrigger = bookmarkElement.querySelector(
//     '[data-js="bookmark-element"]');

//     bookmarkTrigger.addEventListener('click', () => {
//       if(bookmark1.classList.contains('bookmark-src-white') == true)
//       collapseContent.classList.toggle('show');
//     });
// });
