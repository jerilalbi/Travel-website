function changeData(){
    var data = [
        {
            name: 'London',
            coverImg: 'assets/img/all_tours/london.jpg',
            sideImg: 'assets/img/all_tours/london_side.jpg',
        },
        {
            name: 'Maldives',
            coverImg: 'assets/img/all_tours/maldives.jpg',
            sideImg: 'assets/img/all_tours/maldives_side.jpg',
        },
        {
            name: 'Dubai',
            coverImg: 'assets/img/all_tours/dubai.jpg',
            sideImg: 'assets/img/all_tours/dubai_side.jpg',
        },
        {
            name: 'Berlin',
            coverImg: 'assets/img/all_tours/berlin.jpg',
            sideImg: 'assets/img/all_tours/berlin_side.jpg',
        },
        {
            name: 'Paris',
            coverImg: 'assets/img/all_tours/paris.jpg',
            sideImg: 'assets/img/all_tours/paris_side.jpg',
        },
        {
            name: 'Liverpool',
            coverImg: 'assets/img/all_tours/liverpool.jpg',
            sideImg: 'assets/img/all_tours/liverpool_side.jpg',
        },
        {
            name: 'India',
            coverImg: 'assets/img/all_tours/india.jpg',
            sideImg: 'assets/img/all_tours/india_side.jpg',
        },
        {
            name: 'Denver',
            coverImg: 'assets/img/all_tours/denver.jpg',
            sideImg: 'assets/img/all_tours/denver_side.jpg',
        },
        {
            name: 'Norway',
            coverImg: 'assets/img/all_tours/norway.jpg',
            sideImg: 'assets/img/all_tours/norway_side.jpg',
        },
        {
            name: 'Tokyo',
            coverImg: 'assets/img/all_tours/tokyo.jpg',
            sideImg: 'assets/img/all_tours/tokyo_side.jpg',
        },
        {
            name: 'New York',
            coverImg: 'assets/img/all_tours/newyork.jpg',
            sideImg: 'assets/img/all_tours/newyork_side.jpg',
        },
        {
            name: 'Stockholm',
            coverImg: 'assets/img/all_tours/stockholm.jpg',
            sideImg: 'assets/img/all_tours/stockholm_side.jpg',
        },
        {
            name: 'Venice',
            coverImg: 'assets/img/all_tours/venice.jpg',
            sideImg: 'assets/img/all_tours/venice_side.jpg',
        },
        {
            name: 'Rio',
            coverImg: 'assets/img/all_tours/rio.jpg',
            sideImg: 'assets/img/all_tours/rio_side.jpg',
        },
        {
            name: 'Amsterdam',
            coverImg: 'assets/img/all_tours/amsterdam.jpg',
            sideImg: 'assets/img/all_tours/amsterdam_side.jpg',
        },
        {
            name: 'Nairobi',
            coverImg: 'assets/img/all_tours/nairobi.jpg',
            sideImg: 'assets/img/all_tours/nairobi_side.jpg',
        },
    ]
    
    document.getElementById('cover-img').style.backgroundImage=`url(${data[Number(localStorage.getItem('package_index'))]['coverImg']})`;
    document.getElementById('place-text').innerHTML = data[Number(localStorage.getItem('package_index'))]['name'];
    document.getElementById('side-img').src = data[Number(localStorage.getItem('package_index'))]['sideImg'];
}

changeData();