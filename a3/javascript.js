document.addEventListener("DOMContentLoaded", function() {
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhombus");
    submit.addEventListener("click", function(){
        let rhombtext="";
        let evenColor = color2.value;
        let oddColor = color1.value;
        let odd = true;
        for (let i = 1; i <= height.value; i++) { //top half
            for (let k = 0; k < height.value-i; k++) {
                rhombtext += `<span style="color:white">${symbol.value}</span>`;
            }
            for (let j = 0; j < 2*i; j++) {
                odd = !odd;
                rhombtext += odd 
                    ? `<span style="color:${oddColor}">${symbol.value}</span>` 
                    : `<span style="color:${evenColor}">${symbol.value}</span>`;
            }
            for (let k = 0; k < height.value-i; k++) {
                rhombtext += `<span style="color:white">${symbol.value}</span>`;
            }
            rhombtext += "<br>";
        }
        for (let i = 0; i < height.value; i++) { //bottom half
            for (let k = 0; k < i; k++) {
                rhombtext += `<span style="color:white">${symbol.value}</span>`;
            }
            for (let j = 0; j < 2*(height.value-i); j++) {
                odd = !odd;
                rhombtext += odd 
                    ? `<span style="color:${oddColor}">${symbol.value}</span>` 
                    : `<span style="color:${evenColor}">${symbol.value}</span>`;
            }
            for (let k = 0; k < i; k++) {
                rhombtext += `<span style="color:white">${symbol.value}</span>`;
            }
            rhombtext += "<br>";
        }
        rhombus.innerHTML = rhombtext;
    });
});
