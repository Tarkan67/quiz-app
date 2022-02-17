const textArea1 = document.querySelector('[data-js=textArea]');
const textAreaCount = document.querySelector('[data-js=textAreaCount]');

textArea1.addEventListener('input', () => {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});

textAreaCount.addEventListener('input', () => {
  textAreaCount.textContent = textArea1.value.length;
  return textAreaCount.textContent;
});
