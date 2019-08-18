$(function () {
    var $header = $('header');

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop !== 0) {
            $header.addClass('header--fixed-color');
        } else {
            $header.removeClass('header--fixed-color');
        }
    });

    $('.accordion__item').on('click', function () {
        $(this).siblings('.accordion__item').removeClass('accordion__item--open')
            .children('.accordion__text').slideUp(200);
        $(this).toggleClass('accordion__item--open')
            .children('.accordion__text').slideToggle(200);
    });

    customSelect.init();
});

var customSelect = (function () {
    var $customSelect = $('#custom-select');
    var $currentOption = $('.custom-select__current-option', $customSelect);
    var $list = $('.custom-select__list', $customSelect);

    function show() {
        $currentOption.addClass('custom-select__current-option--open');
        $list.slideDown(200);
        $(document).on('click', function (e) {
            if (!$customSelect.has(e.target).length && !$customSelect.is(e.target)) {
                hide()
            }
        });
    }

    function hide() {
        $currentOption.removeClass('custom-select__current-option--open');
        $list.slideUp(200);
        $(document).off('click');
    }

    function attachEvents() {
        $currentOption.on('click', function () {
             show();
        });

        $list.on('click', '.custom-select__list-item', function () {
             var text = $(this).text();

             $currentOption.text(text).removeClass('custom-select--default');
             hide();
        });
    }

    return {
        init: function () {
            attachEvents();
        },
        show: show,
        hide: hide,
    }
})();
