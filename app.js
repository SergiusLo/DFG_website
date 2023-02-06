document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.getElementsByClassName("contain");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});
