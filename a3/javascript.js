document.addEventListener("DOMContentLoaded", function() {
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhombus");
    submit.addEventListener("click", function(){
        rhombus.style.lineHeight = parseInt(height.value) + "px";
        let rhombtext="";
        let evenColor = color2.value;
        let oddColor = color1.value;
        for (let i = 0; i < 10; i++) {
        let odd = true;
            for (let k = 0; k < 10-i; k++) {
                rhombtext += `<span style="color:white">${symbol.value}</span>`;
            }
            for (let j = 0; j < i; j++) {
                odd = !odd;
                rhombtext += odd 
                    ? `<span style="color:${oddColor}">${symbol.value}</span>` 
                    : `<span style="color:${evenColor}">${symbol.value}</span>`;
            }
            rhombtext += "<br>";
        }
        rhombus.innerHTML = rhombtext;
    });
});
