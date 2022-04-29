


const screen = document.getElementById('screen')



let digit=0
let operator=0
function calcin(value){
    if(value === '+' ||  value === '-'  || value === '*' || value === "/" ){
        operator = value
    }
        

    console.log(value)
    
    if(value === '='){
        let ans = eval(digit)
        
        screen.textContent=eval(digit)
    }
    

    else if(value === 'DEL' ){
        digit = digit.substring(0,digit.length - 1)
        screen.textContent=digit
    }

    else if(value === 'Reset'){
        screen.textContent=' '

    }
    
    
    else{
        digit=digit.toString()+value
        screen.textContent=digit

    }
    
    
    
    

}

