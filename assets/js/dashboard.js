// Bar chart
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = 'white';

var xValues = ["Dubai", "Maldives", "Spain", "Liverpool", "Kerala"];
var yValues = [1045, 1374, 997, 1297, 1191];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Top Performing Tour Packages",
      fontSize: 15,
      fontColor: 'white'
    },
    scales: {
        yAxes: [{ticks: {fontSize: 18, fontFamily: "'Roboto', sans-serif", fontColor: 'white', fontStyle: '500'}}],
        xAxes: [{ticks: {fontSize: 18, fontFamily: "'Roboto', sans-serif", fontColor: 'white', fontStyle: '500'}}]
    }
  }
});

//DONUT CHART
var countryName = ["UK", "India", "France", "Germany", "Canada"];
var countryValue = [1045, 1374, 997, 1297, 1191];
var donutColor = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("donutChart", {
  type: "doughnut",
  data: {
    labels: countryName,
    datasets: [{
      backgroundColor: donutColor,
      data: countryValue,
    }]
  },
  options: {
    maintainAspectRatio : false,
    title: {
      display: true,
      text: "Top Bookings Based On Countries",
      fontSize: 15,
      fontColor: 'white'
    },
  }
});