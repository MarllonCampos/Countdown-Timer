let tempo = JSON.parse(localStorage.getItem('Tempo'))
let frase = tempo.frase 
let hours = tempo.hours 
let minutes = tempo.minutes 
let seconds = tempo.seconds 

const phraseEl = document.querySelector('h1')
const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')
const body = document.querySelector('body')



phraseEl.innerHTML = frase 


const contador = setInterval(mudar,1000)

function mudar(){ 

    if (hours == 0 && minutes == 0 && seconds == 0){
        clearInterval(contador)
        const endInformation = document.createElement('h3')
        endInformation.innerText='Acabou :D'
        body.appendChild(endInformation)


    }

    if(seconds == 0  && minutes != 0 ){
        console.log('entrou segunos');
        seconds=60
        minutes--
    }
    
    if(minutes == 0 && hours != 0){
        console.log('entrou minutos');
        minutes=59
        seconds=60
        hours--

    }
    

    hoursEl.innerHTML = (hours < 10 ? `0${hours}` : hours )+  '<span>Horas</span>'
    minutesEl.innerHTML =  (minutes < 10 ? `0${minutes}` : minutes) + '<span>Minutos</span>'
    secondsEl.innerHTML =  (seconds < 10 ? `0${seconds}`: seconds) + '<span>Segundos</span>'

    

    
    seconds--
}

