var videoModal = (function () {
    var $videoModal = $('#video-modal');
    var $backgroundScreen = $('#background-screen');
    var $closeButton = $('.video-modal__close', $videoModal);
    var $video = $('video', $videoModal);

    function show(src) {
        $video.attr('src', src).get(0).play();
        $videoModal.addClass('show');
        $backgroundScreen.addClass('show');
        $(document).on('mouseup', function (e) {
            if (!$videoModal.has(e.target).length && !$videoModal.is(e.target)) {
                hide();
            }
        });
    }

    function hide() {
        $videoModal.removeClass('show');
        $backgroundScreen.removeClass('show');
        $video.get(0).pause();
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

export default videoModal;
