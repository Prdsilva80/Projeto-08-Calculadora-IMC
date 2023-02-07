import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = function() {
  AlertError.close()
}

inputHeight.oninput = function() {
  AlertError.close()
}
form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
    displayResultMessenger(result)
}

function displayResultMessenger(result) {
  const messege = `Seu IMC é de ${result}`

  Modal.messege.innerText = messege
  Modal.open()
}