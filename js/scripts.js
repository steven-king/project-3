var deaths = []
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
    deaths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    dataByMonth = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    buildChart();
    buildChart2();

}


function writeTable(){
    console.log("writeTable()");
  $('datatable').dataTable( {
        "ajax": 'convertcsv.json'
    } );
}



//*pie*//
function buildChart(){
  console.log("buildChart");
  Highcharts.chart('container', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Top causes of death in the U.S.'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              }
          }
      },
      series: [{
          name: '',
          colorByPoint: true,
          data: [{
              name: 'Heart Disease',
              y: 56.33
          }, {
              name: 'Cancer',
              y: 24.03,
              sliced: true,
              selected: true
          }, {
              name: 'Stroke',
              y: 10.38
          }, {
              name: 'Diabetes',
              y: 4.77
          }, {
              name: 'Suicide',
              y: 0.91
          }, {
              name: 'Other',
              y: 0.2
          }]
      }]
  });
  };

/*slides*/
$(function(){
      $("#slides").slidesjs({
        width: 800,
        height: 528

      });
    });

    $(function(){
  $("#slides").slidesjs({
    navigation: {

      active: true,

      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
  });
});

function buildChart2(){
console.log("buildChart2");
Highcharts.chart('container2', {

    title: {
        text: 'Top cause of death over the years: Heart Disease'
    },

    xAxis: {
        categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',],
        title: {
            text: null
        }
    },

    yAxis: {
        title: {
            text: 'Number of Cases'
        }
    },

    series: [{
        name: 'Cases',
        data: [447950 , 559650 , 525463, 445678, 555987, 432123, 424654, 598094,],
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
        }]
    }

});

};

$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
