class Calculator{
    
  constructor(previous , current) {
    this.previous  = previous ;
    this.current = current ;
    this.clear();
  }

  clear(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined

  }

  delete(){

  }
  
  appendNumber(number){

    this.currentOperand = this.currentOperand.toString()+number.toString()

  }

  update(){
     
      this.current.innerText = this.currentOperand
  }

  chooseOperation(){

  }

  compute(){



  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear-all]')
const previous = document.querySelector('[data-previous]')
const current = document.querySelector('[data-current]')

const calculator = new Calculator( previous, current) 

numberButtons.forEach(button => {

    button.addEventListener('click', () => {
    console.log(button.innerText);
       calculator.appendNumber(button.innerText);
       calculator.update();

      
    })
  })
  