var assert = require('assert');
_ = require('lodash'),
events = require('../apis/github/users/jaredstevick/events.json');


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


    it('should have an `answer` function', function(){
        assert(answer);
        assert.equal(typeof answer, 'function');
        assert.equal(typeof answer(), 'object');
    });


    it('should have events', function(){
        assert(events);
    });

    it('should have a `total` key', function() {
        var theAnswer = answer();
        assert.equal(theAnswer.total, 30);
    });


describe('the answer', function(){
    var theAnswer = answer();

    it('should have 30 total events', function() {
    assert(answer().total === 30);
    });

    it('should have some `PushEvent` entries', function(){
        assert.equal(typeof theAnswer.PushEvent, 'object');
        assert(theAnswer.PushEvent.total);
    });
});


