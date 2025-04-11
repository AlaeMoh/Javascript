



// let randomMove= Math.random();
// let computerMove='';
// if( randomMove >=0 &&  randomMove < 1/3){
//     computerMove= `<i class="fa-solid fa-hand-fist"></i> `;
// } else if( randomMove >=1/3 &&  randomMove < 2/3){
//      computerMove= `<i class="fa-solid fa-hand"></i>`;
// }else if(randomMove >=2/3 && randomMove <1 ){
//      computerMove= `<i class="fa-solid fa-hand-peace"></i>`;
// }
let computerMove='';
function pcMove(){
    let randomMove= Math.random();
    if( randomMove >=0 &&  randomMove < 1/3){
        computerMove= `<i class="fa-solid fa-hand-fist"></i> `;
    } else if( randomMove >=1/3 &&  randomMove < 2/3){
        computerMove= `<i class="fa-solid fa-hand"></i>`;
    }else if(randomMove >=2/3 && randomMove <1 ){
        computerMove= `<i class="fa-solid fa-hand-peace"></i>`;
    }
}


let result='';
function button1(){
    if( computerMove === `<i class="fa-solid fa-hand-fist"></i>`){
       result= 'It is a tie';
    }else if( computerMove === `<i class="fa-solid fa-hand"></i>`){
      result= 'You Loooose';
    } else if( computerMove === `<i class="fa-solid fa-hand-peace"></i>`){
        result='Check Who is the WINNNEER';
      
    }
    document.querySelector('.js-note').innerHTML=`You  <i class="fa-solid fa-hand-fist"></i>. The computer ${computerMove}`;
    document.querySelector('.js-result').innerHTML=`${result}`;


    }

    
    function button2(){
        if( computerMove === `<i class="fa-solid fa-hand-fist"></i>`){
            result= 'Check Who is the WINNNEER';
         }else if( computerMove === `<i class="fa-solid fa-hand"></i>`){
           result= 'It is a tie';
         } else if( computerMove === `<i class="fa-solid fa-hand-peace"></i>`){
             result='You Loooose';
         }        
        document.querySelector('.js-note').innerHTML=`You  <i class="fa-solid fa-hand"></i>. The computer  ${computerMove}`;

        }

    
    function button3(){
        if( computerMove === `<i class="fa-solid fa-hand-fist"></i>`){
            result= 'You Loooose';
         }else if( computerMove === `<i class="fa-solid fa-hand"></i>`){
           result=  'Check Who is the WINNNEER';
         } else if( computerMove === `<i class="fa-solid fa-hand-peace"></i>`){
             result='It is a tie';
         }     
         document.querySelector('.js-note').innerHTML=`You  <i class="fa-solid fa-hand-peace"></i>. The computer  ${computerMove}`;

        }

        let scores={
            wins: 0,
            loses: 0,
            ties: 0,

        }

        let box="";
        
    function score(){

        if(result === 'Check Who is the WINNNEER'){
            scores.wins+=1;
        } else if (result === 'You Loooose'){
            scores.loses+=1;
        }else if(result=='It is a tie'){
            scores.ties+=1;

        }

        document.querySelector('.js-score').innerHTML=`wins:${scores.wins}, loses:  ${scores.loses}, Ties:  ${scores.ties}`;
        localStorage.setItem('score', JSON.stringify(scores));

    }

    
    function reset(){
        scores.wins=0;
        scores.ties=0;
        scores.loses=0;
        localStorage.removeItem('score');
    }
    
  
