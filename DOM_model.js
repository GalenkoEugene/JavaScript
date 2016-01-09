
var table =  document.getElementById("lol");

for (var i = table.rows.length-1; i>=0; i--) {
	var row = table.rows[i];
	if(i%2 == 0) {
		for (var j = 0; j < row.cells.length-1; j++) {
			row.cells[j].style.backgroundColor = "grey";
		};
		
		//row.cells[i].style.backgroundColor = "green"
		//var clone = row;
	}
	//table.rows[i].style.backgroundColor = "red";
	//row.cells[i].style.backgroundColor = "green"
	};

// в переменной td DOM-элемент для тега <td>
//td.style.backgroundColor = 'red';
function del(id){
	//if (confirm ("Точно удалить?")){
		var i = id.parentNode.parentNode.rowIndex;
		document.getElementById('lol').deleteRow(i);	
		//alert (id + " был удален")
/*	} else{
		alert ("Фух, пронесло..")
	}*/
}