(function($) {

    //Initialize
    (function init() {
        initFullPage();
    })();

    //Initialize fullPage plugin
    function initFullPage() {
        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right'
        });
    }

})(jQuery);
