$(document).ready(function() {
	//function

$('button').click(function makewords() {
	//function
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/255/comments?access_token=de175947bb3069ad32ac382439d7f929609c5901", JSON.stringify({"body": $("#textbox").val()}), $("#textbox").val(""));
});





});

//example
//$("h1").text("changed");


