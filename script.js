const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

btnStart.addEventListener('click',()=>{
  
  btnStart.classList.add('start-active');
  btnStop.classList.remove('stop-active');

setTimer=setInterval(()=>{
  millisec++
  
  if(millisec==100){
    seconds++;
    millisec=0
    
  } else if(seconds==60){
    minutes++;
    seconds=0;
  } else if(minutes==60){
    hour++;
    minutes=0;
  }
  updateDisplay()
},10)

})
btnStop.addEventListener('click',()=>{
btnStop.classList.add('stop-active')
btnStart.classList.remove('start-active')

 clearInterval(setTimer)
})
btnReset.addEventListener('click',()=>{
  btnStop.classList.remove('stop-active');
  btnStart.classList.remove('start-active');
  hour=minutes=seconds=millisec=0;
  clearInterval(setTimer);
  updateDisplay()
})

let hour=minutes=seconds=millisec=0,setTimer;

function updateDisplay(){
  phour=hour<10?'0'+hour:hour
  pminutes=minutes<10?'0'+minutes:minutes;
  pseconds=seconds<10?'0'+seconds:seconds;
  pmillisec=millisec<10?'0'+millisec:millisec;
  document.querySelector('.hour').innerText=phour;
  document.querySelector('.minutes').innerText=pminutes;
  document.querySelector('.seconds').innerText=pseconds;
  document.querySelector('.millisec').innerText=pmillisec;
}