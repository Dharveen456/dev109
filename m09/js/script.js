document.addEventListener("DOMContentLoaded", function () {
            var mybutton = document.querySelector("button");
            mybutton.addEventListener("click", function(event) {
                var elements = document.getElementsByTagName("div");
                for (var index = elements.length - 1; index >= 0; index--) {
                    elements[index].parentNode.removeChild(elements[index]);
                }
                event.stopPropagation();
            });
            document.addEventListener("click", function(event) {
                var dot = document.createElement("div");
                dot.className = "dot";
                dot.style.left = (event.pageX - 4) + "px";
                dot.style.top = (event.pageY - 4) + "px";
                document.body.appendChild(dot);
