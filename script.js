function calculate(){
    console.log('lancement calcul...')
    const firstInput= document.getElementById ('firstValue') ;
    const firstValue = parseInt(firstInput.value) ; 
    console.log(firstValue) ; 
    const secondValue = parseInt(document.getElementById('secondValue').value) ;
    console.log(secondValue) ;
   
    const resultElement = document.getElementById('result') ;

    const operator = document.getElementById('operand').value ;
    let result = " "

    if (!isNaN(firstValue) && !isNaN(secondValue)) {
    
        if(operator === '+') {
        result = firstValue + secondValue ;  
    }
         else if (operator === '-'){
        result =firstValue - secondValue ;
    }
        else if(operator === '*'){
        result = firstValue * secondValue ;
    }
        else if(operator === '/'){
        result = firstValue / secondValue ;

    }
        else{
        alert("invalid operator") ; 
    }

    resultElement.innerHTML = result  ; 
    }  
else{
    alert(" Recommence mec ! ") ; 
}

}


const calculateButton = document.querySelector('#calculate-btn') ; 
calculateButton.addEventListener('click' , calculate) ;  

