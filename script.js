let tempo = JSON.parse(localStorage.getItem('Tempo'))
let frase = tempo.frase 
let hours = tempo.hours 
let minutes = tempo.minutes 
let seconds = tempo.seconds 

const phraseEl = document.querySelector('h1')
const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')



phraseEl.innerHTML = frase 


const contador = setInterval(mudar,1000)


function mudar(){
    console.log('interval');
    seconds--
    if (hours == 0 && minutes == 0 && seconds == 0){
        console.log('Entrou');
        clearInterval(contador)
    }

    if(seconds == 0  && minutes != 0 ){
        console.log('entrou');
        minutes--
        seconds=60
    }

    if(minutes == 0 && hours != 0){
        console.log('entrou2');
        hours--
        minutes=60
    }


    hoursEl.innerHTML = (hours < 10 ? `0${hours}` : hours )+  '<span>Horas</span>'
    minutesEl.innerHTML =  (minutes < 10 ? `0${minutes}` : minutes) + '<span>Minutos</span>'
    secondsEl.innerHTML =  (seconds < 10 ? `0${seconds}`: seconds) + '<span>Segundos</span>'
    
}

