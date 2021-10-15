(function () {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.querySelector("#navbarExampleTransparentExample");
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();
