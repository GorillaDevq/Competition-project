document.querySelector(".footer__button").onclick = function () {
  document
    .querySelector(".footer__button")
    .classList.toggle("footer__button_hidden");
  document
    .querySelector(".footer__copyright")
    .classList.toggle("footer__copyright_active");
  document
    .querySelector(".footer__separator")
    .classList.toggle("footer__separator_active");
  document
    .querySelector(".footer__year")
    .classList.toggle("footer__year_active");
  document
    .querySelector(".footer__authors")
    .classList.toggle("footer__authors_active");
};

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("quotes__cell_active");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".quotes__cell");

for (let elm of elements) {
  observer.observe(elm);
}
