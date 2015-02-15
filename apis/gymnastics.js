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

var deleteEvent = events.filter(function(item){
	return item.type == 'DeleteEvent'
});

var otherEvents = events.filter(function(item){
	return item.type != 'PushEvent'
});


// function theAnswer(){
//   return {
//     'total': events.length,
//     'PushEvent': {
//       'total': pushEvents.length,
//       'perDay': ...  // On average, how many`PushEvent` entries per day?
//     },
//     'other': {
//       'total': ...,  // How many _other_ events are in the data?
//       'perDay': ...  // How many per day, on average?
//     }
//   };
// } // END answer 

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
console.log(createEvent.length);
console.log(deleteEvent.length);
console.log(otherEvents.length);