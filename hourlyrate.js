hours = document.getElementById("myinput");
payValue = document.getElementById("value");
hours.addEventListener("change", changeValue);
thebutton = document.getElementById("thebutton");
thebutton.addEventListener("click", onButtonClick);

function changeValue() {
    newInput = hours.value;
    payValue.innerHTML = newInput * 30;
}

function onButtonClick() {  
    newInput = hours.value;
    payValue.innerHTML = newInput * 30;
}
/*Rob, I need help trying to get this to work, can you check it and get back to me when you do the grade for this page.*/

