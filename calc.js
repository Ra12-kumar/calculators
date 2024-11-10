let inputt=document.getElementsByClassName("input")[0].querySelector("input");

function appendToDisplay(value){
    if(inputt.value==='0'){
        inputt.value=value;
    }
    else{
        inputt.value +=value;
    }
}
function clearDisplay(){
    inputt.value='0';
}
function deleteLast(){
 let currElement=inputt.value;
 inputt.value=currElement>1?currElement.slice(0,-1):"0";
}

function calculateResult(){
    try{
        inputt.value=eval(inputt.value);
    }
    catch(error){
        inputt.value="error";
    }
}
console.log("hello")