var table = prompt("What unit do you want for the table");// Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message
  // Do multiplication
  msg = '<h2>Multiplication</h2>';
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
