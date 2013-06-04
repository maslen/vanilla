!function() {
    $('.menuHolder').on('click', function(e) {
        $('body').toggleClass('navOpen');
        if ($(e.target).hasClass('menu')) {
            return false;
        }
    });

    $('.sectionNav').insertAfter('#head');
    $('.sectionNav .menuHolder').insertAfter('#head .pageTitle');

    var lastHoverOver = null,
        hovering = false,
        pauseCloseInProgress = false;
    function navSubToggle(e) {
        $('.nav .navSub').toggleClass('navSubOpen');
    }
    function navSubOpen(e) {
        $('.nav .navSub').addClass('navSubOpen');
        hovering = true;
    }
    function navSubClose() {
        $('.nav .navSub').removeClass('navSubOpen');
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
    $('.nav .navSub .navItemLabel').on('click', navSubToggle);
    $('.nav .navSub .navItemLabel, .nav .navSub .navItem').on('mouseover', navSubOpen);
    $('.nav .navSub').on('mouseout', navSubPauseClose);
    $('.nav .navSub, .nav .navSub .navItem').on('focus', navSubOpen);
    $('.nav .navSub, .nav .navSub .navItem').on('blur', navSubClose);
    $('body').on('focus', navSubClose);
}();