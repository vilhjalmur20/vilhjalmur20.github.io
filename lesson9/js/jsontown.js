const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject["towns"];

        for (let town of towns){
            if (["Preston", "Soda Springs", "Fish Haven"].includes(town.name)) {
            let shoe = document.createElement("section");
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let year = document.createElement("p");
            let population = document.createElement("p");
            let annual_rainfall = document.createElement("p");
            let image = document.createElement("photo");

            h2.setAttribute("class", "name");
            h4.setAttribute("class", "motto");
            year.setAttribute("class", "year");
            population.setAttribute("class", "pop");
            annual_rainfall.setAttribute("class", "a_rainfall");
            image.setAttribute("class", "image");

            h2.textContent = town.name;
            h4.textContent = town.motto;
            year.textContent = "Year Founded: " + town.yearFounded;
            annual_rainfall.textContent = "Annual Rainfall: " + town.averageRainfall;
            population.textContent = "Town Population: " + town.currentPopulation;

            image.setAttribute("src", town[i].photo); 
            image.setAttribute("alt", "picture of: " + h2.textContent);

            shoe.appendChild(h2);
            shoe.appendChild(h4);
            shoe.appendChild(year);
            shoe.appendChild(population);
            shoe.appendChild(annual_rainfall);
            shoe.appendChild(image);

            document.querySelector("div.town_display").appendChild(shoe);
        }
    }
});