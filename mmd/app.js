let soal
let javab
console.log("human  : " +( soal = "توکی هستی"));
if (soal == "سلام" || soal == "slam"){
    javab =("به فارسی حرف بزن");
}
else if (soal == "درود" || soal == "drood") {
    javab =("درود برتو در خدمتم");
}
else if (soal == null || soal == undefined ){
    javab =("لطفا یه چیزی وارد کنید");
}
else if (soal == "What do you like" || soal == "از چی خوشت میاد"){
    javab =( "من یک رباتم که از روی یک انسان ساخته شده میتونین بپرسین از اون");
}
else if (soal == "اگه ادم بودی از چی خوشت می اومد" || soal == "If you were a human, what would you like?"){
    javab =( "لطفا برید از ادم اصلی بپرسید اما من از کد خوشم میاد");
}
else if (soal == "چیپس موقولی ؟"){
    javab =("نه");
}
else if (soal == "توکی هستی" || soal == "who are you"){
    javab = "من یک مدل رباتم که سازنده های من سعی کردن که منو شبی به ورزن اصلیم یعنی اقای صبر حیدری بسازن"
}
else{
    console.log("robot : " + "لطفا از یک حرف یا از عدد یا از چیز های ناشناخته استفاده نکنید اگه سوال درستی بود و جواب نداد به پشتیبانی زنگ بزنید (شماره پشتیبانی : 09381710527)");
}
console.log("robot  : " + javab);