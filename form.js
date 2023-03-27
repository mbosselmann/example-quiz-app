const form = document.querySelector('[data-js="question-form"]');
const cardList = document.querySelector('[data-js="card-list"]');
const questionInput = document.querySelector('[data-js="question-text"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answerInput = document.querySelector('[data-js="answer-text"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const questionData = Object.fromEntries(formData);
  createNewCard(questionData);
  form.reset();
  questionInput.focus();
});

function createNewCard(data) {
  const listItem = document.createElement("li");
  listItem.classList.add("card-list__item");

  const article = document.createElement("article");
  article.classList.add("card");

  const headline = document.createElement("h2");
  headline.classList.add("card__question");
  headline.textContent = data.question;

  const answerButton = document.createElement("button");
  answerButton.setAttribute("type", "button");
  answerButton.classList.add("button");
  answerButton.textContent = "Show answer";

  const answerText = document.createElement("p");
  answerText.classList.add("card__answer");
  answerText.textContent = data.answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tag = document.createElement("li");
  tag.classList.add("card__tag-list-item");
  tag.textContent = data.tag;

  const bookmarkWrapper = document.createElement("div");
  bookmarkWrapper.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.setAttribute("type", "button");

  bookmarkButton.innerHTML = `        
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
        </svg>`;

  article.append(headline, answerButton, answerText, tagList, bookmarkWrapper);
  tagList.append(tag);
  bookmarkWrapper.append(bookmarkButton);
  listItem.append(article);
  cardList.append(listItem);
}

questionInput.addEventListener("input", (event) => {
  const maxLength = questionInput.getAttribute("maxlength");
  questionCounter.textContent = maxLength - event.target.value.length;
});

answerInput.addEventListener("input", (event) => {
  const maxLength = answerInput.getAttribute("maxlength");
  answerCounter.textContent = maxLength - event.target.value.length;
});
