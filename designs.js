
// Select color input
let color = $('#colorPicker').val();
$('#colorPicker').change(function(){
  color = $('#colorPicker').val();
});

// Select height and width input
let height = $('#input_height').val();
$('#input_height').change(function(){
  height = $('#input_height').val();
});

let width = $('#input_width').val(); 
$('#input_width').change(function(){
  width = $('#input_width').val();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
 const body = document.getElementById("pixel_canvas");
 // clear inner html and reset the grid
 body.innerHTML = "";
 // creates a <table> element and a <tbody> element
 let tbl = document.createElement("table");
 let tblBody = document.createElement("tbody");
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
  tblBody.appendChild(row);
 }
 // put the <tbody> in the <table>
 tbl.appendChild(tblBody);
 // appends <table> into <body>
 body.appendChild(tbl);
 // sets the border attribute of tbl to 2;
 tbl.setAttribute("border", "1");
 // color the 
 $('td').click(function() {
  $(this).css('background-color', color);
 });
}