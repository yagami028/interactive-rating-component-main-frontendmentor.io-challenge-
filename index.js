(function () {
  const buttonValArr = Array.from(
    document.getElementsByClassName("rating-card__mark-btn")
  );
  const submitBtn = document.getElementById("submit-btn");
  const res = buttonValArr.map((btn) => {
    btn.addEventListener("click", () => {
      buttonValArr.forEach((item) =>
        item.classList.remove("rating-card__btn-active")
      );
      const mark = btn.textContent;
      btn.classList.add("rating-card__btn-active");
      submitBtn.removeAttribute("disabled");
      submitBtn.addEventListener("click", () => {
        const quizCard = document.getElementById("rating-quiz-card");
        const resCard = document.getElementById("rating-res-card");
        quizCard.style.display = "none";
        resCard.classList.remove("rating-res-nodisplay");
        resCard.style.display = "block";
        const markValue = document.getElementById("mark-value");
        markValue.innerText = mark;
      });
    });
  });
})();
