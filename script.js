class Calculator{
    
  constructor(previous , current) {
    this.previous  = previous ;
    this.current = current ;
    this.clear();
  }

  clear(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;

  }

  delete(){

    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  
  appendNumber(number){
    if(this.currentOperand.includes('.') && number === '.') return;
    this.currentOperand = this.currentOperand.toString()+number.toString();

  }

  getNumber(number){
      const stringNum = number.toString();
      const integerDigits  = parseFloat(stringNum.split('.')[0]);
      const floatNum = stringNum.split('.')[1];
      let integerDisplay;   
      if (isNaN(integerDigits)) {
        integerDisplay = '';
    }else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      });
    }

    if(floatNum != null){
      return `${integerDisplay}.${floatNum}`;
    }else{
      return `${integerDisplay}`;
    }
    

  }

  update(){
      this.current.innerText = this.getNumber(this.currentOperand);
      
      if(this.operation != null ){
          this.previous.innerText = `${this.previousOperand} ${this.operation}`;
      }else{
        this.previous.innerText = this.previousOperand;
      }
       
  }

  chooseOperation(operation){
      if(this.currentOperand === '') return ;
      if(this.previousOperand !== ''){
          this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';

  }

  compute(){

    let computation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation){
        case '+':
            computation = prev + curr;
            break;
        case '-':
            computation = prev - curr;
            break;
        case '*':
            computation = prev * curr;
            break;
        case '/':
            computation = prev / curr;
            break;
        default: 
         return;    
    }

    this.currentOperand = computation;
    this.previousOperand ='';
    this.operation = undefined;



  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear-all]');
const previous = document.querySelector('[data-previous]');
const current = document.querySelector('[data-current]');

const calculator = new Calculator( previous, current); 

numberButtons.forEach(button => {

    button.addEventListener('click', () => {
    console.log(button.innerText);
       calculator.appendNumber(button.innerText);
       calculator.update();

      
    });
  });


  operationButtons.forEach(button => {
      button.addEventListener('click', ()=>{
          calculator.chooseOperation(button.innerText);
          calculator.update();
      });
  });
  

  equalsButton .addEventListener('click', button => {
      calculator.compute();
      calculator.update();

      });

 
  deleteButton.addEventListener('click', () => {
      calculator.delete();
      calculator.update();
  }) ;

  allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.update();

    });