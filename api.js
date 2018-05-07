

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



$('#book-quiz').click(function(){
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        $('#options-container').hide()
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

$('#music-quiz').click(function(){
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        $('#options-container').hide()
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


$('#movie-quiz').click(function(){
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        $('#options-container').hide()
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


$('#tv-quiz').click(function(){
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple",
        type: "GET",
        datatype: "json",
    })
    .done(function(response){
        $('#options-container').hide()
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
        console.log(data.results[i]);
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
            radio.setAttribute('name', `answer-radio${i}`);
            radio.className = 'radio';
            var answers = document.createElement('label');
            answers.setAttribute('for', radio);
            answers.className = 'incorrect_answer' + i;
            answers.innerHTML = data.results[i].incorrect_answers[m];
            console.log(data.results[i].incorrect_answers[m]);
            var lineBreak = document.createElement('br');
            $(`#question-container${i}`).append(radio);
            $(`#question-container${i}`).append(answers);
            $(`#question-container${i}`).append(lineBreak);
        }
        radio.setAttribute('type','radio');
        radio.setAttribute('name', `answer-radio${i}`);
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
        cRadio.setAttribute('name', `answer-radio${i}`);
        cRadio.setAttribute('id', `correct${i}`);
        cRadio.className = 'radio';
        let lineBreak2 = document.createElement('br');
        $(`#question-container${i}`).append(cRadio);
        $(`#question-container${i}`).append(correctAnswer);
        $(`#question-container${i}`).append(lineBreak2);
    }

    let submitButton = document.createElement('div');
    submitButton.id = 's-btn';
    submitButton.className = 'btn';
    submitButton.innerHTML = 'Submit!';

    $('.questions').append(submitButton);
}

$(document).on('click', '#s-btn', function () {
    for(let i = 0; i<10; i++){
            if(document.getElementById(`correct${i}`).checked){
            $(`#question-container${i}`).css({backgroundColor: 'rgb(188, 214, 128)'});
        } else {
            $(`#question-container${i}`).css({backgroundColor: 'rgb(214, 128, 128)'});
        }
    }
    $('#s-btn').hide();
    let newQuizButton = document.createElement('div');
    newQuizButton.id = 'q-btn';
    newQuizButton.className = 'btn';
    newQuizButton.innerHTML = 'Take another quiz!';
    $('.questions').append(newQuizButton);
})

$(document).on('click', '#q-btn', function () {
    console.log('reload');
    window.location.reload();
})

