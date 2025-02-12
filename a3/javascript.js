document.addEventListener("DOMContentLoaded", function() {
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhombus");
    submit.addEventListener("click", function(){
        rhombus.style.lineheight = parseInt(height.value) + "px";
        let rhombtext="";
        let odd=true;
        span.style.color = "#FF0000";
        p.style.color = "#00FF00";
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                odd = !odd;
                rhombtext+= odd ? "<span>"+symbol.value+"</span>" :  symbol.value;
            }
            rhombtext+="<br>";
        }
       rhombus.innerHTML = rhombtext;
    });
});
