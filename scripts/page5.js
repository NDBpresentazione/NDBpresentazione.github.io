const marks = [
    ["F","red"],
    ["E","orange"],
    ["D","yellow"],
    ["C","green"],
    ["B","blue"],
    ["A","purple"]
]
const getMark = (mark) => {
    if (mark.toFixed(0) <= 5 ){
        return [marks[0][0],marks[0][1]]
    }
    else {
        return [marks[mark.toFixed(0)-5][0],marks[mark.toFixed(0)-5][1]]
    }
}
function check() {
    var c = 0;
    var q1=document.quiz6.question1.value;
    var q2=document.quiz6.question2.value;
    var q3=document.quiz6.question3.value;
    var q4=document.quiz6.question4.value;
    var q5=document.quiz6.question5.value;
    var result = document.getElementById('result');
    var quiz6=document.getElementById("quiz6");
    if (q1=="rispostaB") {c++}
    if (q2=="rispostaA") {c++}
    if (q3=="rispostaD") {c++}
    if (q4=="rispostaB") {c++}
    if (q5=="rispostaA") {c++}
//    quiz.style.display="none";
    evaluation = getMark(c*2)
    document.getElementById("result").innerHTML = "VOTO : <font color = "+evaluation[1]+"> "+evaluation[0]+"</font>"

}


