
    // refrancing json file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

            //selecting towns out of Json
        for (let i = 0; i < towns.length; i++) {
            if  (towns[i].name == "Fish Haven")
        {
               // pulling elements out of Json
            let shoe = document.createElement("section");
            let events = document.createElement("p");

                // setting attributes for json elements
            shoe.setAttribute("class", "fh_jason");
            events.setAttribute("class", "events");
            
                // putting json elements into order to display in HTML 
            events.textContent = "events" + towns[i].events;

                // putting json children togehter.
            shoe.appendChild(events);

                // output to HTML
            document.querySelector("div.fh_jsontown_display").appendChild(shoe);
        }
    }
});