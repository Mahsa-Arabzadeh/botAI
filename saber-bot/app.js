// Saber Heydari bot project.
// Team: MohamadReza, Fatemeh, Mahsa.
// Output from element p --> It goes to the html file and selects the p element by its ID.
const OUT = document.getElementById("output")
// When we click on the button, this function is executed.
document.getElementById("myButton").onclick = function(){
    // let statement = value of input.
    let statement = document.getElementById("myText").value;
    // terms and conditions.
    if(statement == "سلام" || statement == "slam"){
        OUT.innerHTML =("ببخشید عربی بلد نیستم :)");
    }
    else if (statement == "درود" || statement == "drood") {
        OUT.innerHTML =("درود برتو در خدمتم");
    }
    else if(statement == "چند سالته؟"){
        OUT.innerHTML = "میخوای به چی برسی؟ (23 سالمه)"
    }
    else if (statement == "اسمت چیه" || statement == "what is your name") {
        OUT.innerHTML = "صابر"
    }
    else if(statement == "اسمت به چه معناست" || statement == "What does your name mean?"){
        OUT.innerHTML = " "
        OUT.innerHTML = "(saber به انگیلیسی به معنای شمشیر :)     " + "و به فارسی کسی که در خدا و برای خدا صبر کند و جزع و شکایت نکند."
    }
    else if (statement == "تو کی هستی" || statement == "who are you"){
        OUT.innerHTML ="من یک مدل رباتم که سازنده های من سعی کردن که منو شبی به ورزن اصلیم یعنی اقای صبر حیدری بسازن"
    }
    else if (statement == null || statement == undefined || statement ==""){
        OUT.innerHTML =("لطفا یه چیزی وارد کنید");
    }
    else if (statement == "What do you like" || statement == "از چی خوشت میاد"){
        OUT.innerHTML =( "من یک رباتم که از روی یک انسان ساخته شده میتونین بپرسین از اون");
    }
    else if (statement == "اگه ادم بودی از چی خوشت می اومد" || statement == "If you were a human, what would you like?"){
        OUT.innerHTML =( "لطفا برید از ادم اصلی بپرسید اما من از کد خوشم میاد");
    }
    else if (statement == "اسم کتابخونه ای که ساخیتی چیه" || statement == "What is the name of the library you built?"){
        OUT.innerHTML = "silver box"
    }
    else if (statement == "اسم سازندگانت چیه" || statement == "What is the name of your creators"){
        OUT.innerHTML = "mahsa - fatemeh - mohammad_rz1"
    }
    else{
        OUT.innerHTML = ("robot : " + "لطفا از عدد یا از چیز های ناشناخته استفاده نکنید اگه سوال درستی بود و جواب نداد به پشتیبانی زنگ بزنید (شماره پشتیبانی : 09381710527)");
    }
}