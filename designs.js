
// Select color input
let color;
$('#colorPicker').change(function(){
	color = $('#colorPicker').val();
	// alert('color '+ color +' is picked')
});

// Select size input

let height;

$('#input_height').change(function(){
	height = $('#input_height').val();
	// alert('you picked ' + height);
});

let width; 

$('#input_width').change(function(){
	width = $('#input_width').val();
	// alert('you picked ' + width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	 // get the reference for the body
  let body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  let n = document.createElement("table");
  let m = document.createElement("tbody");
 
  // creating all cells
  for (let i = 0; i < height; i++) {
    // creates a table row
    let row = document.createElement("tr");
 
    for (let j = 0; j < width; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      let cell = document.createElement("td");
      let cellText = document.createTextNode(" ");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    m.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  n.appendChild(m);
  // appends <table> into <body>
  body.appendChild(n);
  // sets the border attribute of n to 2;
  n.setAttribute("border", "1");

  $('td').click( function(){
	$(this).css('background-color', color);
});
}

