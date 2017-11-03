var months = []
var dataByMonth = []


$(document).ready(function(){
  console.log("Document Ready function");
    //$('#example').DataTable();
  loadData();
  writeTable();

});

function loadData(){
  console.log("loadData()");
  //do ajax call
    //success: buildChart

    //loop that fills the arrys listed above like this
    // months.push(asdf);
    // at the end of all loops it will look like this:
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    dataByMonth = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    buildChart();
}

function buildChart(){
  console.log("buildChart");
  var chart = Highcharts.chart('container', {

      title: {
          text: 'Chart.update'
      },

      subtitle: {
          text: 'Plain'
      },

      xAxis: {
          categories: months
      },

      series: [{
          type: 'column',
          colorByPoint: true,
          data: dataByMonth,
          showInLegend: false
      }]

  });


  $('#plain').click(function () {
      chart.update({
          chart: {
              inverted: false,
              polar: false
          },
          subtitle: {
              text: 'Plain'
          }
      });
  });

  $('#inverted').click(function () {
      chart.update({
          chart: {
              inverted: true,
              polar: false
          },
          subtitle: {
              text: 'Inverted'
          }
      });
  });

  $('#polar').click(function () {
      chart.update({
          chart: {
              inverted: false,
              polar: true
          },
          subtitle: {
              text: 'Polar'
          }
      });
  });
}


function writeTable(){
    console.log("writeTable()");
  $('#data-table').DataTable( {
        "ajax": 'convertcsv.json'
    } );
}

//*maps*//
