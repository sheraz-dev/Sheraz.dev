function getButtons(n){
    document.getElementById("results").value +=n
}

function clearButtons(n){
    document.getElementById("results").value = "";
}

function getCalculations(n){
    let result = document.getElementById("results").value;
    document.getElementById("results").value = eval(result);
}