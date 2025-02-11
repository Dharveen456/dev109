document.addEventListener("DOMContentLoaded", function() {
    const color = document.getElementById("color");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhombus");
    submit.addEventListener("click", function(){
        let rhombtext="";
        for(let i=0; i<10; i++){
            for(let i=0; i<10; i++){
                rhombtext+=symbol.value;
            }
            rhombtext+="\n";
        }
       rhombus.textContent = rhombtext;
    });
});
