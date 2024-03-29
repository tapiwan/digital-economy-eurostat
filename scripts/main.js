(function($) {
    var g = {};

    //Initialize
    (function init() {
        setInitialState();
        centerMenu();
        initFullPage();
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
                $number = $this.find('[data-pillar-percentage]');

            $number.html($this.data('start'));
        });

        //Load tooltips
        g.$tooltips = $('[data-tooltip]');
        g.$tooltips.each(function() {
            var $toggler = $(this),
                $target = $($toggler.data('tooltip'));

            if($toggler.data('tooltip-state') === 'visible') {
                $target.show();
            }
            else {
                $target.hide();
            }

            $toggler.click(function() {
                $target.fadeToggle();
            });
        });

        //Load coins
        g.$coins = $('[data-coin]');
        g.$coins.each(function() {
            var $coin = $(this);

            $coin.click(function() {
                var $diff = $coin.siblings('[data-coin-difference]');

                $coin.toggleClass('flipped');

                if($diff.css('display') === 'block') {
                    $diff.fadeToggle();
                }
                else {
                    setTimeout(function() {
                        $diff.fadeToggle();
                    }, 1000);
                }


            })
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

    //Initialize fullPage plugin
    function initFullPage() {
        $('#fullpage').fullpage({
            anchors: [
                'digital-economy-in-europe',
                'enterprises-connected-to-the-internet',
                'enterprises-use-of-e-business',
                'enterprises-using-social-media',
                'enterprises-engage-in-e-commerce',
                'turnover-of-e-sales',
                'web-sales-by-type-of-customer',
                'employment-of-ict-specialists',
                'sources'
            ],
            menu: '#menu',
            afterLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                var loadedSection = $(this);

                switch(index) {
                    case 1:
                        initSectionOne(loadedSection);
                        break;
                    case 2:
                        initSectionTwo(loadedSection);
                        break;
                    case 3:
                        initSectionThree(loadedSection);
                        break;
                    case 4:
                        initSectionFour(loadedSection);
                        break;
                    case 5:
                        initSectionFive(loadedSection);
                        break;
                    case 6:
                        initSectionSix(loadedSection);
                        break;
                    case 7:
                        initSectionSeven(loadedSection);
                        break;
                    case 8:
                        initSectionEight(loadedSection);
                        break;
                    case 9:
                        initSectionNine(loadedSection);
                        break;

                }
            },
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                var loadedSlide = $(this);

                if(index == 4 && slideIndex == 1) {
                    initSectionFourTwo(loadedSlide);
                }
            }
        });
    }

    function initSectionOne(section) {
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

    function initSectionTwo(section) {
        if(!g.sectionTwoLoaded) {
            animateCounters(section);
            animateSpeedo(section);

            //Mark section two as loaded
            g.sectionTwoLoaded = true;
        }
    }

    function initSectionThree(section) {
        if(!g.sectionThreeLoaded) {
            animatePillars(section);

            g.sectionThreeLoaded = true;
        }
    }

    function initSectionFour(section) {
        console.log('Firing...');
        if(!g.sectionFourLoaded) {
            animateCounters(section.find('.slide').first());
            loadTabs(section);

            g.sectionFourLoaded = true;
        }
    }

    function initSectionFourTwo(section) {
        if(!g.sectionFourTwoLoaded) {
            animateCounters(section);

            g.sectionFourTwoLoaded = true;
        }
    }

    function initSectionFive(section) {
        if(!g.sectionFiveLoaded) {
            animateCounters(section);
            animateLines(section);

            g.sectionFiveLoaded = true;
        }
    }

    function initSectionSix(section) {
        if(!g.sectionSixLoaded) {

            g.sectionSixLoaded = true;
        }
    }

    function initSectionSeven(section) {
        if(!g.sectionSevenLoaded) {
            animateCounters(section);

            g.sectionSevenLoaded = true;
        }
    }

    function initSectionEight(section) {
        if(!g.sectionEightLoaded) {
            animateCounters(section);

            g.sectionEightLoaded = true;
        }
    }

    function initSectionNine(section) {
        if(!g.sectionNineLoaded) {

            g.sectionNineLoaded = true;
        }
    }

    function animateCounters(section) {
        section.find('[data-counter]').each(function() {
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
    }

    function animateLines(section) {
        section.find('[data-line]').each(function() {
            $this = $(this),
            $height = $this.data('height'),
            $width  = $this.data('width');

            $this.animate({
                height: $height
            }, 500, function() {
                $(this).animate({
                    width: $width
                }, 500);
            });
        });
    }

    function animateSpeedo(section) {
        section.find('[data-arrow]').each(function() {
            var $this = $(this),
            $start = $this.data('start'),
            $end  = $this.data('end'),
            $year = $($this.data('year'));

            var interval = setInterval(function() {
                if($start <= $end) {
                    $this.css('transform', 'rotateZ('+($start++)+'deg)')
                }
                else {
                    $year.fadeIn();
                    clearInterval(interval);
                }
            }, 10);
        });
    }

    function animatePillars(section) {
        section.find('[data-pillar]').each(function() {
            var $this = $(this),
                $start = $this.data('start'),
                $end  = $this.data('end'),
                $number = $this.find('[data-pillar-percentage]');

            //Animate pillars growing
            var interval = setInterval(function() {
                if($start <= $end) {
                    $number.html($start++);
                    $this.height($start*3);
                }
                else {
                    clearInterval(interval);
                }
            }, 10);
        });
    }

    function loadTabs(section) {
        section.find('[data-enterprise]').each(function() {
            var $btn = $(this);

                //Activate first tab
                if($btn.data('enterprise') === 's') {
                    $btn.addClass('active');
                }

                $btn.click(function() {
                    $size = $btn.data('enterprise');

                    //Remove active state from all tabs
                    section.find('[data-enterprise]').removeClass('active');

                    //Activate clicked tab
                    $btn.addClass('active');

                    section.find('[data-switch]').each(function() {
                        var $svvitch = $(this);

                        $percentage =  $svvitch.data($size);

                        $svvitch.html($percentage);
                    });
                });
        });
    }

})(jQuery);
