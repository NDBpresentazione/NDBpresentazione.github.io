function check() {
    var c = 0;
    var q1=document.quiz5.question1.value;
    var q2=document.quiz5.question2.value;
    var q3=document.quiz5.question3.value;
    var q4=document.quiz5.question4.value;
    var q5=document.quiz5.question5.value;
    var result = document.getElementById('result');
    var quiz5=document.getElementById("quiz5");
    if (q1=="rispostaA") {c++}
    if (q2=="rispostaB") {c++}
    if (q3=="rispostaB") {c++}
    if (q4=="rispostaB") {c++}
    if (q5=="rispostaC") {c++}
    quiz.style.display="none";
    if (c<=3) {
        result.textContent="YOUR MARK IS "+c*2+", YOU HAVE FAILED THE TEST, TRY AGAIN"
        
    }
    else{
        result.textContent="YOUR MARK IS "+c*2+", YOU HAVE PASSED THE TEST, CONGRATULATIONS!"
        
    }

}


