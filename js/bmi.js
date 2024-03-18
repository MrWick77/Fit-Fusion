
function bmi() {
var h= document.getElementById("height").value;
var w= document.getElementById("weight").value;
var b= w/(h/100 * h/100);
var total = b.toFixed(3);
document.getElementById("result").innerHTML= "Your BMI is " + total

var r='';
if(total<18.5){
    r='Underweight';
    document.getElementById("info").style.color='yellow';
}else if(18.5<=total&&total<=23.9){
    r='Healthy';
    document.getElementById("info").style.color='lightgreen';
}else if(24<=total&&total<=29.9){
    r='Overweight';
    document.getElementById("info").style.color='pink';
}else if(30<=total&&total<=34.9){
    r='Obese';
    document.getElementById("info").style.color='orange';
}else if(35<=total){
    r='Extremely Obese';
    document.getElementById("info").style.color='red';
}
document.getElementById("info").innerHTML= "You are " + r
}
if(h==NaN&&h<50){
    h.class
}