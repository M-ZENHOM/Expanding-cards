let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.parentElement.querySelectorAll(".expand").forEach((el) => {
      el.classList.remove("expand");
    });
    card.classList.add("expand");
  });
});
