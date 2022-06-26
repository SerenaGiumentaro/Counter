// variables setting
const main = document.querySelector('main')
const display = document.querySelector('.display')
const buttonsContainer = document.querySelector('.buttons-container')
const footer = document.querySelector('footer')
const trash = document.querySelector('.trash')
const buttonPlus = document.createElement('button')
const buttonLess = document.createElement('button')
const buttonPlusTen = document.createElement('button')
const buttonLessTen = document.createElement('button')
const counterDisplay = document.createElement('span')
const resetButton = document.createElement('button')
const memoButton = document.createElement('button')
let dateNow = new Date()
let currentNumber = 0

// adding class elements
buttonPlus.className = 'button-plus'
buttonLess.className = 'button-less'
buttonLessTen.className = 'button-less-ten'
buttonPlusTen.className = 'button-plus-ten'
counterDisplay.className = 'counter'
resetButton.className = 'reset'
memoButton.className = 'memo'


// append elements to document
display.append(counterDisplay)
buttonsContainer.append(buttonLess)
buttonsContainer.append(buttonPlus)
buttonsContainer.append(buttonLessTen)
buttonsContainer.append(buttonPlusTen)
buttonsContainer.append(resetButton)
buttonsContainer.append(memoButton)


// adding contents
counterDisplay.innerHTML = currentNumber
buttonLess.innerHTML = '-'
buttonPlus.innerHTML = '+'
buttonLessTen.innerHTML = '- 10'
buttonPlusTen.innerHTML = '+ 10'
resetButton.innerHTML = 'Reset'
memoButton.innerHTML = 'M'


// functions

//decrement by one
const lessOne = () => {    
    currentNumber = --currentNumber
    counterDisplay.innerHTML = currentNumber
}

//increment by one
const plusOne = () => {
    currentNumber = ++currentNumber
    counterDisplay.innerHTML = currentNumber
}

//increment by ten
const plusTen = () => {
    currentNumber = currentNumber + 10
    counterDisplay.innerHTML = currentNumber
}

//decrement by ten
const lessTen = () => {
    currentNumber = currentNumber -10
    counterDisplay.innerHTML = currentNumber
}

//reset the counter
const resetAll = () => {
    currentNumber = 0
    counterDisplay.innerHTML = currentNumber
}

//stores the counter value
const storesCounter = () => {
    const savedCount = document.createElement('div')
    const newTrash = trash.cloneNode(true)
    newTrash.removeAttribute('hidden')
    savedCount.className = 'saved'
    savedCount.textContent =  dateNow.toLocaleString() + ' ➡ '+currentNumber
    footer.append(savedCount)
    savedCount.append(newTrash)

}

// buttons events
buttonLess.addEventListener('click', (lessOne))

buttonPlus.addEventListener('click' ,(plusOne))

buttonPlusTen.addEventListener('click', (plusTen))

buttonLessTen.addEventListener('click', (lessTen))

resetButton.addEventListener('click', (resetAll))

memoButton.addEventListener('click', (storesCounter))

footer.addEventListener('click', (e) => {
    let target = e.target
    if (target.className == 'trash'  ){
        target.parentNode.remove()
    }
})

// keyboard events
document.addEventListener('keydown', (e) => {

    if (e.code == 'ArrowLeft' && e.shiftKey){
        lessTen()
    }else if (e.code ==  'ArrowLeft'){
        lessOne()        
    }

    if (e.code == 'ArrowRight' && e.shiftKey){
        plusTen()
    }else if (e.code == 'ArrowRight'){
        plusOne()
    }

    if(e.code == 'Backspace'){
        resetAll()
    }  

    if(e.code == 'KeyM'){
        storesCounter()
    }
})
