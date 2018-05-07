$(document).ready(function(){
    $('#jenks').hide();
    $('.options-container').hide();
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


let i = 0;
let title = "Hello! Welcome to my site.";
let speed = 70; 
$(document).ready(function() {
   var promise = new Promise(function(resolve, reject){
        if (i < title.length) {
            document.getElementById("heading").innerHTML += title.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }  
        setTimeout(() => resolve('done'), 3000);
    });
    promise.then(
        result => showOptions(),
        error => console.log('error')
    );
});

function typeWriter() {
    if (i < title.length) {
        document.getElementById("heading").innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }  
}

function showOptions() {
    console.log('show');
    $('.options-container').show(800);
}
 

$('#scrollLink').click(() => {
    console.log('scrolLink click', event);
    event.preventDefault();

    let divPosition = $(event.target.hash).offsett();
    $('html, body').animate({scrollTop: divPosition.top}, 1000);
})
