(function($) {

    //Initialize
    (function init() {
        initFullPage();
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

})(jQuery);
