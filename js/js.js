import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber} from "./utils.js"

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value; 
    const height = inputHeight.value;

    const weightOrHeightIsNotNumber = notANumber(weight) || notANumber(height)
    
    if(weightOrHeightIsNotNumber){
      AlertError.open();
      return;;
    }

    AlertError.close();

      const result = calculateIMC(weight,height);
      displayResultMessage()
    };
    
    
    function displayResultMessage(result) {
      const message = `Seu IMC é de ${result}`
        
      Modal.message.innerText = message;
      Modal.open()
    }
 