
(function () {

    var squeezebox = document.querySelector('.squeezebox_toggle');
    var toggleState = function (elem, one, two) {
        var elem = document.querySelector(elem);
        elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
    };

    squeezebox.onclick = function (e) {
        toggleState('p', 'closed', 'open');
        e.preventDefault();


    };

})();
