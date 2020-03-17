const dayy = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthy = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let today = new Date();
let day = today.getDate();
let dayName = dayy[today.getDay()];
let month = monthy[today.getMonth()];
let year = today.getFullYear();

document.getElementById("cd").textContent = `${dayName}, ${day} ${month} ${year}`