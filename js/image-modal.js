var imageModal = (function () {
    var $imageModal = $('#image-modal');
    var $backgroundScreen = $('#background-screen');
    var $closeButton = $('.image-modal__close', $imageModal);
    var $img = $('img', $imageModal);

    function show(src) {
        $img.attr('src', src);
        $imageModal.addClass('show');
        $backgroundScreen.addClass('show');
        $(document).on('mouseup', function (e) {
            if (!$imageModal.has(e.target).length && !$imageModal.is(e.target)) {
                hide();
            }
        });
    }

    function hide() {
        $imageModal.removeClass('show');
        $backgroundScreen.removeClass('show');
        $(document).off('mouseup');
    }

    function attachEvents() {
        $closeButton.on('click', function () {
            hide();
        });
    }

    return {
        show: function (src) {
            show(src);
        },
        hide: hide,
        init: function () {
            attachEvents();
        }
    }
})();

export default imageModal;
