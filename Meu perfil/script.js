var alt = {};

var question_one = document.getElementById('questao-1');
var question_two = document.getElementById('questao-2');
var question_three = document.getElementById('questao-3');

function storeAlts(question_number, event) {
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        alt['questao'+question_number] = parseInt(event.target.value);
        console.log(alt);
    }
}

question_one.addEventListener('click', function(event){
    storeAlts(1, event)
})
question_two.addEventListener('click', function(event){
    storeAlts(2, event)
})
question_three.addEventListener('click', function(event){
    storeAlts(3, event)
})

function totalScore(){
    var total_score =
    alt.questao1+
    alt.questao2+
    alt.questao3;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() >= 3 && totalScore() < 5){
        return ('Perfil Conservador');
    } else if(totalScore() >= 5 && totalScore() < 9){
        return ('Perfil Moderado');
    } else if(totalScore() == 9) {
        return ('Perfil Agressivo');
    }
}

function saberMais(){
    if(totalScore() >= 3 && totalScore() < 5){
        console.log(window.location.href='perfil_conservador.html');
    } else if(totalScore() >= 5 && totalScore() < 9){
        console.log(window.location.href='perfil_moderado.html');
    } else if(totalScore() == 9) {
        console.log(window.location.href='perfil_agressivo.html');
    }
}

var perfis = document.getElementById('perfis');

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');

function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('questao-'+question_number);
    var el2 = document.getElementById('questao-'+current_question_number)

    el.style.display = "block";
    el2.style.display = "none"
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
})
submit3.addEventListener('click', function(){
   document.getElementById("printperfilinvestidor").innerHTML = getInfoBasedOnScore();
   document.getElementById("perfis").innerHTML = perfis.addEventListener('click', function(){saberMais()});
})
