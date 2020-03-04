const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let prophets_display = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let place = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birth.textContent = "Date of Birth: " + prophets[i].birthdate;
            place.textContent = "Place of Birth: " + prophets[i].birthplace;


            image.setAttribute('src', prophets[i].imageurl); 
            image.setAttribute('alt', "picture of: " + h2.textContent);

            prophets_display.appendChild(h2);
            prophets_display.appendChild(birth);
            prophets_display.appendChild(place);
            prophets_display.appendChild(image);

            document.querySelector('div.cards').appendChild(prophets_display);
        }
    });