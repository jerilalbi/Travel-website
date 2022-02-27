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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var submit_btn = document.getElementById("submit_btn");
var span = document.getElementsByClassName("close")[0];

var image1 = document.getElementById("cover_image");
var image2 = document.getElementById("side_image");
var logo_img = document.getElementById("logo_image");

var place_name = document.getElementById('place_name');
var place_desc = document.getElementById("place_desc");
var tour_duration = document.getElementById("tour_duration");
var place_visited = document.getElementById("places_visit");
var tour_price = document.getElementById("tour_price");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

submit_btn.onclick = function(){
  var baseData = JSON.parse(localStorage.getItem('all_tours_data'));
  var basePackageData = JSON.parse(localStorage.getItem('tour_package_data'));
  const cover_img = image1.files[0];
  const side_img = image2.files[0];
  const logo_image = logo_img.files[0];

  baseData.push({
    name: place_name.value,
    desc: place_desc.value,
    img: `assets/img/new/${cover_img.name}`
  });

  basePackageData.push({
    name: place_name.value,
    coverImg: `assets/img/new/${cover_img.name}`,
    sideImg: `assets/img/new/${side_img.name}`,
    package: [
      {
        duration: tour_duration.value,
        part_logo: `assets/img/new/${logo_image.name}`,
        places: place_visited.value,
        price: `$ ${tour_price.value}`,
      },
    ]
  });
  
  console.log(basePackageData[16]['package'])
  modal.style.display = "none";
  localStorage.setItem('all_tours_data',JSON.stringify(baseData));
  localStorage.setItem('tour_package_data',JSON.stringify(basePackageData));
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}