document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementsByTagName("button")[0];
  const input = document.getElementsByTagName("input")[0];
  function addItem(){
    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');

    // Create a text node and store it in a variable.
    var newText = document.createTextNode(input.value);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];
    
    // Insert the new element into its position.
    position.appendChild(newEl);
    input.value="";
  }
  button.addEventListener("click", addItem);
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addItem();
    }
  });
});
