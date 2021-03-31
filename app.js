const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".info__title");
const sneaker = document.querySelector(".sneaker__img");
const purchase = document.querySelector(".purchase");
const purchaseBtn = purchase.querySelector(".purchase__btn");
const description = document.querySelector(".info__subtitle");
const sizes = document.querySelector(".sizes");

console.log(purchaseBtn);

// Moving animation event
container.addEventListener('mousemove', (event) => {
  let xAxis = ((window.innerWidth / 2) - event.pageX) / 25;
  let yAxis = ((window.innerHeight / 2) - event.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", () => {
  setTimeout(() => {
    card.style.transition = "none";
  }, 1000);

  // Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(250px)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(50px)";
});

purchase.addEventListener('mouseenter', () => {
  purchaseBtn.style.transform = "scale(1.2)";
  purchaseBtn.style.backgroundColor = "#08539c";
});

// Animate Out
container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  // Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});

purchase.addEventListener('mouseleave', () => {
  purchaseBtn.style.transform = "scale(1)";
  purchaseBtn.style.backgroundColor = "#f54642";
});