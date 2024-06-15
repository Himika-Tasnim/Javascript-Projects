let s=0

//To turn on/off the calculation 
function turnOn() {
    const buttons = document.getElementsByClassName("btn");
    const key = document.getElementById("on")
    // when calculator is off 
    if (s ===0) {
        s = 1
        key.innerText= "OFF";
        key.style.padding = "10px"
        key.style.backgroundColor="rgb(225, 18, 18)"
        Array.from(buttons).forEach(element => {
            if (element.classList.contains('equal-sign')) {
                element.style.backgroundColor = "rgb(26, 145, 69)";
            } 
            else {
                element.style.backgroundColor = "rgb(203, 198, 198)";
            }
            //hover
            element.addEventListener('mouseover', function() {
                if (this.classList.contains('equal-sign')) {
                    this.style.backgroundColor = "green";
                } else {
                    this.style.backgroundColor = "rgb(157, 157, 157)";
                }
            })
            // after hover
            element.addEventListener('mouseout', function() {
                if (this.classList.contains('equal-sign')) {
                    this.style.backgroundColor = "rgb(26, 145, 69)";
                } 
                else {
                    this.style.backgroundColor = "rgb(203, 198, 198)";
                }
            })
        })
    }
    // when calculator is off
    else{
        s=0
        key.innerText= "ON"
        key.style.padding = "20px"
        key.style.backgroundColor="rgb(26, 145, 69)"
        Array.from(buttons).forEach(element => {
            element.style.backgroundColor = "rgb(118, 116, 116)"; 
            element.removeEventListener('mouseover', mouseOverHandler);
        })
        document.getElementById("calculator-screen").innerHTML=""
    }    

}




// To show calculation on the screen
function appendToScreen(value){
    if (s==1){
        document.getElementById("calculator-screen").innerHTML+=value
    }
    else {
        alert("Please turn on the calculator to calculate")
    }
}
 


// To calculate result
function calculateResult() {
    if (s==1){
        try {
            var result = eval(document.getElementById("calculator-screen").innerText);
            document.getElementById("calculator-screen").innerText = result;
        } catch (e) {
            document.getElementById("calculator-screen").innerText = e;
        }
    }
    else {
        alert("Please turn on the calculator to calculate")
    }
}



// To clear the screen
function clearScreen(){
    document.getElementById("calculator-screen").innerText=""
}


// To clear the last emelent 
function removeFromScreen() {
    let screenContent = document.getElementById("calculator-screen").innerHTML
    if (s==1){
        if (screenContent.length > 0) {
            screenContent = screenContent.slice(0, -1)
            document.getElementById("calculator-screen").innerHTML = screenContent;
        }
    }
    else {
        alert("Please turn on the calculator to calculate")
    }
}

