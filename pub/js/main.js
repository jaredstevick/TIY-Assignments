

$(document).ready(function() {

$.getJSON('jaredstevick.json', function(json) {
    console.log(json.login); //testing
});


$('button').click(function makewords() {
    //function
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/255/comments?access_token=de175947bb3069ad32ac382439d7f929609c5901", JSON.stringify({"body": $("#textbox").val()}), $("#textbox").val(""));
});

$.get("jaredstevick.json", function(user) {
    $('aside').find('h2').append(user.name);}, "json");

$.get("jaredstevick.json", function(user) {
    $('aside').find('h3').append(user.login);}, "json");

$.get("jaredstevick.json", function(user) {
    $('aside').find('a').append(user.email);}, "json");

$.get("jaredstevick.json", function(user) {
    $('aside').find('.location').append(user.location);}, "json");

$.get("jaredstevick.json", function(user) {
    $('aside').find('.joined').append(user.created_at);}, "json");

});

//example
//$("h1").text("changed");


