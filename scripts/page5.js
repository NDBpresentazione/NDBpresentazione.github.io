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
    quiz.style.display="none";
    if (c<=3) {
        result.textContent="YOUR MARK IS "+c*2+", YOU HAVE FAILED THE TEST, TRY AGAIN"
        
    }
    else{
        result.textContent="YOUR MARK IS "+c*2+", YOU HAVE PASSED THE TEST, CONGRATULATIONS!"
        
    }

}


