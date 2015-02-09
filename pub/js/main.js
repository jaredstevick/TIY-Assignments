//where do i even start...
//maybe with just displaying the time


function showTime() {

document.getElementById("clock").innerHTML = Date();
setInterval(showTime, 1000);

}

showTime();
