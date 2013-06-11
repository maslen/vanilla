!function() {
    $('.menu--holder').on('click', function(e) {
        $('body').toggleClass('js-nav--open');
        if ($(e.target).hasClass('menu')) {
            return false;
        }
    });

    $('.section--nav').insertAfter('.section--head');
//    $('.sectionNav .menuHolder').insertAfter('#head .pageTitle');
    $($('.section--head .site-title')[0].parentNode).append($('.section--nav .menu--holder'));

    var lastHoverOver = null,
        hovering = false,
        pauseCloseInProgress = false;
    function navSubToggle(e) {
        $('.nav .nav--sub').toggleClass('js-nav--sub_open');
    }
    function navSubOpen(e) {
        $('.nav .nav--sub').addClass('js-nav--sub_open');
        hovering = true;
    }
    function navSubClose() {
        $('.nav .nav--sub').removeClass('js-nav--sub_open');
    }
    function navSubPauseClose() {
        hovering = false;
        if (!pauseCloseInProgress) {
            pauseCloseInProgress = true;
            setTimeout(function() {
                pauseCloseInProgress = false;
                if (!hovering) {
                    navSubClose();
                }
            }, 1000);
        }
    }
    $('.nav .nav--sub .nav--item_label').on('click', navSubToggle);
    $('.nav .nav--sub .nav--item_label, .nav .nav--sub .nav--item').on('mouseover', navSubOpen);
    $('.nav .nav--sub').on('mouseout', navSubPauseClose);
    $('.nav .nav--sub, .nav .nav--sub .nav--item').on('focus', navSubOpen);
    $('.nav .nav--sub, .nav .nav--sub .nav--item').on('blur', navSubClose);
    $('body').on('focus', navSubClose);
}();