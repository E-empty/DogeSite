import APIService from './getapi.js'
import Chart from 'chart.js'
import { xml } from 'd3-fetch';
import { curveMonotoneX } from 'd3-shape';




let api = new APIService();

let chartDoge = null


function displayChart(timerange) {
  api.getMarketChartInfo('dogecoin', timerange).then(d => {
      let labels = [], data = [];

      d.forEach(arr => {
          const date = new Date(parseInt(arr[0]));
          labels.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
          data.push(parseFloat(parseFloat(arr[1]).toFixed(3)));
      });

      chartDoge = new Chart(document.getElementById("doge_chart"), {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{ 
              data: data,
              label: `Dogecoin Chart, Range: ${timerange} Days`,
              borderColor: "#ff8c00",
              backgroundColor: "#ffffff",

              fill: false
            }
          ]
        },
        options: {
           tooltips: {
             enabled: true,
             mode: 'x',
             intersect: false,
             yAlign: 'center',
             mode: 'index',
             axis: 'x',
             callbacks: {
               label: function(tooltipItems, data) {
                 return tooltipItems.yLabel + 'USD';
               }
             }
           },
           hover: {
             mode: 'x',
            intersect: false
           },
          title: {
            display: true,
            text: 'Doge coin price'
          }
        }
      });
  });
}


displayChart(1)

const priceButton = document.getElementById('Price');
const marketCapButton = document.getElementById('MarketCap');
const lastDayRangeButton = document.getElementById('TimeRangeLastDay');
const lastWeekRangeButton = document.getElementById('TimeRangeLastWeek');
const lastMonthRangeButton = document.getElementById('TimeRangeLastMonth');
const lastThreeMonthsRangeButton = document.getElementById('TimeRangeLastThreeMonths');
const lastYearRangeButton = document.getElementById('TimeRangeLastYear');
const maxRangeButton = document.getElementById('TimeRangeMax')


priceButton.addEventListener('click', () => {
  console.log(api.getMarketChartInfo)
})

marketCapButton.addEventListener('click', () => {

})

lastDayRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart(1);
})

lastWeekRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart(7);
})

lastMonthRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart(30);
})

lastThreeMonthsRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart(90);
})

lastYearRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart(365);
})

maxRangeButton.addEventListener('click', () => {
  chartDoge.destroy();
  displayChart('max');
})
