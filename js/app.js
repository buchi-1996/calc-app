class UI {
    constructor(){
        this.btn = document.querySelectorAll('.my-btn');
        this.output1 = document.querySelector('.output-1');
        this.output2 = document.querySelector('.output-2');
        this.clearAllInput = document.getElementById('clear-all');
        this.clearOne = document.getElementById('clear');
        this.equals = document.getElementById('equals');
        this.percentage = document.getElementById('percent');
        this.divide = '\xF7';
        this.multiply = '\xD7';
        this.minus = '\u2212';
        this.plus = '\x2b';
    }

    

    addText(item){
        if(item.hasAttribute('data-action')){
            let data = item.dataset.action;
            this.output1.textContent += data;
        }

    }

    clearDisplay(item){
        if(item.classList.contains('clear-all')){
            this.output1.textContent = '';
            this.output2.textContent = '';
        }
    }

    backSpace(item){
        if(item.classList.contains('clear')){
            let text = this.output1.textContent;
           let arr = text.split('');
            arr.pop();
            this.output1.textContent = arr.join('');
        }
    }

    calculate(){
        let arr = this.output1.textContent;
        if(arr.includes(this.divide)){
            let result = arr.split(this.divide).map(x => +x).reduce((a, b) => a / b);
            this.output1.textContent = result;
            this.output2.textContent = result;    
        }

        else if(arr.includes(this.multiply)){
            let result = arr.split(this.multiply).map(x => +x).reduce((a, b) => a * b);
            this.output1.textContent = result;
            this.output2.textContent = result; 
        }
        
        else if(arr.includes(this.minus)){
            let result = arr.split(this.minus).map(x => +x).reduce((a, b) => a - b);
            this.output1.textContent = result;
            this.output2.textContent = result; 
        }

        else if(arr.includes(this.plus)){
            let result = arr.split(this.plus).map(x => +x).reduce((a, b) => a + b);
            this.output1.textContent = result;
            this.output2.textContent = result;
        }
    }

}  

   
document.querySelector('.calc-btn').addEventListener('click', (e) => {
    let ui = new UI();
    ui.addText(e.target);
    ui.clearDisplay(e.target);
    ui.backSpace(e.target);
   
    
})


document.getElementById('equals').addEventListener('click', (e) => {
    let ui = new UI();
    ui.calculate();
})

