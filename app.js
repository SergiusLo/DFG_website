document.addEventListener("DOMContentLoaded", function () {
  const splider = document.querySelector(".splide");

  let splide = new Splide(splider, {
    perPage: 4,
    gap: "1rem",
    arrowPath: "none",
    pagination: false,
    autoScroll: {
      rewind: true,
      speed: 1,
      pauseOnHover: true,
    },
    640: {
      perPage: 3,
    },
  });
  splide.mount(window.splide.Extensions);

  const accordion = document.getElementsByClassName("contain");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  const btn = document.querySelector(".menu-btn");
  const btn1 = document.querySelector(".menu");
  const body = document.querySelector("body");
  const navig = document.querySelector(".navig");

  btn.addEventListener("click", function () {
    btn1.classList.toggle("menu--active");
    btn.classList.toggle("btn--active");
    body.classList.toggle("hid");
  });

});
