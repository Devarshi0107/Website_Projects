let input=document.getElementById('input');
let buttons=document.querySelectorAll('.but');
let string ="";
let arr=Array.from(buttons);
let memory=0;
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.id=='im'){
            handleBackspace();
        }        
        else if(e.target.innerHTML=='√'){
            calculateSquareRoot();
        }
        else if(e.target.innerHTML=='%'){
            calculatePercentage();
        }
        else{
            if(e.target.innerHTML=='+/-'){

            }
            else{
                string += e. target.innerHTML;
            document.querySelector('input').value=string;
            }          

        }
    })
})
function calculatePercentage() {
    // if (string.includes("%")) {
    //     let numbers = string.split("%");
    //     if (numbers.length == 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
    //         let result = parseFloat(numbers[0]) / 100 * parseFloat(numbers[1]);
    //         document.querySelector('input').value= result.toString();
    //         string = result.toString();
    //     }
    // }
}
function calculateSquareRoot() {
    if (!isNaN(string) && string !== "") {
        let result = Math.sqrt(parseFloat(string));
        document.querySelector('input').value =  string;
        string = result.toString();
    }
}
function handleBackspace() {
    if (string.length > 0) {
        string = string.slice(0, -1);
        document.querySelector('input').value=string;

    }
}
function toggleSign() {
            if (string !== "" && !isNaN(string)) {
                string = (-1 * parseFloat(string)).toString();
                document.querySelector('input').value=string;

            }
        }