const changeTime = document.querySelector(".mns");
const tempDer = document.querySelector('.text');
const btn = document.querySelectorAll('button');
const cs = document.querySelector('.but')
const me = document.querySelector('.moi')
let timer


function updatecount(time){
    const now = Date.now();
    const then = now + time* 1000;
    tempActuel(then)
   timer = setInterval(() =>{
    if( time > 0){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;  
        time--;
        changeTime.innerHTML = `${minutes}:${seconds}`
        console.log(time)
    }else
    clearInterval(timer)
}, 1000)
}
function tempActuel (time) {
    const currentDate = new Date(time)
    let heur = currentDate.getHours();
    let minute = currentDate.getMinutes();
    tempDer.innerHTML=`You'll be back at ${heur}: ${
        minute < 10 ? "0" : ""
      }${minute}`;
}
btn.forEach((el)=>{
    el.addEventListener("click",()=>{
        clearInterval(timer);
        const name = el.dataset.time-1 
        updatecount(name)
      
    })
})
me.addEventListener('click', e => {
    clearInterval(timer);
    let you = me.value;
   you *=60
   updatecount(you)
})