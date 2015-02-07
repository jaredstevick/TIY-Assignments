(function (window) {
    'use strict';


$(document).ready(function() {

$.getJSON('..apis/github/users/jaredstevick/jaredstevick.json', function(json) {
    console.log(json.login);
});


$('button').click(function makewords() {
    //function
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/255/comments?access_token=de175947bb3069ad32ac382439d7f929609c5901", JSON.stringify({"body": $("#textbox").val()}), $("#textbox").val(""));
});





});
})(window);
//example
//$("h1").text("changed");


