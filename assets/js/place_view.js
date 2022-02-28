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
        var side_data = '';
        console.log(data.data);
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
    })
    .catch(err => {
        console.error(err);
    });
  }
  
  place_attraction(Number(localStorage.getItem('place_lat')),Number(localStorage.getItem('place_long')));

  var submit_btn = document.getElementById('search_btn');
  submit_btn.onclick = function(){  
      console.log(Number(localStorage.getItem('place_lat')))
      place_attraction(Number(localStorage.getItem('place_lat')),Number(localStorage.getItem('place_long')));
  }
