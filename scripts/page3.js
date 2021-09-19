form1 = document.getElementById("b1")
sol1=["A new road is being planned near my house"]
sol2=["My grandfather built this house in 1943."]
sol3=["Picasso was painting Guernica at that time."]
sol4=["The cleaner has cleaned the office."]
sol5=["He had written three books before 1867."]
sol6=["John will tell you later."]
sol7=["By this time tomorrow we will have signed the deal."]
sol8=["Somebody should do the work."]
sol9=["The traffic might have delayed Jimmy."]
sol10=["People speak Portuguese in Brazil."]
const solutions = [sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8,sol9,sol10]

const correct = () => {
    let mark = 0
    let mark2 = mark
    let mistakes = new Array(0)
    let s1 = document.exercise.s1.value
    let s2 = document.exercise.s2.value
    let s3 = document.exercise.s3.value
    let s4 = document.exercise.s4.value
    let s5 = document.exercise.s5.value
    let s6 = document.exercise.s6.value
    let s7 = document.exercise.s7.value
    let s8 = document.exercise.s8.value
    let s9 = document.exercise.s9.value
    let s10 = document.exercise.s10.value
    let answers1 = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]
    let answers2 = answers1.map ( e => e.trim())
    let anwers3 
    let answers = answers2.map( e => e.split(' '))
    let check = 0

    for(let i = 0;i<answers.length;i++){
        check = 0
        mark2 = mark
        answers3 = answers[i].filter((e) => {
            return e != "" 
            })
        for(let j = 0;j<solutions[i].length;j++){
            console.log(answers3)
            if (solutions[i].length!=answers[i].length){
                break
            }
            if (solutions[i][j] != answers3[j]){
                
                break
            }
            check ++
        }
        if (check == solutions[i].length){
            mark++
        }

        if ( mark2 != mark){
            mistakes.push("Right answer")
        }
        else{
            mistakes.push("Wrong answer : "+answers[i]+" The solution is : "+solutions[i][0])
        }
    }
    for( let k = 0;k< 10;k++){
        if (mistakes[k] != "Right answer"){
            document.getElementById("sol"+String(k+1)).innerHTML = "<button onclick=ss"+(k+1)+"()>Show solutions</button> <img src='https://icon2.cleanpng.com/20190228/bre/kisspng-red-x-stock-photography-image-letter-portable-netw-5c7878899969a0.1754724515513990496284.jpg' height=20vh width=20vh>"
        }
        else{
            document.getElementById("sol"+String(k+1)).innerHTML ="<img src='https://image.freepik.com/premium-photo/green-tick-mark-white-background_172429-560.jpg' height=20vh width=20vh>"
        }
    }
    document.getElementById("mark").innerHTML = "VOTO : "+ mark

}

function ss1 () {
    document.getElementById("sol1").innerHTML= sol1[0]+" "+sol1[1]+" "+sol1[2]
}

function ss2 () {
    document.getElementById("sol2").innerHTML= sol2[0]
}

function ss3 () {
    document.getElementById("sol3").innerHTML= sol3[0]
}

function ss4 () {
    document.getElementById("sol4").innerHTML= sol4[0]
}

function ss5 () {
    document.getElementById("sol5").innerHTML= sol5[0]
}

function ss6 () {
    document.getElementById("sol6").innerHTML= sol6[0]
}

function ss7 () {
    document.getElementById("sol7").innerHTML= sol7[0]
}

function ss8 () {
    document.getElementById("sol8").innerHTML= sol8[0]
}

function ss9 () {
    document.getElementById("sol9").innerHTML= sol9[0]
}

function ss10 () {
    document.getElementById("sol10").innerHTML= sol10[0]
}
