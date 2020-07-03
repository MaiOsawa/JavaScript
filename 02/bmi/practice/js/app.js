var weight;
weight = prompt("BMIを測定します。まずはあなたの体重を入力してください。");
var height;
height = prompt("BMIを測定します。次にあなたの身長を入力してください。");
var BMI = weight / (height * height);
var message = "あなたのBMIは「 " + BMI + " 」です。";
alert(message);