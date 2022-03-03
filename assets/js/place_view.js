//search or explore
if(localStorage.getItem('search-check') != 'true'){
    document.getElementById('search_input').style.display = 'none'
    document.getElementById('search_btn').style.display = 'none'
}

//map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: Number(localStorage.getItem('place_lat')), lng: Number(localStorage.getItem('place_long'))},
      zoom: 13
    });
    var input = document.getElementById('search_input');
  
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
  
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });
  
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        localStorage.setItem('place_lat',place.geometry.location.lat());
        localStorage.setItem('place_long',place.geometry.location.lng());

        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });
  }

  var place_lat = Number(localStorage.getItem('place_lat'));
  var place_lng = Number(localStorage.getItem('place_long'));
  

  //API Fetch
  function place_attraction(lat,lng){
    fetch(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=${lng}&latitude=${lat}&lunit=km&currency=USD&lang=en_US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "d8bb2d3d02msh15482b0d942a663p1751e6jsnf05b2c79ff7a"
        }
    })
    .then(response => {
        return response.json();
    }).then((data) => {
        var place_address = `${data.data[0].address_obj.city}, ${data.data[0].address_obj.country}`
        var side_data = '';
        data['data'].map((value,index) => {
            if(data.data[index].ad_position == undefined){
                    side_data += `
            <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${data.data[index].name}</h5>
                          <p class="card-text">${data.data[index].description}</p>
                          <a href="${data.data[index].web_url}" class="btn btn-primary">View More</a>
                        </div>
            </div>
            `
            }
        });
        document.getElementById('show_data').innerHTML = side_data;
        document.getElementById('show_place_address').innerHTML = place_address;
    })
    .catch(err => {
        console.error(err);
    });
  }

  place_attraction(place_lat,place_lng);

  function food_attraction(lat,lng){
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?longitude=${lng}&latitude=${lat}&lunit=km&currency=USD&lang=en_US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": "d8bb2d3d02msh15482b0d942a663p1751e6jsnf05b2c79ff7a"
        }
    })
    .then(response => {
        return response.json();
    }).then((data) => {
        var side_data = '';
        data['data'].map((value,index) => {
            if(data.data[index].ad_position == undefined){
                    side_data += `
            <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${data.data[index].name}</h5>
                          <p class="card-text">${data.data[index].description}</p>
                          <p class="card-text" style="color: green; font-weight: bold;">Price: ${data.data[index].price}</p>
                          <a href="${data.data[index].web_url}" class="btn btn-primary">View More</a>
                        </div>
            </div>
            `
            }
        });
        document.getElementById('show_data').innerHTML = side_data;
    })
    .catch(err => {
        console.error(err);
    });
  }

  function weatherFetch(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5e8ad7b6f198bc4eb1edd093db935a60`)
    .then(response => {
        return response.json();
    }).then((data) => {
        var weather_data_full = data.main.temp - 273.15;
        var weather_data = Math.round(weather_data_full * 10) / 10;
        var weather_img = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById('weather_img').src = weather_img;
        document.getElementById('weather_data').innerHTML = `${weather_data} &#176; C`;
    })
    .catch(err => {
        console.error(err);
    });
  }

  weatherFetch(place_lat,place_lng);

  document.getElementById('type_select').onchange = function(){
      var value = document.getElementById('type_select').value;
        
      switch(value){
          case 'attraction' : place_attraction(place_lat,place_lng);
                              break;
          case 'restaurants' : food_attraction(place_lat,place_lng);
                              break;
      }
  }

  var submit_btn = document.getElementById('search_btn');
  submit_btn.onclick = function(){

    var new_place_lat = Number(localStorage.getItem('place_lat'));
    var new_place_lng = Number(localStorage.getItem('place_long'));

    weatherFetch(new_place_lat,new_place_lng);

    document.getElementById('type_select').selectedIndex = 0;
    document.getElementById('type_select').value = 'attraction';

        var value = document.getElementById('type_select').value;
  
        switch(value){
            case 'attraction' : place_attraction(new_place_lat,new_place_lng);
                                break;
            case 'restaurants' : food_attraction(new_place_lat,new_place_lng);
                                break;
        }
  }