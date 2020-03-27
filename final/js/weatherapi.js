const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8f7bd10376e2fe83de7f28f324da5709";

fetch(apiURL)
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject);

    const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; 
    const desc = jsObject.weather[0].description;  

    document.getElementById("current-temp").textContent = jsObject.main.temp;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);  
  });