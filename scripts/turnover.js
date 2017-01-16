google.charts.load('upcoming', {
    'packages': ['geochart', 'corechart']
});

google.charts.setOnLoadCallback(drawTurnoverMap);

/**
 * Draw GeoChart for Turnover E-Sales
 */
function drawTurnoverMap() {
    /**
     * Create map data
     */
    var map_data = new google.visualization.DataTable();

    map_data.addColumn('string', 'Country');
    map_data.addColumn('number', 'EDI-type sales');
    map_data.addColumn('number', 'web sales');

    map_data.addRows([
        ['Germany', 20, 60],
        ['Brazil', 25, 55],
        ['France', 10, 70]
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
        region: '150'
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
            var ediSales = map_data.getValue(selectedItem.row, 1);
            var webSales = map_data.getValue(selectedItem.row, 2);

            var selectedData = {
                country: country,
                ediSales: ediSales,
                webSales: webSales
            };

            drawTurnoverPie(selectedData);
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
     drawTurnoverPie({
         country: map_data.getValue(0, 0),
         ediSales: map_data.getValue(0, 1),
         webSales: map_data.getValue(0, 2)
     });
}

/**
 * Draw PieChart for Turnover E-Sales
 */
function drawTurnoverPie(dataset) {
    var titleEl = $('#pie-title').html(dataset.country);

    var data = google.visualization.arrayToDataTable([
        ["Type of sales", "Percentage"],
        ["EDI-type sales", dataset.ediSales],
        ["Web sales", dataset.webSales],
        ["Non e-sales", 100-dataset.ediSales-dataset.webSales]
    ]);

    var options = {
        backgroundColor: '#CCD1D9',
        pieHole: 0.4,
        colors: ['#B3DC86', '#80A953', '#405429'],
        height: 300,
        legend: {
            alignment: "center",
            position: "left"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie-turnover'));

    chart.draw(data, options);
}
