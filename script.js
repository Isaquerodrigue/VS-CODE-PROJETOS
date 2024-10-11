const result = document.querySelector('.result')
const youscore = document.querySelector('#hs')
const machinescore = document.querySelector('#ms')

let humamscore = 0
let machinesscore = 0

const playhuman = (humanChoice) => {

    playTheGame(humanChoice, playmachine())



}

const playmachine = () => {
    const options = ['papel', 'pedra', 'tesoura']

    const randomNunber = Math.floor(Math.random() * 3)

    return options[randomNunber]
}

const playTheGame = (humam, machine) => {

    console.log('humano:' + humam, ' maquina' + machine)

    if (humam === machine) {
        result.innerHTML = 'EMPATE MEU NOBRE'
    } else if (
        (humam === 'pedra' && machine === 'tesoura') ||
        (humam === 'papel' && machine === 'pedra') ||
        (humam === 'tesoura' && machine === 'papel')) {
            humamscore++
            youscore.innerHTML = humamscore
        result.innerHTML = 'DUAS PALAVRAS PARA VOCÊ PARA-BÉNS'
    } else {
        machinesscore++
        machinescore.innerHTML = machinesscore
        result.innerHTML = 'VÁ PARA PRACHA SEU PERDEDOR!!!'
    }
}