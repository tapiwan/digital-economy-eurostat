(function($) {

    //Initialize
    (function init() {
        initFullPage();
        centerMenu();
    })();

    //Initialize fullPage plugin
    function initFullPage() {
        $('#fullpage').fullpage({
            anchors: [
                'development-of-digital-economy',
                'use-of-mobile-devices',
                'enterprises-use-of-e-business',
                'importance-of-social-media',
                'uses-of-social-media',
                'icts-influence-on-e-commerce',
                'turnover-of-e-sales',
                'b2b-b2c-by-countries',
                'employment-of-ict-specialists',
                'sources'
            ],
            menu: '#menu'
        });
    }

    //Center menu vertically
    function centerMenu() {
        var $menu = $('#menu');
            $menuHeight = $menu.height();

        $menu.css({
            "top": "50%",
            "margin-top": -($menuHeight/2)
        });
    }

})(jQuery);
