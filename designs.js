// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width , color;
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
})
function makeGrid(x,y){
	$('tr').remove();
	for(var a=1;a<=x;a++){
		$('#pixelCanvas').append('<tr id = table'+ a +'></tr>');
	for(var b = 1;b<=y;b++){
		$('#table'+ a).append('<td></td>');
	}
	}
	$('td').click(function addColor(){
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		}else{
			$(this).attr('style','background-color:'+ color);
		}
	})
}