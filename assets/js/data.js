var tour_data = [
    {
      name: 'London',
      desc: 'London is the city region with the highest population in the United Kingdom.',
      img: 'assets/img/all_tours/london.jpg',
    },
    {
      name: 'Maldives',
      desc: 'This tropical country has separated islands and islands are surrounded by its own lagoon.',
      img: 'assets/img/all_tours/maldives.jpg',
    },
    {
      name: 'Dubai',
      desc: 'This United Arab Emirates city is a luxury travel destination for leisure and business travellers.',
      img: 'assets/img/all_tours/dubai.jpg',
    },
    {
      name: 'Berlin',
      desc: 'Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene',
      img: 'assets/img/all_tours/berlin.jpg',
    },
    {
      name: 'Paris',
      desc: 'Paris (nicknamed the "City of light") is the capital city of France, and the largest city in France',
      img: 'assets/img/all_tours/paris.jpg',
    },
    {
      name: 'Liverpool',
      desc: 'Liverpool is a city located in the North West of England, situated on the estuary of the River Mersey that opens out into the Irish Sea.',
      img: 'assets/img/all_tours/liverpool.jpg',
    },
    {
      name: 'India',
      desc: 'India is a beautiful country with unity in diversity. India has rich in heritage and its culture',
      img: 'assets/img/all_tours/india.jpg',
    },
    {
      name: 'Denver',
      desc: 'It has a big-city feel, with a vibrant downtown, great architectural variety, lovely city neighborhoods and parks,',
      img: 'assets/img/all_tours/denver.jpg',
    },
    {
      name: 'Norway',
      desc: 'Norway is a narrow country in northern Europe. It shares the Scandinavian Peninsula with Sweden and Finland.',
      img: 'assets/img/all_tours/norway.jpg',
    },
    {
      name: 'Tokyo',
      desc: 'Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors',
      img: 'assets/img/all_tours/tokyo.jpg',
    },
    {
      name: 'New York',
      desc: 'New York is the most populous and the most international city in the country',
      img: 'assets/img/all_tours/newyork.jpg',
    },
    {
      name: 'Stockholm',
      desc: 'Stockholm is simultaneously urban and close to nature; water is an ever-present feature in this city where lake and sea meet',
      img: 'assets/img/all_tours/stockholm.jpg',
    },
    {
      name: 'Venice',
      desc: 'Venice is built on 118 small islands that are separated by 150 canals. People cross the canals by many small bridges.',
      img: 'assets/img/all_tours/venice.jpg',
    },
    {
      name: 'Rio',
      desc: 'Rio de Janeiro is one of the most visited cities in the Southern Hemisphere and is known for its natural settings',
      img: 'assets/img/all_tours/rio.jpg',
    },
    {
      name: 'Amsterdam',
      desc: 'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea.',
      img: 'assets/img/all_tours/amsterdam.jpg',
    },
    {
      name: 'Nairobi',
      desc: 'Nairobi, popularly known as “Green City in the Sun” has an amazing culture, which is unparalleled in any other city.',
      img: 'assets/img/all_tours/nairobi.jpg',
    },
  ];

  var tour_data_array = JSON.parse(localStorage.getItem('all_tours_data'));

  if(tour_data_array != null && tour_data_array.length != tour_data.length){
    console.log('New item added');
  } else{
    localStorage.setItem('all_tours_data',JSON.stringify(tour_data));
  }

  var data = [
    {
        name: 'London',
        coverImg: 'assets/img/all_tours/london.jpg',
        sideImg: 'assets/img/all_tours/london_side.jpg',
        package: [
            {
                duration: '3 Nights 4 Days',
                part_logo: 'assets/img/make_my_trip.png',
                places: 'Tower Bridge, London Eye, Wax Museum, Big Ben, Wembly Stadium',
                price: '$ 90',
            },
            {
                duration: '2 Nights 3 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Buckingham Palace, Tower Bridge, Big Ben, British Museum',
                price: '$ 84',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Tower of London, Big Ben, Tower Bridge, London Eye, Wax Museum',
                price: '$ 94',
            },
            {
                duration: '10 Nights 9 Days',
                part_logo: 'assets/img/logo2.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 104',
            },
            {
                duration: '7 Nights 8 Days',
                part_logo: 'assets/img/logo4.jpg',
                places: 'Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 95',
            },
            {
                duration: '8 Nights 9 Days',
                part_logo: 'assets/img/yatra.png',
                places: 'Big Ben, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 100',
            },
            {
                duration: '4 Nights 5 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 99',
            },
            {
                duration: '8 Nights 9 Days',
                part_logo: 'assets/img/logo3.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 89',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/logo4.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 85',
            },
            {
                duration: '8 Nights 9 Days',
                part_logo: 'assets/img/logo2.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 90',
            },
            {
                duration: '4 Nights 5 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 96',
            },
            {
                duration: '4 Nights 3 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 91',
            },
            {
                duration: '5 Nights 6 Days',
                part_logo: 'assets/img/logo3.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 96',
            },
            {
                duration: '9 Nights 9 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 101',
            },
            {
                duration: '5 Nights 6 Days',
                part_logo: 'assets/img/logo5.png',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 84',
            },
            {
                duration: '8 Nights 8 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 88',
            },
            {
                duration: '8 Nights 9 Days',
                part_logo: 'assets/img/logo5.png',
                places: 'Big Ben, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 89',
            },
            {
                duration: '6 Nights 7 Days',
                part_logo: 'assets/img/logo1.jpg',
                places: 'Big Ben, Sky Dive, Tower Bridge, London Eye, Wax Museum, Wembly Stadium',
                price: '$ 94',
            },
            {
                duration: '2 Nights 3 Days',
                part_logo: 'assets/img/logo2.jpg',
                places: 'Big Ben, Platform 9, Cable Car, Sky Dive, Tower Bridge, London Eye',
                price: '$ 75',
            },
        ]
    },
    {
        name: 'Maldives',
        coverImg: 'assets/img/all_tours/maldives.jpg',
        sideImg: 'assets/img/all_tours/maldives_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 150',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
            {
                duration: '5 Nights 4 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Sultan Park, Atoll Transfer, Male Local Market, Male Fish Market, Hukuru Miskiiy, National Museum',
                price: '$ 165',
            },
        ]
    },
    {
        name: 'Dubai',
        coverImg: 'assets/img/all_tours/dubai.jpg',
        sideImg: 'assets/img/all_tours/dubai_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 60',
            },
            {
                duration: '8 Nights 7 Days',
                part_logo: 'assets/img/make_my_trip.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 90',
            },
            {
                duration: '3 Nights 4 Days',
                part_logo: 'assets/img/yatra.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 75',
            },
            {
                duration: '7 Nights 6 Days',
                part_logo: 'assets/img/trip_advisor.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 95',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 55',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 78',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Buraj Khalifa, Burj Al Arab, Dubai Mall, Dubai Frame, Dubai Expo, Le Mer',
                price: '$ 58',
            },
        ]
    },
    {
        name: 'Berlin',
        coverImg: 'assets/img/all_tours/berlin.jpg',
        sideImg: 'assets/img/all_tours/berlin_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Brandenburg Gate, Rebuilt Reichstag, Museum Island, The Berlin Wall Memorial, German Historical Museum, Berliner Fernsehturm',
                price: '$ 80',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Brandenburg Gate, Rebuilt Reichstag, Museum Island, The Berlin Wall Memorial, German Historical Museum, Berliner Fernsehturm',
                price: '$ 80',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Brandenburg Gate, Rebuilt Reichstag, Museum Island, The Berlin Wall Memorial, German Historical Museum, Berliner Fernsehturm',
                price: '$ 80',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Brandenburg Gate, Rebuilt Reichstag, Museum Island, The Berlin Wall Memorial, German Historical Museum, Berliner Fernsehturm',
                price: '$ 80',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Brandenburg Gate, Rebuilt Reichstag, Museum Island, The Berlin Wall Memorial, German Historical Museum, Berliner Fernsehturm',
                price: '$ 80',
            },
        ]
    },
    {
        name: 'Paris',
        coverImg: 'assets/img/all_tours/paris.jpg',
        sideImg: 'assets/img/all_tours/paris_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Eiffel Tower, Musée du Louvre, Cathédrale Notre-Dame de Paris, Avenue des Champs-Élysées, Musée d Orsay',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Eiffel Tower, Musée du Louvre, Cathédrale Notre-Dame de Paris, Avenue des Champs-Élysées, Musée d Orsay',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Eiffel Tower, Musée du Louvre, Cathédrale Notre-Dame de Paris, Avenue des Champs-Élysées, Musée d Orsay',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Eiffel Tower, Musée du Louvre, Cathédrale Notre-Dame de Paris, Avenue des Champs-Élysées, Musée d Orsay',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Eiffel Tower, Musée du Louvre, Cathédrale Notre-Dame de Paris, Avenue des Champs-Élysées, Musée d Orsay',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Liverpool',
        coverImg: 'assets/img/all_tours/liverpool.jpg',
        sideImg: 'assets/img/all_tours/liverpool_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Beatles, Royal Albert Dock, Anfield Stadium, Maritime Museum, Pier Head, Metropolitan Cathedral',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Beatles, Royal Albert Dock, Anfield Stadium, Maritime Museum, Pier Head, Metropolitan Cathedral',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Beatles, Royal Albert Dock, Anfield Stadium, Maritime Museum, Pier Head, Metropolitan Cathedral',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Beatles, Royal Albert Dock, Anfield Stadium, Maritime Museum, Pier Head, Metropolitan Cathedral',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Beatles, Royal Albert Dock, Anfield Stadium, Maritime Museum, Pier Head, Metropolitan Cathedral',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'India',
        coverImg: 'assets/img/all_tours/india.jpg',
        sideImg: 'assets/img/all_tours/india_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Taj Mahal, Varanasi, Golden Temple, Golden City, Red Fort, Gateway of India, Mecca Masjid, Amer Fort, Beaches of Goa, Periyar National Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Taj Mahal, Varanasi, Golden Temple, Golden City, Red Fort, Gateway of India, Mecca Masjid, Amer Fort, Beaches of Goa, Periyar National Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Taj Mahal, Varanasi, Golden Temple, Golden City, Red Fort, Gateway of India, Mecca Masjid, Amer Fort, Beaches of Goa, Periyar National Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Taj Mahal, Varanasi, Golden Temple, Golden City, Red Fort, Gateway of India, Mecca Masjid, Amer Fort, Beaches of Goa, Periyar National Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Taj Mahal, Varanasi, Golden Temple, Golden City, Red Fort, Gateway of India, Mecca Masjid, Amer Fort, Beaches of Goa, Periyar National Park',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Denver',
        coverImg: 'assets/img/all_tours/denver.jpg',
        sideImg: 'assets/img/all_tours/denver_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Mount Evans, Denver Union Station, Coors Field, Denver Zoo, Larimer Square',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Mount Evans, Denver Union Station, Coors Field, Denver Zoo, Larimer Square',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Mount Evans, Denver Union Station, Coors Field, Denver Zoo, Larimer Square',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Mount Evans, Denver Union Station, Coors Field, Denver Zoo, Larimer Square',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Mount Evans, Denver Union Station, Coors Field, Denver Zoo, Larimer Square',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Norway',
        coverImg: 'assets/img/all_tours/norway.jpg',
        sideImg: 'assets/img/all_tours/norway_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Sognefjord, Pulpit Rock, Tromsø, Lofoten Islands, Bygdoy Peninsula',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Sognefjord, Pulpit Rock, Tromsø, Lofoten Islands, Bygdoy Peninsula',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Sognefjord, Pulpit Rock, Tromsø, Lofoten Islands, Bygdoy Peninsula',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Sognefjord, Pulpit Rock, Tromsø, Lofoten Islands, Bygdoy Peninsula',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Tokyo',
        coverImg: 'assets/img/all_tours/tokyo.jpg',
        sideImg: 'assets/img/all_tours/tokyo_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Imperial Palace, Sensō-ji Temple, National Museum, Ueno Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Imperial Palace, Sensō-ji Temple, National Museum, Ueno Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Imperial Palace, Sensō-ji Temple, National Museum, Ueno Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Imperial Palace, Sensō-ji Temple, National Museum, Ueno Park',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'The Imperial Palace, Sensō-ji Temple, National Museum, Ueno Park',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'New York',
        coverImg: 'assets/img/all_tours/newyork.jpg',
        sideImg: 'assets/img/all_tours/newyork_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Statue of Liberty, Central Park, Rockefeller Center, Metropolitan Museum of Art, Broadway',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Statue of Liberty, Central Park, Rockefeller Center, Metropolitan Museum of Art, Broadway',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Statue of Liberty, Central Park, Rockefeller Center, Metropolitan Museum of Art, Broadway',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Statue of Liberty, Central Park, Rockefeller Center, Metropolitan Museum of Art, Broadway',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Statue of Liberty, Central Park, Rockefeller Center, Metropolitan Museum of Art, Broadway',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Stockholm',
        coverImg: 'assets/img/all_tours/stockholm.jpg',
        sideImg: 'assets/img/all_tours/stockholm_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Gamla Stan, Vasa Museum, Boat Tour,  Djurgården, Open-Air Museum',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Gamla Stan, Vasa Museum, Boat Tour,  Djurgården, Open-Air Museum',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Gamla Stan, Vasa Museum, Boat Tour,  Djurgården, Open-Air Museum',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Gamla Stan, Vasa Museum, Boat Tour,  Djurgården, Open-Air Museum',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Gamla Stan, Vasa Museum, Boat Tour,  Djurgården, Open-Air Museum',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Venice',
        coverImg: 'assets/img/all_tours/venice.jpg',
        sideImg: 'assets/img/all_tours/venice_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'St. Marks Basilica, Piazza San Marco, Bridge of Sighs, Palazzo Ducale, Canale Grande, San Polo',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'St. Marks Basilica, Piazza San Marco, Bridge of Sighs, Palazzo Ducale, Canale Grande, San Polo',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'St. Marks Basilica, Piazza San Marco, Bridge of Sighs, Palazzo Ducale, Canale Grande, San Polo',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'St. Marks Basilica, Piazza San Marco, Bridge of Sighs, Palazzo Ducale, Canale Grande, San Polo',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'St. Marks Basilica, Piazza San Marco, Bridge of Sighs, Palazzo Ducale, Canale Grande, San Polo',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Rio',
        coverImg: 'assets/img/all_tours/rio.jpg',
        sideImg: 'assets/img/all_tours/rio_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Cristo Redentor, Sugarloaf, Copacabana, Ipanema, Carnaval',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Cristo Redentor, Sugarloaf, Copacabana, Ipanema, Carnaval',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Cristo Redentor, Sugarloaf, Copacabana, Ipanema, Carnaval',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Cristo Redentor, Sugarloaf, Copacabana, Ipanema, Carnaval',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Cristo Redentor, Sugarloaf, Copacabana, Ipanema, Carnaval',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Amsterdam',
        coverImg: 'assets/img/all_tours/amsterdam.jpg',
        sideImg: 'assets/img/all_tours/amsterdam_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Van Gogh Museum, Jordaan Neighborhood, Vondelpark, Dam Square, Royal Palace of Amsterdam',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Van Gogh Museum, Jordaan Neighborhood, Vondelpark, Dam Square, Royal Palace of Amsterdam',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Van Gogh Museum, Jordaan Neighborhood, Vondelpark, Dam Square, Royal Palace of Amsterdam',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Van Gogh Museum, Jordaan Neighborhood, Vondelpark, Dam Square, Royal Palace of Amsterdam',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Van Gogh Museum, Jordaan Neighborhood, Vondelpark, Dam Square, Royal Palace of Amsterdam',
                price: '$ 60',
            },
        ]
    },
    {
        name: 'Nairobi',
        coverImg: 'assets/img/all_tours/nairobi.jpg',
        sideImg: 'assets/img/all_tours/nairobi_side.jpg',
        package: [
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Nairobi National Park, Giraffe Centre, Sheldrick Wildlife Trust, Karura Forest, Ngong Hills',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Nairobi National Park, Giraffe Centre, Sheldrick Wildlife Trust, Karura Forest, Ngong Hills',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Nairobi National Park, Giraffe Centre, Sheldrick Wildlife Trust, Karura Forest, Ngong Hills',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Nairobi National Park, Giraffe Centre, Sheldrick Wildlife Trust, Karura Forest, Ngong Hills',
                price: '$ 60',
            },
            {
                duration: '4 Nights 4 Days',
                part_logo: 'assets/img/expedia.png',
                places: 'Nairobi National Park, Giraffe Centre, Sheldrick Wildlife Trust, Karura Forest, Ngong Hills',
                price: '$ 60',
            },
        ]
    },
]

var tour_package_data_array = JSON.parse(localStorage.getItem('tour_package_data'));

  if(tour_package_data_array != null && tour_package_data_array.length != data.length){
    console.log('New item added');
  } else{
    localStorage.setItem('tour_package_data',JSON.stringify(data));
  }