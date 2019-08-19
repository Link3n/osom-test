import videoModal from './video-modal.js';
import imageModal from './image-modal.js';
import customSelect from './custom-select.js';
import languageSwitcher from './language-switcher.js';

$(function () {
    var $header = $('header');

    if ($(window).scrollTop() !== 0) {
        $header.addClass('header--fixed-color');
    } else {
        $header.removeClass('header--fixed-color');
    }
    
    $(window).resize(function () {
        var $nav = $('.navigation');

        if (!$nav.is(':visible')) {
            $nav.attr('style', null);
        }
    });

    $('.contacts__icon').on('click', function () {
        var $self = $(this);

        $self.toggleClass('contacts__icon--open')
            .siblings('.contacts__wrap').toggleClass('contacts__wrap--show');

        if ($self.hasClass('contacts__icon--open')) {
            var $contacts = $('.contacts__wrap');

            $(document).on('mouseup', function (e) {
                if (!$contacts.has(e.target).length && !$contacts.is(e.target)) {
                    $self.removeClass('contacts__icon--open')
                        .siblings('.contacts__wrap').removeClass('contacts__wrap--show');
                }
            });
        } else {
            $(document).off('mouseup');
        }
    });

    $('.header__nav-icon').on('click', function () {
        var $self = $(this);
        var $nav = $('.navigation');

        $nav.slideToggle(300);

        if (!$header.hasClass('header--fixed-color')) {
            $header.addClass('header--fixed-color');
        }

        if ($nav.is(':visible')) {
            $(document).on('mouseup', function (e) {
                if (!$nav.has(e.target).length && !$nav.is(e.target) && !$self.has(e.target).length && !$self.is(e.target)) {
                    $nav.slideUp(300);
                }
            });
        } else {
            $(document).off('mouseup');
        }
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
    languageSwitcher.init();
});
