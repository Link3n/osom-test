var languageSwitcher = (function () {
    var $cnt = $('#language-switcher');
    var $wrap = $('.language-switcher__wrap', $cnt);
    var popupHeight = $('.language-switcher__height-wrap', $cnt).height();

    function show() {
        if ($wrap.hasClass('language-switcher__wrap--show')) {
            hide()
        } else {
            $wrap.addClass('language-switcher__wrap--show').height(popupHeight);
            $('.language-switcher__lang-item', $cnt).on('click', function (e) {
                var lang = $(this).data('lang');

                window.history.pushState({}, '', lang);
                $(this).addClass('language-switcher__lang-item--active')
                    .siblings().removeClass('language-switcher__lang-item--active');
            });
            $(document).on('mouseup', function (e) {
                if (!$cnt.has(e.target).length && !$cnt.is(e.target)) {
                    hide();
                }
            });
        }
    }

    function hide() {
        $('.language-switcher__lang-item', $cnt).off('click');
        $wrap.removeClass('language-switcher__wrap--show').attr('style', null);
        $(document).off('mouseup');
    }

    function attachEvents() {
        $wrap.on('click', function () {
            show();
        });
    }

    return {
        show: show,
        hide: hide,
        init: function () {
            attachEvents();
        }
    }
})();

export default languageSwitcher;
