
    // refrancing json file
const requestURLtwo = '/final/json/guides.list.json';

fetch(requestURLtwo)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const guides = jsonObject['guides'];

            //selecting towns out of Json
        for (let i = 0; i < guides.length; i++) {
            if  (guides[i].id == "Nate" || guides[i].id =="Ivy"|| guides[i].id =="Heath")
        {
               // pulling elements out of Json
            let shoe = document.createElement("section");
            let name = document.createElement("p");
            let age = document.createElement("p");
            let experience = document.createElement("p");
            let bio = document.createElement("p");
            let quote = document.createElement("p");
            let river = document.createElement("p");
            let picture = document.createElement("img");

                // setting attributes for json elements
            shoe.setAttribute('class', 'displaysection');
            name.setAttribute("class", "name");
            age.setAttribute("class", "age");
            experience.setAttribute("class", "experience");
            bio.setAttribute("class", "bio");
            quote.setAttribute("class", "quote");
            river.setAttribute("class", "river");

                // putting json elements into order to display in HTML 
            name.textContent = "Name: " + guides[i].name;
            age.textContent = "Age: " +  guides[i].age;
            experience.textContent = "Experience: " + guides[i].experience;
            bio.textContent = "Biography: " + guides[i].bio;
            quote.textContent = "Quote: " + guides[i].quote;
            river.textContent = "Rivers: " + guides[i].river;

            picture.setAttribute("src", "" + guides[i].image);
            picture.setAttribute("alt", "picture of: " + name.textContent);
            
                // putting json children togehter.
            shoe.appendChild(name);
            shoe.appendChild(age);
            shoe.appendChild(experience);
            shoe.appendChild(bio);
            shoe.appendChild(quote);
            shoe.appendChild(river);
            shoe.appendChild(picture);

                // output to HTML
            document.querySelector("div.guides_display").appendChild(shoe);
        }
    }
});