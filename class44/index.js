function showHour() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', { hour12: false });
}

const timer = setInterval(() => console.log(showHour()), 1000);


const timer2 = setInterval(() => console.log('Acorda vagabundo!'), 5000);

setTimeout(() => {
    clearInterval(timer);
    clearInterval(timer2);
}, 30000);