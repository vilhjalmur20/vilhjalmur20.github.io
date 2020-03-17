const t = parseFloat(document.getElementById('high').innerText);
const s = parseFloat(document.getElementById('wspeed').innerText);
if (t <= 50 && s > 3) {
    var w = windChill(t , s);
    document.getElementById("chill").innerHTML=w.toFixed(2);
}
else { 
    document.getElementById("chill").innerHTML = "N/A";
} 
function windChill(tempf , s) {
    var a = Math.pow(s,0.16);
    var math = 35.74 + 0.6215 * tempf - 35.75 * a + 0.4275 * tempf * a;
  return math;
}