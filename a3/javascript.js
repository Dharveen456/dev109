document.addEventListener("DOMContentLoaded", function() {
    const color = document.getElementById("color");
    const symbol = document.getElementById("symbol");
    const height = document.getElementById("height");
    const submit = document.getElementById("submit");
    const rhombus = document.getElementById("rhobmus");
    submit.addEventListener("click", function(){
       rhombus.text = "jimmy johns";
    });
});
