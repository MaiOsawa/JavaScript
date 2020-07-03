var button = document.getElementById("button");
var form = document.getElementById("form");
var textarea = document.getElementById("textarea");

var maxTextNum = textarea.getAttribute("maxlength");

var reminingTimeNum = 10;

var textMessage = document.createElement("div");
var parent = textarea.parentElement;
parent.insertBefore(textMessage, textarea);

var timeMessage = document.createElement("div");
parent.insertBefore(timeMessage, null);

textarea.addEventListener("keyup", function() {
    var currentTextNum = textarea.value.length;
    textMessage.innerHTML = "<p>あと「" + (maxTextNum - currentTextNum) + "」文字入力できます</p>";
});

button.addEventListener("click", function() {
    form.style.display = "block";
    
    var timerId = setInterval(function() {
    timeMessage.innerHTML = "<p>制限時間: " + reminingTimeNum + "秒</p>";
    if (reminingTimeNum <= 0) {
        alert("制限時間終了");
        clearInterval(timerId);
    }
        reminingTimeNum--;
}, 1000);
});