google.charts.load('current', {
    'packages': ['geochart', 'corechart']
});

google.charts.setOnLoadCallback(initCharts);

function initCharts() {
    drawTurnoverMap();
    drawColumnChart();
    drawRecruitmentMap();
}

/**
 * Draw GeoChart for Turnover E-Sales
 */
function drawTurnoverMap() {
    /**
     * Create map data
     */
    var map_data = new google.visualization.DataTable();

    map_data.addColumn('string', 'Country');
    map_data.addColumn('number', '% of total turnover');

    map_data.addRows([
        ['Germany', 17],
        ['France', 18],
        ['Ireland', 37],
        ['Czech Republic', 29],
        ['Slovakia', 21],
        ['Finland', 21],
        ['Hungary', 20],
        ['Sweden', 20],
        ['United Kingdom', 20],
        ['Denmark', 19],
        ['Portugal', 17],
        ['Austria', 15],
        ['Belgium', 14],
        ['Estonia', 14],
        ['Spain', 14],
        ['Croatia', 14],
        ['Netherlands', 14],
        ['Poland', 13],
        ['Slovenia', 13],
        ['Lithuania', 10],
        ['Italy', 9],
        ['Malta', 9],
        ['Latvia', 7],
        ['Cyprus', 6],
        ['Romania', 6],
        ['Bulgaria', 5],
        ['Greece', 1],
        ['Luxembourg', 1],
        ['Norway', 19],
        ['Iceland', 14],
        ['Serbia', 6],
        ['FYR of Macedonia', 2],
        //********************************************************
        //TODO: Add percentages of total turnover for all other countries
        //NOTE: A country name is a string (for example, "England") (doch nicht ISO :P)
        //********************************************************
    ]);

    /**
     * Create map options
     */
    var map_options = {
        backgroundColor: '#CCD1D9',
        colorAxis: {
            colors: ['#B3DC86', '#A0D468', '#80A953', '#607F3E', '#405429']
        },
        datalessRegionColor: '#CCD1D9',
        defaultColor: '#A1ACBD',
        region: '150',
    };

    /**
     * Create GeoChart
     */
    var map_turnover = new google.visualization.GeoChart(document.getElementById('map-turnover'));


    /**
     * Add event handler to GeoChart
     */
    function selectHandler() {
        var selectedItem = map_turnover.getSelection()[0];
        if (selectedItem) {
            var country = map_data.getValue(selectedItem.row, 0);
            var turnover = map_data.getValue(selectedItem.row, 1);

            drawTurnoverPie(country, turnover);
        }
    }

    /**
     * Add event listener to GeoChart
     */
    google.visualization.events.addListener(map_turnover, 'select', selectHandler);

    /**
     * Draw GeoChart
     */
    map_turnover.draw(map_data, map_options);

    /**
     * Initialize PieChart
     */
     drawTurnoverPie(map_data.getValue(0, 0), map_data.getValue(0, 1));
}

/**
 * Draw PieChart for Turnover E-Sales
 */
function drawTurnoverPie(country, turnover) {
    var titleEl = $('#pie-title').html(country);
    var turnoverEl = $('#pie-hole').find('#turnover').html(turnover+"%");

    //E-Sales by type
    var json = {
        "Germany": {
            ediSales: 11,
            webSales: 6
        },
        "France": {
            ediSales: 13,
            webSales: 5
        },
        "Ireland": {
            ediSales: 22,
            webSales: 15
        },
        "Czech Republic": {
            ediSales: 24,
            webSales: 5
        },
        "Slovakia": {
            ediSales: 16,
            webSales: 5
        },
        "Finland": {
            ediSales: 16,
            webSales: 5
        },
        "Hungary": {
            ediSales: 15,
            webSales: 5
        },
        "Sweden": {
            ediSales: 12,
            webSales: 8
        },
        "United Kingdom": {
            ediSales: 13,
            webSales: 7
        },
        "Denmark": {
            ediSales: 14,
            webSales: 5
        },
        "Portugal": {
            ediSales: 10,
            webSales: 7
        },
        "Austria": {
            ediSales: 13,
            webSales: 2
        },
        "Belgium": {
            ediSales: 9,
            webSales: 5
        },
        "Estonia": {
            ediSales: 9,
            webSales: 5
        },
        "Spain": {
            ediSales: 10,
            webSales: 4
        },
        "Croatia": {
            ediSales: 9,
            webSales: 5
        },
        "Netherlands": {
            ediSales: 8,
            webSales: 6
        },
        "Poland": {
            ediSales: 9,
            webSales: 4
        },
        "Slovenia": {
            ediSales: 11,
            webSales: 2
        },
        "Lithuania": {
            ediSales: 5,
            webSales: 5
        },
        "Italy": {
            ediSales: 7,
            webSales: 2
        },
        "Malta": {
            ediSales: 6,
            webSales: 3
        },
        "Latvia": {
            ediSales: 3,
            webSales: 4
        },
        "Cyprus": {
            ediSales: 2,
            webSales: 4
        },
        "Romania": {
            ediSales: 4,
            webSales: 2
        },
        "Bulgaria": {
            ediSales: 3,
            webSales: 2
        },
        "Greece": {
            ediSales: 0,
            webSales: 1
        },
        "Luxembourg": {
            ediSales: 1,
            webSales: 0
        },
        "Norway": {
            ediSales: 11,
            webSales: 8
        },
        "Iceland": {
            ediSales: 9,
            webSales: 5
        },
        "Serbia": {
            ediSales: 0,
            webSales: 6
        },
        "FYR of Macedonia": {
            ediSales: 1,
            webSales: 1
        }
    }

    //Get data by country
    var pie_data = google.visualization.arrayToDataTable([
        ["Type of sales", "Percentage"],
        ["EDI-type sales", json[country].ediSales],
        ["Web sales", json[country].webSales],
        ["Non e-sales", 100-json[country].ediSales-json[country].webSales]
    ]);


    var pie_options = {
        backgroundColor: '#CCD1D9',
        pieHole: 0.6,
        colors: ['#B3DC86', '#80A953', '#405429'],
        legend: {
            alignment: "center",
            position: "left"
        }
    };

    var pie_chart = new google.visualization.PieChart(document.getElementById('pie-turnover'));

    pie_chart.draw(pie_data, pie_options);
}

function drawColumnChart() {
    var data = google.visualization.arrayToDataTable([
          ['Country', 'Business to customer', 'Business to business/government'],
          ['Germany', 0.16, 0.18],
          ['France', 0.12, 0.10],
          ['Portugal', 0.10, 0.08],
          ['Netherlands', 0.13, 0.16],
          ['Sweden', 0.14, 0.17],
          ['Belgium', 0.18, 0.16],
          ['Czech Republik', 0.17, 0.16],
          ['Denmark', 0.17, 0.15],
          ['Ireland', 0.23, 0.14],
          ['Croatia', 0.12, 0.14],
          ['Lithuania', 0.15, 0.12],
          ['Finland', 0.11, 0.12],
          ['Malta', 0.16, 0.11],
          ['United Kingdom', 0.15, 0.11],
          ['Slovenia', 0.13, 0.10],
          ['Estonia', 0.10, 0.10],
          ['Spain', 0.09, 0.10],
          ['Slovakia', 0.09, 0.09],
          ['Austria', 0.11, 0.08],
          ['Hungary', 0.09, 0.08],
          ['Poland', 0.07, 0.07],
          ['Latvia', 0.06, 0.06],
          ['Luxembourg', 0.05, 0.06],
          ['Bulgaria', 0.06, 0.05],
          ['Italy', 0.06, 0.05],
          ['Cyprus', 0.09, 0.04],
          ['Greece', 0.06, 0.04],
          ['Romania', 0.06, 0.04],
          ['Norway', 0.16, 0.17],
          ['Serbia', 0.15, 0.15],
          ['Iceland', 0.12, 0.11],
          ['Turkey', 0.09, 0.07],
          ['FYR of Macedonia', 0.02, 0.01]
        ]);

        var bar_options = {
          backgroundColor: 'transparent',
          chartArea: {
              left: 60
          },
          vAxis: {
              format: '#%',
              baselineColor: '#333333',
              gridlines: {
                  color: '#CAE1B1'
              }
          },
          hAxis: {
              textStyle: {
                fontSize: 10
              },
              slantedText: true,
              slantedTextAngle: 90
          },
          legend: {
              position: 'none'
          },
          height: 420,
          colors: ['#80A953', '#405429']
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('column-esales'));
        var view = new google.visualization.DataView(data);

        view.setColumns([0,1,2]);

        $('[data-legend]').each(function() {
            var $this = $(this);

                $this.click(function() {
                    //Load states
                    var $b2c = $('[data-legend="b2c"]'),
                        $b2bg = $('[data-legend="b2bg"]');

                        function atLeastOneActive() {
                            var activeAmt = 0;

                            if($b2c.hasClass('active')) {
                                activeAmt++;
                            }
                            if($b2bg.hasClass('active')) {
                                activeAmt++;
                            }

                            return activeAmt;
                        }

                    //Switch active states
                    if($this.data('legend') == 'b2c') {
                        if($this.hasClass('active') && (atLeastOneActive()-1) > 0) {
                            $this.removeClass('active');
                        }
                        else {
                            $this.addClass('active');
                        }
                    }
                    else if($this.data('legend') == 'b2bg') {
                        if($this.hasClass('active') && (atLeastOneActive()-1) > 0) {
                            $this.removeClass('active');
                        }
                        else {
                            $this.addClass('active');
                        }
                    }

                    if($b2c.hasClass('active') && $b2bg.hasClass('active')) {
                        view.setColumns([0,1,2]);
                        bar_options.colors = ['#80A953', '#405429'];
                    }
                    else if($b2c.hasClass('active') && !$b2bg.hasClass('active')) {
                        view.setColumns([0,1]);
                        bar_options.colors = ['#80A953'];
                    }
                    else if(!$b2c.hasClass('active') && !$b2bg.hasClass('active')) {
                        view.setColumns([0]);
                        bar_options.colors = ['#80A953', '#405429'];
                    }
                    else if(!$b2c.hasClass('active') && $b2bg.hasClass('active')) {
                        view.setColumns([0,2]);
                        bar_options.colors = ['#405429'];
                    }

                    chart.draw(view, bar_options);
                });


        });

        chart.draw(data, bar_options);
}

/**
 * Draw GeoChart for Turnover E-Sales
 */
function drawRecruitmentMap() {
    /**
     * Create map data
     */
    var map_data = new google.visualization.DataTable();

    map_data.addColumn('string', 'Country');

    map_data.addRows([
      ['Germany'],
      ['France'],
      ['Ireland'],
      ['Czech Republic'],
      ['Slovakia'],
      ['Finland'],
      ['Hungary'],
      ['Sweden'],
      ['United Kingdom'],
      ['Denmark'],
      ['Portugal'],
      ['Austria'],
      ['Belgium'],
      ['Estonia'],
      ['Spain'],
      ['Croatia'],
      ['Netherlands'],
      ['Poland'],
      ['Slovenia'],
      ['Lithuania'],
      ['Italy'],
      ['Malta'],
      ['Latvia'],
      ['Cyprus'],
      ['Romania'],
      ['Bulgaria'],
      ['Greece'],
      ['Luxembourg'],
      ['Norway'],
      ['Iceland'],
      ['Serbia'],
      ['FYR of Macedonia']
    ]);

    /**
     * Create map options
     */
    var map_options = {
        backgroundColor: '#E6E9ED',
        datalessRegionColor: '#E6E9ED',
        defaultColor: '#9FAABC',
        region: '150',
    };

    /**
     * Create GeoChart
     */
    var map_recruitment = new google.visualization.GeoChart(document.getElementById('map-recruitment'));


    /**
     * Add event handler to GeoChart
     */
    function selectHandler() {
        var selectedItem = map_recruitment.getSelection()[0];
        if (selectedItem) {
            var country = map_data.getValue(selectedItem.row, 0);

            drawRecruitmentBar(country);
        }
    }

    /**
     * Add event listener to GeoChart
     */
    google.visualization.events.addListener(map_recruitment, 'select', selectHandler);

    /**
     * Draw GeoChart
     */
    map_recruitment.draw(map_data, map_options);

    /**
     * Initialize BarChart
     */
     drawRecruitmentBar(map_data.getValue(0, 0));
}

/**
 * Draw BarChart for Recruitment Difficulties
 */
function drawRecruitmentBar(country) {
    var titleEl = $('#bar-title').html(country);

    //Difficulties by country
    var json = {
        "Germany": {
            difficulties: 4.1,
            noDifficulties: 3.9
        },
        "France": {
            difficulties: 3,
            noDifficulties: 4.2
        },
        "Ireland": {
          difficulties: 4.5,
          noDifficulties: 4.5
        },
        "Czech Republic": {
          difficulties: 3,
          noDifficulties: 2.1
        },
        "Slovakia": {
          difficulties: 2.6,
          noDifficulties: 3.1
        },
        "Finland": {
          difficulties: 3.3,
          noDifficulties: 6.2
        },
        "Hungary": {
          difficulties: 4.6,
          noDifficulties: 5
        },
        "Sweden": {
          difficulties: 4.3,
          noDifficulties: 4.7
        },
        "United Kingdom": {
          difficulties: 4.2,
          noDifficulties: 6.8
        },
        "Denmark": {
          difficulties: 4.6,
          noDifficulties: 6.7
        },
        "Portugal": {
          difficulties: 1.3,
          noDifficulties: 4.9
        },
        "Austria": {
          difficulties: 4.5,
          noDifficulties: 3.5
        },
        "Belgium": {
          difficulties: 5.3,
          noDifficulties: 6.5
        },
        "Estonia": {
          difficulties: 2.9,
          noDifficulties: 2.9
        },
        "Spain": {
          difficulties: 1.6,
          noDifficulties: 10.3
        },
        "Croatia": {
          difficulties: 2.3,
          noDifficulties: 4.5
        },
        "Netherlands": {
          difficulties: 4.5,
          noDifficulties: 3.9
        },
        "Poland": {
          difficulties: 2,
          noDifficulties: 3.3
        },
        "Slovenia": {
          difficulties: 3,
          noDifficulties: 3
        },
        "Lithuania": {
          difficulties: 3.5,
          noDifficulties: 4
        },
        "Italy": {
          difficulties: 1.2,
          noDifficulties: 3.3
        },
        "Malta": {
          difficulties: 7.2,
          noDifficulties: 6.8
        },
        "Latvia": {
          difficulties: 2.1,
          noDifficulties: 2.6
        },
        "Cyprus": {
          difficulties: 3.2,
          noDifficulties: 4.1
        },
        "Romania": {
          difficulties: 1,
          noDifficulties: 2.5
        },
        "Bulgaria": {
          difficulties: 3.1,
          noDifficulties: 6.6
        },
        "Greece": {
          difficulties: 1.5,
          noDifficulties: 3.2
        },
        "Luxembourg": {
          difficulties: 6.5,
          noDifficulties: 4.5
        },
        "Norway": {
          difficulties: 2.6,
          noDifficulties: 5.6
        },
        "Iceland": {
          difficulties: 2,
          noDifficulties: 4.5
        },
        "Serbia": {
          difficulties: 1.5,
          noDifficulties: 4.6
        },
        "FYR of Macedonia": {
          difficulties: 1.5,
          noDifficulties: 3.5
        }
    }

    //Get data by country
    var bar_data = google.visualization.arrayToDataTable([
        ["Type", "Percentage", { role: 'style' }],
        ["Difficulties recruiting", json[country].difficulties, '#4FC1E9'],
        ["No difficulties recruiting", json[country].noDifficulties, '#A0D468']
    ]);

    var bar_options = {
      backgroundColor: 'transparent',
      chartArea: {
          left: 40
      },
      vAxis: {
          baselineColor: '#333333',
          gridlines: {
              color: '#CCD1D9'
          }
      },
      legend: {
          position: 'none'
      }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('bar-recruitment'));

    chart.draw(bar_data, bar_options);
}
