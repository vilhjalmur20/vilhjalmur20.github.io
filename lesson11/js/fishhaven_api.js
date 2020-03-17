// API for hero-overlay
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=8f7bd10376e2fe83de7f28f324da5709";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    console.log(jsObject);
    
    document.getElementById("CC").textContent = jsObject.weather[0].main; //Current Conditions
    document.getElementById("high").textContent = jsObject.main.temp; //High
    document.getElementById("humidty").textContent = jsObject.main.humidity; //Humidity
    document.getElementById("wspeed").textContent = jsObject.wind.speed; //Wind speed
  });




//_________________________________________________________________________________
//5 day under Hero pic
    const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=8f7bd10376e2fe83de7f28f324da5709";
    
    fetch(apiURL2)

    .then((response) => response.json())
    .then((jsObject) => {

    let day_of_the_week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let number = 1;

    for (let day of jsObject.list) {
        if (day.dt_txt.includes("18:00:00")) {

            let date = new Date(day.dt_txt);
            let display = "day" + number;

            const loadimage = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

            document.getElementById(display).textContent = day_of_the_week[date.getDay()];
            document.getElementById(`${display}_temperature`).textContent = day.main.temp.toFixed(0);
            document.getElementById(`${display}_pic`).setAttribute('src', loadimage); 
            document.getElementById(`${display}_pic`).setAttribute('alt', day.weather[0].description);
            number++;
        }
    }

    });