

$(document).ready(function(){
    $('#jenks').hide();
});


$(document).ready(function(){
    $('#logo').mouseover(function(){
        $('#jenks').show(500);
        console.log('show');
    });
    $('#logo').mouseout(function(){
        $('#jenks').hide(500);
        console.log('hide');
    });
});


$(document).ready(() => {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        displayQuestions(response)
        console.log(response);
    })
    .fail(function(status, errorThrown){
        console.log('Error: ', errorThrown);
        console.log('Status: ', status);
    })
    .always(function(){
        console.log('request complete');
    });
})

function displayQuestions(data){
    for(let i = 0; i<10; i++){
        // console.log(data.results[i]);
        let questionContainer = document.createElement('form');
        questionContainer.id = 'question-container' + i;
        questionContainer.className = 'question-container';
        let questionName = document.createElement('h3');
        questionName.className = 'question';
        questionName.innerHTML = data.results[i].question;
        
        $('.questions').append(questionContainer);
        $(`#question-container${i}`).append(questionName);
        

        for(let m=0;m<3;m++){
            var radio = document.createElement('input');
            radio.setAttribute('type','radio');
            radio.setAttribute('name', 'answer-radio');
            radio.className = 'radio';
            var answers = document.createElement('label');
            answers.setAttribute('for', radio);
            answers.className = 'answers' + i;
            answers.innerHTML = data.results[i].incorrect_answers[m];
            // console.log(data.results[i].incorrect_answers[m]);
            var lineBreak = document.createElement('br');
            $(`#question-container${i}`).append(radio);
            $(`#question-container${i}`).append(answers);
            $(`#question-container${i}`).append(lineBreak);
        }
        radio.setAttribute('type','radio');
        radio.setAttribute('name', 'answer-radio');
        radio.className = 'radio';
        answers.innerHTML = data.results[i].incorrect_answers[2];
        $(`#question-container${i}`).append(radio);
        $(`#question-container${i}`).append(answers);
        $(`#question-container${i}`).append(lineBreak);
        let correctAnswer = document.createElement('label');
        correctAnswer.setAttribute('for', radio);
        correctAnswer.className = 'correctAnswer' + i;
        correctAnswer.innerHTML = data.results[i].correct_answer;
        let cRadio = document.createElement('input');
        cRadio.setAttribute('type','radio');
        cRadio.setAttribute('name', 'answer-radio');
        cRadio.className = 'radio';
        let lineBreak2 = document.createElement('br');
        $(`#question-container${i}`).append(cRadio);
        $(`#question-container${i}`).append(correctAnswer);
        $(`#question-container${i}`).append(lineBreak2);
    }
     
}