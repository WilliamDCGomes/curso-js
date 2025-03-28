let timer = null;
//let timer2 = null;
let timeStamp = (new Date(1970, 0, 1).getTime() + (1000 * 60 * 45));
let focused = true;

const startRoutine = function() {
    timer = setInterval(() => initializeRoutine(), 1000);
    //timer2 = setInterval(() => document.querySelector('.message').innerText = focused ? 'Foco vagabundo, foco!!' : 'Relaxa vagabundo!', 5000);
    document.querySelector('.message').innerText = '';
}

const pauseRoutine = function() {
    clearInterval(timer);
    //clearInterval(timer2);
    document.querySelector('.message').innerText = 'Pomodoro pausado';
}

const resetRoutine = function() {
    clearInterval(timer);
    //clearInterval(timer2);
    updateHour(0, 0, 0);
    timeStamp = (new Date(1970, 0, 1).getTime() + ((1000 * 60 * 45)) + 1000);
    document.querySelector('.message').innerText = '';
}

const initializeRoutine = function() {
    try {
        var hour = getHour();

        if(timeStamp <= 10800000) {
            focused = !focused;
            timeStamp = (new Date(1970, 0, 1).getTime() + ((1000 * 60 * (focused ? 45 : 15)) + 1000));
            hour = getHour();
        }
        document.querySelector('.message').innerText = focused ? 'Foco vagabundo, foco!!' : 'Relaxa vagabundo!';

        updateHour(hour[0], hour[1], hour[2]);
    }
    catch(e) {
        document.querySelector('.message').innerText = 'Deu ruim mané';
    }
}

const getHour = function () {
    timeStamp -= 1000;
    return new Date(timeStamp).toLocaleTimeString('pt-BR', { hour12: false }).split(':');
}

const updateHour = function (hour, minute, second) {
    document.querySelector('.hour').innerText = hour === 0 ? '00' : hour;
    document.querySelector('.minute').innerText = minute === 0 ? '00' : minute;
    document.querySelector('.second').innerText = second === 0 ? '00' : second;
}

setTimeout(() => {
    clearInterval(timer);
    //clearInterval(timer2);
}, (1000 * 60 * 120));