function userInput(num){
    var result = document.getElementById('result');
    result.value+=num;
}

function reset(){
    var result = document.getElementById('result');
    result.value=''
}

function getResult(){
    var result = document.getElementById('result');
    result.value+= "=" + eval(result.value)
    //storing last activity in Local Storage
    if(typeof(Storage)!=="undefined"){
        localStorage.setItem("Result",result.value)
    }
    console.log(result.value)   
    }
