'use strict';

let burger = document.querySelector(`.header-bottom__btn`);
let headerBottomMenu = document.querySelector(`.header-bottom__list`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-bottom__btn--active`);
  headerBottomMenu.classList.toggle(`header-bottom__list--active`);
});
