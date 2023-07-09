// Saber Heydari bot project.
// Team: MohamadReza, Fatemeh, Mahsa.
// Output from element p --> It goes to the html file and selects the p element by its ID.
const OUT = document.getElementById("output")
// When we click on the button, this function is executed.
document.getElementById("myButton").onclick = function(){
    // let statement = value of input.
    let statement = document.getElementById("myText").value;
    // terms and conditions.
    if(statement == "سلام"){
        OUT.innerHTML = "من زبونتو نمیفهمم :)"
    }
    else if(statement == "چند سالته؟"){
        OUT.innerHTML = "میخوای به چی برسی؟"
    }
    else if(statement == "درود"){
        OUT.innerHTML = "درود ای دوست :)"
    }
    else if(statement == "اسمت چیه"){
        OUT.innerHTML = "saber به معنای شمشیر :)"
    }
    else if(statement == ""){
        OUT.innerHTML = ""
    }
}