var h1min = document.getElementById("m");
var h1sec = document.getElementById("s");
var h1msec = document.getElementById("ms");
var min = 0 ;
var sec = 0 ;
var msec = 0 ;
var interval;

function timer(){
   msec++;
   h1msec.innerHTML = msec;
   if (msec >= 100){
       sec++
        h1sec.innerHTML = sec;
        msec = 0;
   } 
   else if(sec >= 60){
       min++;
       h1min.innerHTML = min;
       sec=0;
       msec=0;
   }
} 

function start(){
    interval = setInterval(timer , 10);
 }
function pause(){
    clearInterval(interval);

}
function reset(){
    h1msec.innerHTML = '00';
    h1sec.innerHTML = '00' ;
    h1min.innerHTML = '00' ;
    clearInterval(interval);
}
