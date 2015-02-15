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

/*
function answer(){
  return {
    'total': ...,    // How many total events did you fetch?
    'PushEvent': {
      'total': ...,  // How many total events of type `PushEvent` are there?
      'perDay': ...  // On average, how many`PushEvent` entries per day?
    },
    'other': {
      'total': ...,  // How many _other_ events are in the data?
      'perDay': ...  // How many per day, on average?
    }
  };
} // END answer */

console.log(events.length);
console.log(pushEvents.length);
console.log(pullRequests.length);
console.log(issueComment.length);
