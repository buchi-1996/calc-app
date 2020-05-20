class UI {
    constructor(){
        this.btn = document.querySelectorAll('.my-btn');
        this.output1 = document.querySelector('.output-1');
        this.output2 = document.querySelector('.output-2');
        this.clearAllInput = document.getElementById('clear-all');
        this.clearOne = document.getElementById('clear');
        this.equals = document.getElementById('equals');
        this.percentage = document.getElementById('percent');

    }

    addNumToDisplay(){
        // let self = this;
        this.btn.forEach((singleBtn) =>{
            singleBtn.addEventListener('click', () =>{
                if(singleBtn.hasAttribute('data-num')){
                    let content = singleBtn.getAttribute('data-num');
                    let newOutput =  this.output1.textContent += content;
                     this.output2.textContent = eval(newOutput)
                }
            })
        })
    }

    clearAll(){
        this.clearAllInput.addEventListener('click', () => {
            this.output1.textContent = '';
            this.output2.textContent = '';
            this.output1.style.fontSize = '60px';

        })
    }

    backSpace(){
        this.clearOne.addEventListener('click', () => {
        let content =  this.output1.textContent;
        let arr = content.split('');
        console.log(content);
        arr.pop();
        let newOutput = this.output1.textContent = arr.join('');
        this.output2.textContent = eval(newOutput)
        this.output1.style.fontSize = '60px';
        
      })
    }

    calculatePercent(){
        this.percentage.addEventListener('click', (e) =>{
            let percent = '%';
          if(this.output1.textContent += percent){
              let result = parseInt(this.output1.textContent) / 100;
              this.output2.textContent = result;
          }
        })
        
    }

    equate(){
        this.equals.addEventListener('click', ()=> {
            this.output1.textContent = this.output2.textContent;
            if(this.output1.textContent.length >= 20){
                this.output1.style.fontSize = '30px';
            }
            else if(this.output1.textContent.length >= 15){
                this.output1.style.fontSize = '37px';

            }

            else if(this.output1.textContent.length >= 12){
                this.output1.style.fontSize = '47px';

            }
            else{
                this.output1.style.fontSize = '60px';

            }
            this.output2.textContent = '';
        })
    }
}
let ui = new UI();
ui.addNumToDisplay();
ui.clearAll();
ui.backSpace();
ui.calculatePercent();
ui.equate();