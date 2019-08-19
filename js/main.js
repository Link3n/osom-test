import videoModal from './video-modal.js';
import imageModal from './image-modal.js';
import customSelect from './custom-select.js';
import languageSwithcer from './language-switcher.js';

$(function () {
    var $header = $('header');

    if ($(window).scrollTop() !== 0) {
        $header.addClass('header--fixed-color');
    }

    $('#contacts-anchor').on('click', function (e) {
        e.preventDefault();

    });

    $('.navigation__link').on('click', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');

        if (url == '#contacts') {
            var contactsPos = $('footer').offset().top;

            $('html, body').animate({scrollTop: contactsPos}, 1500);
            return;
        }

        window.history.pushState({}, '', url);
    });

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop !== 0) {
            $header.addClass('header--fixed-color');
        } else {
            $header.removeClass('header--fixed-color');
        }
    });

    var $telInput = $('#consultation-form').children('input[type=tel]');

    $telInput.mask('+380 (99) 999-99-99');
    $telInput.on('keyup', function () {
         var val = $(this).val();
         var testPhoneNum = telephoneCheck(val);

         if (!testPhoneNum) {
             $(this).addClass('error');
         } else {
             $(this).removeClass('error');
         }
    });

    $('.accordion__item').on('click', function () {
        $(this).siblings('.accordion__item').removeClass('accordion__item--open')
            .children('.accordion__text').slideUp(200);
        $(this).toggleClass('accordion__item--open')
            .children('.accordion__text').slideToggle(200);
    });

    $('#video-container').on('click', function () {
        var videoSrc = $(this).children('video').attr('src');

        videoModal.show(videoSrc);
    });

    $('#license-image').on('click', function () {
        var imgSrc = $(this).find('img').attr('src');

        imageModal.show(imgSrc);
    });

    function telephoneCheck(str) {
        var patt = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/);
        return patt.test(str);
    }

    imageModal.init();
    customSelect.init();
    videoModal.init();
    languageSwithcer.init();
});
