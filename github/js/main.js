$(document).ready(function() {

var events = 'events.json';

var pushEvents = (function(item){
    return item.type == 'PushEvent'
});

$.getJSON("jaredstevick.json", function(user) {
    $('aside').find('h2').append(user.name),
    $('aside').find('h3').append(user.login),
    $('aside').find('a').append(user.email),
    $('aside').find('.location').append(user.location),
    $('aside').find('.joined').append(user.created_at.substring(0,10));
    $('aside').find('.followers').prepend(user.followers);
    $('aside').find('.starred').prepend(user.something);
    $('aside').find('.following').prepend(user.following);
});

$.getJSON("repos.json", function (repoArray) {
    $.each(repoArray, function (index, item) {
    var repolist = $('.repos-' + index);
    repolist.find('a').append(item.name);
    repolist.find('p').append(item.description);
    repolist.find('span').append(item.updated_at);
    });
});



console.log(events.length);
console.log(pushEvents.length);

$('button').click(function makewords() {
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/299/comments?access_token=de175947bb3069ad32ac382439d7f929609c5901", JSON.stringify({"body": $("#textbox").val()}), $("#textbox").val(""));
});

});


