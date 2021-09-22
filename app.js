var backspace = document.querySelector("#backspace")
backspace.value="⌫"
var perc = document.querySelector("#perc")
perc.value="%"
var clear = document.querySelector("#clear")
clear.value="c"
var divide = document.querySelector("#divide")
divide.value="/"
var seven = document.querySelector("#seven")
seven.value=7
var eight = document.querySelector("#eight")
eight.value=8
var nine = document.querySelector("#nine")
nine.value=9
var multiply = document.querySelector("#multiply")
multiply.value="*"
var six = document.querySelector("#six")
six.value=6
var five = document.querySelector("#five")
five.value=5;
var four = document.querySelector("#four")
four.value=4
var subtract = document.querySelector("#subtract")
subtract.value="-"
var one = document.querySelector("#one")
one.value=1
var two = document.querySelector("#two")
two.value=2
var three = document.querySelector("#three")
three.value=3
var add = document.querySelector("#add")
add.value="+"
var doubleZero = document.querySelector("#double-zero")
doubleZero.value="00"
var zero = document.querySelector("#zero")
zero.value="0"
var decimal = document.querySelector("#decimal")
decimal.value="."
var equals = document.querySelector("#equals")
equals.value="="

var result = document.querySelector("#result-bar")

//operations

var number1="";
var number2="";
var operation=""
var ans;

one.addEventListener("click" , ()=>setNumber(one.value))
two.addEventListener("click" , ()=>setNumber(two.value))
three.addEventListener("click" , ()=>setNumber(three.value))
four.addEventListener("click" , ()=>setNumber(four.value))
five.addEventListener("click" , ()=>setNumber(five.value))
six.addEventListener("click" , ()=>setNumber(six.value))
seven.addEventListener("click" , ()=>setNumber(seven.value))
eight.addEventListener("click" , ()=>setNumber(eight.value))
nine.addEventListener("click" , ()=>setNumber(nine.value))
zero.addEventListener("click" , ()=>setNumber(zero.value))
doubleZero.addEventListener("click" , ()=>setNumber(doubleZero.value))
decimal.addEventListener("click",()=>setNumber(decimal.value))

add.addEventListener("click",()=>setOperation(add.value))
subtract.addEventListener("click",()=>setOperation(subtract.value))
divide.addEventListener("click",()=>setOperation(divide.value))
multiply.addEventListener("click",()=>setOperation(multiply.value))
perc.addEventListener("click",()=>setOperation(perc.value))

backspace.addEventListener("click",()=>setOperation(backspace.value))

clear.addEventListener("click",()=>setOperation(clear.value))

equals.addEventListener("click", answer)


function setOperation(operator)
{
    operation = operator;
    switch(operator)
    {
        case backspace.value : 
             
            result.innerText = result.innerText.replace(result.innerText[result.innerText.length-1],'')
            if(number2 !="")
            {
                number2 = number2.replace(number2[number2.length-1],'')
            }
            else{
                number1 = number1.replace(number1[number1.length-1],'')

            }
            operation=""

        break;

        case clear.value:
            number1="";
            number2="";
            operation="";
            result.innerText = "";
            operation=""
        break;

        case add.value:
                
                result.innerText +=operation 
        break;

        case subtract.value:
                
                result.innerText +=" "+operation 
        break;
        
        case divide.value:
                
                result.innerText +=" "+operation 
        break;
        case perc.value:
                
                result.innerText +=" "+operation 
        break;
        case multiply.value:
                
                result.innerText +=" "+operation 
        break;
    }
}


function setNumber(num)
{
    if(operation != "" )
    {
        number2+=num;
        result.innerText += number2
        
    }
    else{
    number1+=num;
    result.innerText = number1
    operation=""
    }
    
}

function answer()
{
    switch(operation)
    {
        case "+": 
            result.innerText = Number(number1) + Number(number2)
            number1=result.innerText
            number2=""
            operation=""
        break;
        
        case "-": 
            result.innerText = Number(number1) - Number(number2)
            number1=result.innerText
            number2=""
            operation=""
        break;

        case "*": 
            result.innerText = Number(number1) * Number(number2)
            number1=result.innerText
            number2=""
            operation=""
        break;
        case "/": 
            result.innerText = Number(number1) / Number(number2)
            number1=result.innerText
            number2=""
            operation=""
        break;
        case "%": 
            result.innerText = Number(number1)*Number(number2)*0.01
            number1=result.innerText
            number2=""
            operation=""
        break;
    }
}