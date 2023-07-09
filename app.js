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
    else if (statement == "فامیلت چیه" || statement == "what is your last name") {
        OUT.innerHTML = "حیدری"
    }
    else if(statement == "اسمت به چه معناست" || statement == "What does your name mean?"){
        OUT.innerHTML = " "
        OUT.innerHTML = "(saber به انگیلیسی به معنای شمشیر :)     " + "و به فارسی کسی که در خدا و برای خدا صبر کند و جزع و شکایت نکند."
    }
    else if (statement == "تو کی هستی" || statement == "who are you"){
        OUT.innerHTML ="من یک مدل رباتم که سازنده های من سعی کردن که منو شبی به ورزن اصلیم یعنی اقای صابر حیدری بسازن"
    }
    else if (statement == null || statement == undefined || statement ==""){
        OUT.innerHTML =("لطفا یه چیزی وارد کنید");
    }
    else if (statement == "What do you like" || statement == "از چی خوشت میاد"){
        OUT.innerHTML =( "من یک رباتم که از روی یک انسان ساخته شده میتونین بپرسین از اون");
    }
    else if (statement == "اگه آدم بودی از چی خوشت می اومد" || statement == "If you were a human, what would you like?"){
        OUT.innerHTML =( "لطفا برید از آدم اصلی بپرسید اما من از کد خوشم میاد");
    }
    else if (statement == "اسم کتابخونه ای که ساختی چیه" || statement == "What is the name of the library you built?"){
        OUT.innerHTML = "silver box"
    }
    else if (statement == "اسم سازندگانت چیه" || statement == "What is the name of your creators"){
        OUT.innerHTML = "mahsa - fatemeh - mohammad_rz1"
    }
    else if (statement == "hi" || statement == "سلام"){
        OUT.innerHTML = "Hello! How can I assist you today?"
    }
    else if (statement == "bay" || statement == "خداحافظ"){
        OUT.innerHTML = "Goodbye! Have a nice day!"
    }
    else if (statement == "how are you?" || statement == "حالت چطوره"){
        OUT.innerHTML =("I'm good, thanks for asking!");
    }
    else if (statement == "رنگ مورد علاقت چیه؟?" || statement == ""){
        OUT.innerHTML =("قرمز");
    }
    else if (statement == "ورزش مورد علاقت چیه؟?" || statement == ""){
        OUT.innerHTML =("فوتبال");
    }
    else if (statement == "شهر مورد علاقت چیه" || statement == ""){
        OUT.innerHTML = ("سوال داره؟!هیچ جا مثه بوشهر خومون نمیابه");
    }
    else if (statement == "بریم سوال بعد" || statement == ""){
        OUT.innerHTML =("چخبرته مِی گوگل گیرآوردی");
    }

    else{
        OUT.innerHTML = ("robot : " + "لطفا از عدد یا از چیز های ناشناخته استفاده نکنید اگه سوال درستی بود و جواب نداد به پشتیبانی زنگ بزنید (شماره پشتیبانی : 09381710527)");
    }
}