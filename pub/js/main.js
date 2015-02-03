//
//(function () {
//
//    var squeezebox = document.querySelector('.squeezebox_toggle');
//    var toggleState = function (elem, one, two) {
//        var elem = document.querySelector(elem);
//        elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
//    };
//
//    squeezebox.onclick = function (e) {
//        toggleState('p', 'closed', 'open');
//        e.preventDefault();
//
//
//    };
//
//})();
_.forEach(document.getElementsByTagName('h3'), function(h3) {
    h3.onclick = function() {
        event.preventDefault();
        if (h3.className = 'open'){
            h3.className = '';
        } else {

        }
        h3.className = 'open';
    }
});


var clickToShow = function() {
        if (this.nextElement.className === 'open'){
            this.nextElementSibling.className = '';
        } else if (this.nextElementSibling.className != 'open') {
            this.nextElementSibling.className = 'open';
        } else {}
  };

  var articleHeadings = document.getElementsByTagName('h3');

 for (var index = 0; index < articleHeadings.length; index++){
         articleHeadings[index].onclick = clickToShow;
 }

 var subArticleHeadings = document.getElementsByTagName('h4');

 for (var index2 = 0; index2 < subArticleHeadings.length; index2++){
         subArticleHeadings[index2].onclick = clickToShow;
 }


