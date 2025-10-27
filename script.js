
function handleClick(index) {
    let btnElement=document.getElementById("btn-"+index)
    let val=btnElement.innerHTML


    let inputEl=document.querySelector("input")
    if (val==="AC") {
        inputEl.value=""
    }
    else if(val==="Del"){
        inputEl.value=inputEl.value.slice(0,-1)
    }
    else if(val==="="){
        inputEl.value=eval(inputEl.value);
    }
    else{
        inputEl.value=inputEl.value+val;
    }
}