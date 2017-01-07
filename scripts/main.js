(function($) {
    var g = {};

    //Initialize
    (function init() {
        setInitialState();
        initFullPage();
        centerMenu();
    })();

    //Set initial state of all elements
    function setInitialState() {
        //Move intro picture out of sight
        g.$intro = $('#intro');
        g.$intro.css('margin-left', -g.$intro.width());

        //Set counters to their start value
        g.$counters = $('[data-counter]');
        g.$counters.each(function() {
            var $this = $(this);

            $this.html($this.data('start'));
        });

        //Set pillars to their start value
        g.$pillars = $('[data-pillar]');
        g.$pillars.each(function() {
            var $this = $(this),
                $number = $this.find('.number');

            $number.html($this.data('start'));
        });
    }

    //Initialize fullPage plugin
    function initFullPage() {
        $('#fullpage').fullpage({
            anchors: [
                'digital-economy-in-europe',
                'enterprises-connected-to-the-internet',
                'enterprises-use-of-e-business',
                'enterprises-using-social-media',
                'uses-of-social-media',
                'icts-influence-on-e-commerce',
                'turnover-of-e-sales',
                'e-sales-by-type-of-customer',
                'employment-of-ict-specialists',
                'sources'
            ],
            menu: '#menu',
            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);

                switch(index) {
                    case 1:
                        console.log('test');
                        initSectionOne();
                        break;
                    case 2:
                        initSectionTwo();
                        break;
                    case 3:
                        initSectionThree();
                        break;
                    case 4:
                        initSectionFour();
                        break;
                    case 5:
                        initSectionFive();
                        break;
                    case 6:
                        initSectionSix();
                        break;
                    case 7:
                        initSectionSeven();
                        break;
                    case 8:
                        initSectionEight();
                        break;
                    case 9:
                        initSectionNine();
                        break;
                    case 10:
                        initSectionTen();
                        break;

                }
            }
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

    function initSectionOne() {
        if(!g.sectionOneLoaded) {
            //Move the intro picture in from the left
            g.$intro.animate({
                marginLeft: 0
            }, 2000, function() {
                g.$intro.animate({
                    marginLeft: -50
                }, 500);
            });

            g.sectionOneLoaded = true;
        }
    }

    function initSectionTwo() {
        if(!g.sectionTwoLoaded) {
            //Let the counters count up
            g.$counters.each(function() {
                var $this = $(this),
                    $start = $this.data('start'),
                    $end  = $this.data('end');

                var interval = setInterval(function() {
                    if($start <= $end) {
                        $this.html($start++);
                    }
                    else {
                        clearInterval(interval);
                    }
                }, 10);
            });

            //Mark section two as loaded
            g.sectionTwoLoaded = true;
        }
    }

    function initSectionThree() {
        if(!g.sectionThreeLoaded) {

            g.$pillars.each(function() {
                var $this = $(this),
                    $start = $this.data('start'),
                    $end  = $this.data('end'),
                    $number = $this.find('.number');

                //Animate pillars growing
                var interval = setInterval(function() {
                    if($start <= $end) {
                        $this.height($start++*3);
                        $number.html($start++);
                    }
                    else {
                        clearInterval(interval);
                    }
                }, 10);

                //Tooltip toggling
                $this.next('.description').click(function() {
                    $(this).next('.tooltip').fadeToggle();
                });
            });

            g.sectionThreeLoaded = true;
        }
    }

    function initSectionFour() {
        if(!g.sectionFourLoaded) {

            g.sectionFourLoaded = true;
        }
    }

    function initSectionFive() {
        if(!g.sectionFiveLoaded) {

            g.sectionFiveLoaded = true;
        }
    }

    function initSectionSix() {
        if(!g.sectionSixLoaded) {

            g.sectionSixLoaded = true;
        }
    }

    function initSectionSeven() {
        if(!g.sectionSevenLoaded) {

            g.sectionSevenLoaded = true;
        }
    }

    function initSectionEight() {
        if(!g.sectionEightLoaded) {

            g.sectionEightLoaded = true;
        }
    }

    function initSectionNine() {
        if(!g.sectionNineLoaded) {

            g.sectionNineLoaded = true;
        }
    }

    function initSectionTen() {
        if(!g.sectionTenLoaded) {

            g.sectionTenLoaded = true;
        }
    }

})(jQuery);
