// should refactor this using Date.now()

var hours = 0;
var minutes = 0;
var seconds = 0;

setInterval(() => {
    hours ++;
    return hours;
}, 3.6e+6);

setInterval(()=>{
    minutes++;
    if (minutes >= 60){
        minutes = 0;
    }
    return minutes;
}, 60000);

setInterval(()=>{
    seconds ++;
    if(seconds >= 60){
        seconds = 0;
    }
    return seconds;
}, 1000);

export default function(){
    return `<div id="timer">Played for ${hours}:${minutes}:${seconds}</div>`;
}