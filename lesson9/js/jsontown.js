
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
            if  (towns[i].name == "Preston" || towns[i].name =="Soda Springs"|| towns[i].name =="Fish Haven")
        {
               // pulling elements out of Json
            let shoe = document.createElement("section");
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let year = document.createElement("p");
            let population = document.createElement("p");
            let annual_rainfall = document.createElement("p");
            let image = document.createElement("photo");

                // setting attributes for json elements
            h2.setAttribute("class", "name");
            h4.setAttribute("class", "motto");
            year.setAttribute("class", "year");
            population.setAttribute("class", "pop");
            annual_rainfall.setAttribute("class", "a_rainfall");
            image.setAttribute("class", "image");
            
                // putting json elements into order to display in HTML 
            h2.textContent = towns[i].name;
            h4.textContent = towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            annual_rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            population.textContent = "Town Population: " + towns[i].currentPopulation;

            image.setAttribute('src', "/lesson9/images/" + town.photo);
            image.setAttribute("alt", "picture of: " + h2.textContent);

                // putting json children togehter.
            shoe.appendChild(h2);
            shoe.appendChild(h4);
            shoe.appendChild(year);
            shoe.appendChild(population);
            shoe.appendChild(annual_rainfall);
            shoe.appendChild(image);

                // output to HTML
            document.querySelector("div.jsontown_display").appendChild(shoe);
        }
    }
});