var _ = require('lodash');
var events = require('./github/users/jaredstevick/events.json');
var assert = require('assert');

var pushEvents = events.filter(function(item){
	return item.type == 'PushEvent'
});

var pullRequests = events.filter(function(item){
    return item.type == 'PullRequestEvent';
});

var issueComment = events.filter(function(item){
    return item.type == 'IssueCommentEvent';
});

var createEvent = events.filter(function(item){
	return item.type == 'CreateEvent'
});

var otherEvents = events.filter(function(item){
	return item.type != 'PushEvent'
});

//when did all this happen
function dateCreated(a){ 
	return _.map(a, 'created_at')
};

//thanks taylor, this totally works
function findSpan(a, b){
	return _.first(a).substring(0, 10).localeCompare(_.last(b).substring(0, 10)) + 1;
}

//now find the average
function avg(item) {
	var diff = findSpan(dateCreated(events), dateCreated(events));
	return item.length / diff
}

function theAnswer(){
   	return {
    'total': events.length,
    'PushEvent': {
    	'total': pushEvents.length,
       	'perDay': avg(pushEvents)
    },
    'PullRequests': {
    	'total': pullRequests.length,
    	'perDay': avg(pullRequests)
    },
    'IssueComment': {
    	'total': issueComment.length,
    	'perDay': avg(issueComment)
    },
	'CreateEvents': {
		'total': createEvent.length,
		'perDay': avg(createEvent)
	},
     'OtherEvents': {
       'total': otherEvents.length,
       'perDay': avg(otherEvents)
     }
   };
 }; // END answer 

it('should have 30 total events', function() {
    assert(events.length === 30);
    });

it('should have 14 `PushEvent` entries', function(){
    assert(pushEvents.length === 14);
    });

console.log(events.length);
console.log(pushEvents.length);
console.log(pullRequests.length);
console.log(issueComment.length);
console.log(otherEvents.length);
console.log(dateCreated(events));
console.log(theAnswer(events));
