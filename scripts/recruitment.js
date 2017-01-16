google.charts.setOnLoadCallback(drawRecruitmentMap);

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
