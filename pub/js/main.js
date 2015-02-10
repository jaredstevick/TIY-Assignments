
////variables for chopping up the time
x = 1;
var d, h, m, s, hhex, mhex, shex, colorTime;
//
////sorry moment.js, maybe next time
//
function showTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
//
    //map the time to hex values
    hhex = (Math.floor(h * 255/23)).toString(16);
    mhex = (Math.floor(m * 255/59)).toString(16);
    shex = (Math.floor(s * 255/59)).toString(16);

    //  need more zero to keep six digits!
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;

    //same deal for these values
    if(hhex.length < 2) hhex = '0' + hhex;
    if(mhex.length < 2) mhex = '0' + mhex;
    if(shex.length < 2) shex = '0' + shex;

//    //how to construct the color
    colorTime = "#" + hhex + mhex + shex;
//
//    //set the background color
    document.body.style.background = colorTime;
//
//    //fill in the time
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;


//    //set the interval for refresh
    setInterval(showTime, 1000);
};
//
////run the function
showTime();
