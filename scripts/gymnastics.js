var assert = require('assert');
var events = require('../apis/github/users/jaredstevick/events.json');

assert(events.length);


//answer function
function answer() {
    var pushEvents = events.filter(function(item){
        return item.type == "PushEvent";
        });
    var pullRequests = events.filter(function(item){
        return item.type == 'PullRequestEvent';
    });
    var issueComment = events.filter(function(item){
        return item.type == 'IssueCommentEvent';
    });

    return {
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length,
            },
        'PullRequestEvent': {
            'total': pullRequests.length,
            },
        'IssueCommentEvent': {
            'total': issueComment.length,
        }
        };
};
    //end answer
console.log(answer());



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
        assert(theAnswer.PushEvent);
        assert(theAnswer.PushEvent.total);
    });
});


