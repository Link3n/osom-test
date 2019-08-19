var customSelect = (function () {
    var $hiddenSelect = $('.consultation-form__select');
    var $customSelect = $('#custom-select');
    var $currentOption = $('.custom-select__current-option', $customSelect);
    var $list = $('.custom-select__list', $customSelect);

    function show() {
        $currentOption.addClass('custom-select__current-option--open');
        $list.slideDown(200);
        $(document).on('mouseup', function (e) {
            if (!$customSelect.has(e.target).length && !$customSelect.is(e.target)) {
                hide()
            }
        });
    }

    function hide() {
        $currentOption.removeClass('custom-select__current-option--open');
        $list.slideUp(200);
        $(document).off('mouseup');
    }

    function attachEvents() {
        $currentOption.on('click', function () {
            show();
        });

        $list.on('click', '.custom-select__list-item', function () {
            var value = $(this).data('value');
            var text = $(this).text();

            $currentOption.text(text).removeClass('custom-select--default');
            $hiddenSelect.val(value);
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

export default customSelect;
