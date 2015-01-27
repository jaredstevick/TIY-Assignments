var assert = require('assert');
var events = require('../apis/github/users/jaredstevick/events.json');

assert(events.length);

//answer function
function answer() {
    var index = 0;
    var numberofPushEvents = 0;

events.forEach(function(item){
    if ( item.type == "PushEvent" ) {
        numberofPushEvents++;
    }
});
var pushEvents = events.filter(function(item){
    return item.type == "PushEvent";
});

pushEvents.length == numberofPushEvents;
    return {
        'total': events.length,
        'PushEvents': {
            'total': numberofPushEvents,
    }
}
};    //end answer



//testing, testing

describe('the setup', function(){
    it('should have events', function(){
        assert(events);
    });

    it('should have an `answer` function', function(){
        assert(answer);
        assert(typeof answer == 'function');
    });
});


describe('the answer', function(){
    var theAnswer = answer();

    it('should have 30 total events', function() {
    assert(answer().total === 30);
    });

    it('should have some `PushEvent` entries', function(){
        assert(theAnswer.PushEvents);
        assert(theAnswer.PushEvents.total);
    });
});



//
//console.log(events.length); //it can't be that easy, can it? github api documentation said it stores 30 events, so that looks right.
//
////returns 30
//
////over-complicated solution from stack overflow that totally works, i think.
//
//var pub = { };
//for (var i = 0, j = events.length; i < j; i++) {
//   pub[events[i]] = (pub[events[i]] || 0) + 1;
//}
//
//console.log(pub);
//
////returns { '[object Object]': 30 }//
//
//
//
////now to try to get the pushevents
//
//function isPush(element) {
//    return element == "PushEvent";
//}
//
//var filtered = events.filter(isPush);
//
//console.log(filtered);
////this returns an empty array, which is obviously wrong
//
//
////looking for pull events, i think?
//
//function isPull(element) {
//    return element == "pull_request";
//}
//
//var filteredpush = events.filter(isPull);
//
//console.log(filteredpush);
//
////this clearly doesn't work either
