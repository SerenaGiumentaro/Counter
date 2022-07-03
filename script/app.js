// variables setting
const main = document.querySelector('main')
const display = document.querySelector('.display')
const buttonsContainer = document.querySelector('.buttons-container')
const footer = document.querySelector('footer')
const trash = document.querySelector('.trash')
let dateNow = new Date()
let currentNumber = 0

// function for create element 
function setUpElement(typeElem,classElem,content,parentToAppend){
    let nameElem = document.createElement(typeElem)
    nameElem.className = classElem
    nameElem.innerHTML = content
    parentToAppend.append(nameElem)
    return nameElem
}

// creating element 
const buttonPlus = setUpElement('button','button-plus','+',buttonsContainer);
const buttonLess = setUpElement('button','button-less','-',buttonsContainer)
const buttonLessTen = setUpElement('button','button-less-ten','-10',buttonsContainer)
const buttonPlusTen = setUpElement('button','button-plus-ten','+10',buttonsContainer)
const resetButton = setUpElement('button','reset','Reset',buttonsContainer)
const memoButton = setUpElement('button','memo','M',buttonsContainer)
const counterDisplay = setUpElement('span','counter',currentNumber,display)


// functions

//decrement by one
const lessOne = () => {    
    currentNumber -= 1
    counterDisplay.innerHTML = currentNumber
}

//increment by one
const plusOne = () => {
    currentNumber += 1
    counterDisplay.innerHTML = currentNumber
}

//increment by ten
const plusTen = () => {
    currentNumber += 10
    counterDisplay.innerHTML = currentNumber
}

//decrement by ten
const lessTen = () => {
    currentNumber -= 10
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
    
    switch (e.code){
        case (e.shiftKey && 'ArrowLeft'):
            lessTen()
            break

        case 'ArrowLeft':
            lessOne()
            break
        
        case (e.shiftKey &&'ArrowRight'):
            plusTen()
            break

        case 'ArrowRight':
            plusOne()
            break

        case 'Backspace':
            resetAll()
            break

        case 'KeyM':
            storesCounter()
            break
    }

})
