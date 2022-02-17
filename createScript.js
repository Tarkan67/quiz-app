const textArea1 = document.querySelector('[data-js=textArea]');
const textAreaCount = document.querySelector('[data-js=textAreaCount]');

textArea1.addEventListener('input', () => {
  textArea1.value.toUpperCase();
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});

textAreaCount.addEventListener('input', () => {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});

function cool() {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
}
