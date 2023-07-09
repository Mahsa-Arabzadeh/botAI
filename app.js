function getResponse() {
  // Vorodi 
  let userInput = document.getElementById("userInput").value;
  
  // پاک کردن فیلد ورودی
  document.getElementById("userInput").value = "";
  
  // پاسخ ربات بر اساس ورودی کاربر 
  let botResponse;
  if (userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
    botResponse = "Hello!";
  } else if (userInput.toLowerCase().includes("how are you")) {
    botResponse = "I'm good, thanks for asking!";
  } else if (userInput.toLowerCase().includes("goodbye")) {
    botResponse = "Goodbye! Have a nice day!";
  } else {
    botResponse = "I'm sorry, I can't understand your question.";
  }
  
  // نمایش پاسخ ربات
  document.getElementById("botResponse").innerHTML = botResponse;
}