function append(value){
    document.getElementById("screen").value +=value;
}
function clearScreen() {
    document.getElementById("screen").value = "";
}

function total(){
    document.getElementById("screen").value =eval( document.getElementById("screen").value );
}