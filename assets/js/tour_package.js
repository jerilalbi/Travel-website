function changeData(){

    let show_data = '';
    var tour_package_data = JSON.parse(localStorage.getItem('tour_package_data'));

    tour_package_data[Number(localStorage.getItem('package_index'))]['package'].map((value) => {
        show_data += `
        <div class="card" style="width: 28rem;">
                        <div class="card-body">
                          <h5 class="card-title">${value['duration']} <img src="${value['part_logo']}" style="width: 4rem; height: 2rem; float: right;" alt="" srcset=""></h5>
                          <p class="card-text">${value['places']}</p>
                          <span style="font-size: 25px; font-weight: bold; color: green;">${value['price']}</span><a href="login_customer.html" class="btn btn-primary" style="float: right;">Book Now</a>                
                        </div>
        </div>
        `
    });

    document.getElementById('pack_data').innerHTML = show_data;
    document.getElementById('cover-img').style.backgroundImage=`url(${tour_package_data[Number(localStorage.getItem('package_index'))]['coverImg']})`;
    document.getElementById('place-text').innerHTML = tour_package_data[Number(localStorage.getItem('package_index'))]['name'];
    document.getElementById('side-img').src = tour_package_data[Number(localStorage.getItem('package_index'))]['sideImg'];

    localStorage.setItem('place_name',tour_package_data[Number(localStorage.getItem('package_index'))]['name']);
}

changeData();