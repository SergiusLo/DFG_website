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

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    document.body.classList.add("_touch");
  } else {
    document.body.classList.add("_pc");
  }

  //Burger menu
  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      menuBody.classList.toggle("_active");
      iconMenu.classList.toggle("_active");
    });
  }

  //scroll to cliked item
  const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;
        //  ---- if fixed header

        if (iconMenu.classList.contains("_active")) {
          document.body.classList.remove("_lock");
          menuBody.classList.remove("_active");
          iconMenu.classList.remove("_active");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }

  // const btn = document.querySelector(".menu-btn");
  // const btn1 = document.querySelector(".menu");
  // const body = document.querySelector("body");
  // const navig = document.querySelector(".navig");

  // btn.addEventListener("click", function () {
  //   btn1.classList.toggle("menu--active");
  //   btn.classList.toggle("btn--active");
  //   body.classList.toggle("hid");
  // });

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape") {
  //     btn1.classList.remove("menu--active");
  //     btn.classList.remove("btn--active");
  //     body.classList.remove("hid");
  //   }
  // });
});
