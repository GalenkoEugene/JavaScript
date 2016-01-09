
var table =  document.getElementById("lol");

for (var i = table.rows.length-1; i>=0; i--) {
	var row = table.rows[i];
	if(i%2 == 0) {
		for (var j = 0; j < row.cells.length; j++) {
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
	
/*нужно попробовать!!!
function gett(){
	// 1. Создаём новый объект XMLHttpRequest
}
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'style.css', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
}*/