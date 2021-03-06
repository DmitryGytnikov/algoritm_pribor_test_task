'use strict';

// Бургер
let burger = document.querySelector(`.header-bottom__btn`);
let headerBottomMenu = document.querySelector(`.header-bottom__list`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burger.classList.toggle(`header-bottom__btn--active`);
  headerBottomMenu.classList.toggle(`header-bottom__list--active`);
});

$(function () {

  $('.accordion--active').next().slideToggle(300);
  $('.accordion--active-1').next().slideToggle(0);

  $('.tab').click(function(e) {

    e.preventDefault();

    $($(this).closest('.tabs-wrapper').find('li').find('a')).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('ul')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });

  $('.tab-1').click(function(e) {

    e.preventDefault();

    $($(this).closest('.card__tab').find('li').find('.tab-1')).removeClass('tab--active-1');
    // $($(this).closest('.tabs-wrapper-1').find('li').find('a')).removeClass('tab--active-1');
    $($(this).closest('.tabs-wrapper-1').siblings().find('ul')).removeClass('tabs-content--active-1');

    $(this).addClass('tab--active-1');
    $($(this).attr('href')).addClass('tabs-content--active-1');

  });

  $('.temperature__tabs-item').click(function(e) {

    if($('.temperature-accordion').hasClass('accordion--one')) {
      $('.temperature__tabs-item').not($(this)).removeClass('accordion--active');
      $('.accordion__link-list').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active').next().slideToggle(300);

  });

  $('.faq__accordion-item').click(function(e) {

    if($('.faq-accordion').hasClass('accordion--one')) {
      $('.faq__accordion-item').not($(this)).removeClass('accordion--active');
      $('.faq__accordion-text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active').next().slideToggle(300);

  });

  $('.temperature__tabs-item-1').click(function(e) {

    if($('.temperature-accordion').hasClass('accordion--one')) {
      $('.temperature__tabs-item-1').not($(this)).removeClass('accordion--active-1');
      $('.accordion__link-list-1').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('accordion--active-1').next().slideToggle(300);

  });


  // jQuery-плагин для установки курсора в определенной позиции pos (для mask):
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  // Решение проблемы с кликом по центру(для mask):
  $('.input-box__tel-input').click(function(){
    $(this).setCursorPosition(3);
    }).mask("+7(999) 999-99-99",{autoclear: false});

});

// Закрытие попапа fancybox по Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    $.fancybox.close();
  }
});
