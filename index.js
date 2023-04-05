const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-question"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer--active");
  const answerButtonText = answerButton.textContent.trim();
  answerButton.textContent =
    answerButtonText === "Show answer" ? "Hide answer" : "Show answer";
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
