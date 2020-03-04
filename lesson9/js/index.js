const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const town = jsonObject["town"];

        for (let i = 0; i < towns.length; i++) {
            if  (towns[i].name == "Franklin" || towns[i].name == "Fish Haven"|| towns[i].name == "Greenville")
            {
    
            let town_display = document.createElement("section");
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let year = document.createElement("p");
            let population = document.createElement("p");
            let annual_rainfall = document.createElement("p");
            let image = document.createElement("photo");

            h2.textContent = towns[i].name + " " + towns[i].name;
            h4.textContent = towns[i].motto + " " + towns[i].motto;
            year.textContent = "Year Founded: " + towns[i].yearFounded;
            annual_rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            population.textContent = "Town Population: " + towns[i].Population;


            image.setAttribute("src", towns[i].photo); 
            image.setAttribute("alt", "picture of: " + h2.textContent);

            town_display.appendChild(h2);
            town_display.appendChild(h4);
            town_display.appendChild(year);
            town_display.appendChild(population);
            town_display.appendChild(annual_rainfall);
            town_display.appendChild(image);

            document.querySelector("div.cards").appendChild(town_display);
        }
    });