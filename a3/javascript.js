document.addEventListener("DOMContentLoaded", function() {
    const color = document.getElementById("color");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhombus");
    submit.addEventListener("click", function(){
        let txt = prompt("jimtastic");
       rhombus.textContent = "txt";
    });
});
