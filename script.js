const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen') 
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board =  document.querySelector('#board')
const audio = new Audio('./audio/00171.mp3')
audio.volume = 0.3;


let time = 0 
let score = 0
// let colors = ['red','blue','gray','brown','gold','pink','purple']

startBtn.addEventListener('click',(event) =>{ 
    event.preventDefault()
    screens[0].classList.add('up')
    
    
})
timeList.addEventListener('click',(event) => {
if(event.target.classList.contains('time-btn')){
    time=parseInt(event.target.getAttribute('data-time'))

}
    event.preventDefault()
    screens[1].classList.add('up')
    audio.play()
    startGame()
})

 let decriseTime = () => {
    if(time===0){
        
        finishGame()
    }else{
        let current = --time
        if(current < 10){
            current = `0${current}`
        }
        setTime(current)
     }
 }
  
 function setTime (value) {
    timeEl.innerHTML = `00:${value}`
  }

function startGame() {
    setInterval(() => {
        decriseTime()
        
    },1000);
    setTime(time) 
    createRandomCircle()
} 

// function createRandomCircle() {
//     const circle = document.createElement('div')
//     const size = getRandomNumber(10,60)
//     const {width,height} = board.getBoundingClientRect()
//     const x = getRandomNumber(0,width - size)
//     const y = getRandomNumber(0,height - size)
//     circle.classList.add('circle')
//     circle.style.width = `${size}px`
//     circle.style.height = `${size}px`
//     circle.style.top = `${y}px`
//     circle.style.left = `${x}px`
//     circle.style.background = `${colors[Math.round(Math.random*colors.length)]}`
//     board.append(circle)
    
// }
board.addEventListener('click', (event) =>{
    if(event.target.classList.contains('btn__circle1')){
        event.target.remove()
        score++
        // createRandomCircle()
    }
    
})


function winTheGame(){
    const kill = () => {
        let circle = document.querySelector('#btn__circle')
     if(circle){
        circle.click()

        }
     setInterval(kill,40)
    }
}



function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1 class="score">score:<span class="primary">${score}</span></h1>`
}



//   function getRandomNumber(min,max) {
//     return Math.round(Math.random()*(max - min) + min)
//   }

  document.querySelectorAll('#btn__circle').addEventListener('click' ,'.btn__circle1')




// function evenOrOdd(number) {
//     if(number%2===0){
//          return 'Even'
//     }else{number%3===0}
//       return 'Odd'
//     }
//      console.log(evenOrOdd(4));

