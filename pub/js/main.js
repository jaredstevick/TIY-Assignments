/*wanted to see if i could make this work.  i'm not entirely sure how all of it works, especially since it doesn't..... ajax? wha?   but you can find the whole explanation here: http://exceptionallyexceptionalexceptions.blogspot.com/2011/12/convert-html-form-to-json.html */
$( "form" ).submit(function( event ) {
  alert( "Handler for .submit() called." );

});


$.fn.formToJSON = function() {
    alert("stringify called");
                var objectGraph = {};

                function add(objectGraph, name, value) {
                    if(name.length == 1) {
                        //if the array is now one element long, we're done
                        objectGraph[name[0]] = value;
                    }
                    else {
                        //else we've still got more than a single element of depth
                        if(objectGraph[name[0]] == null) {
                            //create the node if it doesn't yet exist
                            objectGraph[name[0]] = {};
                        }
                    //recurse, chopping off the first array element
                        add(objectGraph[name[0]], name.slice(1), value);
                    }
                };
                //loop through all of the input/textarea elements of the form
                //this.find('input, textarea').each(function() {
                $(this).children('input, textarea').each(function() {
                    //ignore the submit button
                    if($(this).attr('name') != 'submit') {
                        //split the dot notated names into arrays and pass along with the value
                        add(objectGraph, $(this).attr('name').split('.'), $(this).val());
                    }
                });
                return JSON.stringify(objectGraph);
            };

            $.ajaxSetup({
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });

            $(document).ready(function(){
                $('#input').click(function() {
                    var send = $("#survey").formToJSON();
                    $.ajax({
                        url: "https://github.com/TheIronYard--Orlando/:FEE--2015--SPRING/issues/:230/comments",
                        type: "POST",
                        data: send,
                        error: function(xhr, error) {
                            alert('Error!  Status = ' + xhr.status + ' Message = ' + error);
                        },
                        success: function(data) {
                            //have you service return the created object
                            var items = [];
                            items.push(data.id);
                            items.push(data.first_name);
                            items.push(data.last_name);
                            items.push(data.email);
                            items.push(data.country);
                            items.push(data.bio);
                            items.push(data.phone);
                            items.push(data.affiliations);
                            items.push(data.occupation);
                            items.push(data.pet_name);
                            items.push(data.food);
                            items.push(data.skills);
                            items.push(data.beer);
                            items.push(data.power);
                            items.push(data.weapon);
                            items.push(data.comments);
                            //etc
                            $('#submit').html(items.join(''));
                        }
                    });
                    return false;
                });
            });
