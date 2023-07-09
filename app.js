const OUT = document.getElementById("output")

document.getElementById("myButton").onclick = function(){
    let statement = document.getElementById("myText").value;
    if(statement == "سلام"){
        OUT.innerHTML = "من زبونتو نمیفهمم :)"
    }
    else if(statement == "چندسالته؟"){
        OUT.innerHTML = "3 سالمع"
    }
    else if(statement == "درود"){
        OUT.innerHTML = "درود ای دوست :)"
    }
    else if(statement == "اسمت چیه"){
        OUT.innerHTML = "saber به معنای شمشیر :)"
    }
}