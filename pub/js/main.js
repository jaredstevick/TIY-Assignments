////variables

var d = new Date()
, h
, m
, s
, hcolor
, mcolor
, scolor
, colorTime
//
////sorry moment.js, maybe next time
//
function showTime() {
    d.setSeconds(d.getSeconds() + 1);

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    //map the time to hex values
    hcolor = (Math.floor(h * 255/23)).toString(16);
    mcolor = (Math.floor(m * 255/59)).toString(16);
    scolor = (Math.floor(s * 255/59)).toString(16);

    //need more zero to keep six digits!
    if(h <= 9) {
        h = '0' + h;
    }
    if(m <= 9) {
        m = '0' + m;
    }
    if(s <= 9) {
        s = '0' + s;
    }

    //same deal for these values
    if(hcolor.length < 2) {
        hcolor = '0' + hcolor;
    }
    if(mcolor.length < 2) {
        mcolor = '0' + mcolor;
    }
    if(scolor.length < 2) {
        scolor = '0' + scolor;
    }

    //construct the color
    colorTime = "#" + hcolor + mcolor + scolor;

    //set the background color
    document.body.style.background = colorTime;

//    //fill in the time
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    document.getElementById('color').innerHTML = hcolor + mcolor + scolor;

};

    //set the interval for refresh
    setInterval(showTime, 1000);

//run the function
showTime();
