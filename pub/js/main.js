//where do i even start...
//maybe with just displaying the time
//lets display the current time
var d, h, m, s, colorTime;
//sorry moment.js, maybe next time

function showTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

//  need more zero to keep six digits!
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;

    colorTime = "#" + h + m + s;

    document.body.style.background = colorTime;

    document.getElementById("clock").innerHTML = colorTime;


    setInterval(showTime, 1000);
}


showTime();
