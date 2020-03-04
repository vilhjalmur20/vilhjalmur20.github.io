https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  

        const towninfo = jsonObject['towninfo'];

        for (let i = 0; i < towninfo.length; i++) {
            let prophets_display = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let place = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towninfo[i].name + ' ' + towninfo[i].lastname;
            birth.textContent = "Date of Birth: " + towninfo[i].birthdate;
            place.textContent = "Place of Birth: " + towninfo[i].birthplace;


            image.setAttribute('src', towninfo[i].imageurl); 
            image.setAttribute('alt', "picture of: " + h2.textContent);

            prophets_display.appendChild(h2);
            prophets_display.appendChild(birth);
            prophets_display.appendChild(place);
            prophets_display.appendChild(image);

            document.querySelector('div.cards').appendChild(prophets_display);
        }
    });