(function($) {

    //Initialize
    (function init() {
        initFullPage();
        centerMenu();
        initPillars();
    })();

    //Initialize fullPage plugin
    function initFullPage() {
        $('#fullpage').fullpage({
            anchors: [
                'digital-economy-in-europe',
                'enterprises-connected-to-the-internet',
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

    function initPillars() {
        var $pillars = $('.pillar-wrapper');

        //Give each pillar the right height
        $pillars.find('.pillar').each(function() {
            $(this).height($(this).data('height')*3);
        });
    }

})(jQuery);
