


let randomMove= Math.random();
let computerMove='';
if( randomMove >=0 &&  randomMove < 1/3){
    computerMove= "Rock";
} else if( randomMove >=1/3 &&  randomMove < 2/3){
     computerMove= "Paper";
}else if(randomMove >=2/3 && randomMove <1 ){
     computerMove= "Scissors";

}

console.log(computerMove);

let result='';
function button1(){
    if( computerMove === "Rock"){
       result= 'It is a tie';
    }else if( computerMove === "Paper"){
      result= 'You Loooose';
    } else if( computerMove === "Scissors"){
        result='Check Who is the WINNNEER';
    }
    alert(`You picked Rock. The computer picked ${computerMove} .${result}`)

    }

    
    function button2(){
        if( computerMove === "Rock"){
            result= 'Check Who is the WINNNEER';
         }else if( computerMove === "Paper"){
           result= 'It is a tie';
         } else if( computerMove === "Scissors"){
             result='You Loooose';
         }        
         alert(`You picked Paper. The computer picked ${computerMove} .${result}`)

        }

    
    function button3(){
        if( computerMove === "Rock"){
            result= 'You Loooose';
         }else if( computerMove === "Paper"){
           result=  'Check Who is the WINNNEER';
         } else if( computerMove === "Scissors"){
             result='It is a tie';
         }     
         alert(`You picked Scissors. The computer picked ${computerMove} .${result}`)

        }
        
        
            
    