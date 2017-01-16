google.charts.setOnLoadCallback(drawColumnChart);

function drawColumnChart() {
    var data = google.visualization.arrayToDataTable([
          ['Country', 'B2B', 'B2C/B2G'],
          ['Germany', 1000, 400],
          ['France', 1170, 460],
          ['Brazil', 660, 1120],
          ['Netherlands', 1030, 540]
        ]);

        var options = {
          backgroundColor: '#B3D490',
          chartArea: {
              backgroundColor: '#B3D490'
          }
        };

        var chart = new google.charts.Bar(document.getElementById('column-esales'));

        chart.draw(data, options);
}
