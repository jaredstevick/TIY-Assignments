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

        pushEvents.length ==  numberofPushEvents; {
            return {
                'total': events.length,
                'PushEvents': {
                'total': numberofPushEvents
                }
            }
        }
};
    //end answer




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


