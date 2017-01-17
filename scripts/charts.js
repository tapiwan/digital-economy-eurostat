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
        ['Germany', 65],
        ['France', 14],
        //TODO: Add percentages of total turnover for all other countries
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
            ediSales: 10,
            webSales: 20
        },
        "France": {
            ediSales: 44,
            webSales: 14
        },
        //TODO: Add percentages of edi and web sales for all other countries
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
          ['Country', 'B2B', 'B2C/B2G'],
          ['Germany', 1000, 400],
          ['France', 1170, 460],
          ['Brazil', 660, 1120],
          ['Netherlands', 1030, 540]
        ]);

        var bar_options = {
          backgroundColor: 'transparent',
          chartArea: {
              left: 60
          },
          vAxis: {
              baselineColor: '#333333',
              gridlines: {
                  color: '#B3DC86'
              }
          },
          legend: {
              position: 'bottom'
          },
          colors: ['#80A953', '#405429']
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('column-esales'));

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
    map_data.addColumn('number', '% of total turnover');

    map_data.addRows([
        ['Germany', 65],
        ['France', 14],
        //TODO: Add percentages of total turnover for all other countries
    ]);

    /**
     * Create map options
     */
    var map_options = {
        backgroundColor: '#E6E9ED',
        colorAxis: {
            colors: ['#B3DC86', '#A0D468', '#80A953', '#607F3E', '#405429']
        },
        datalessRegionColor: '#E6E9ED',
        defaultColor: '#A1ACBD',
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
     * Initialize PieChart
     */
     drawRecruitmentBar(map_data.getValue(0, 0));
}

/**
 * Draw PieChart for Turnover E-Sales
 */
function drawRecruitmentBar(country, turnover) {
    var titleEl = $('#bar-title').html(country);
}
