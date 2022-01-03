'use strict';

let burger = document.querySelector(`.header-bottom__btn`);
let headerBottomMenu = document.querySelector(`.header-bottom__list`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-bottom__btn--active`);
  headerBottomMenu.classList.toggle(`header-bottom__list--active`);
});

$(function () {

  $('.accordion--active').next().slideToggle(2000);

  $('.tab').click(function(e) {

    e.preventDefault();

    $($(this).closest('.tabs-wrapper').find('li').find('a')).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('ul')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });


  $('.temperature__tabs-item').click(function(e) {

    // if($('.accordion').hasClass('accordion--one')) {
    if($('.temperature-accordion').hasClass('accordion--one')) {
      $('.temperature__tabs-item').not($(this)).removeClass('accordion--active');
      $('.accordion__link-list').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active').next().slideToggle(300);

  });

  $('.faq__accordion-item').click(function(e) {

    // if($('.accordion').hasClass('accordion--one')) {
    if($('.faq-accordion').hasClass('accordion--one')) {
      $('.faq__accordion-item').not($(this)).removeClass('accordion--active');
      $('.faq__accordion-text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active').next().slideToggle(300);

  });

});
