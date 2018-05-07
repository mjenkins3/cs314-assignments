

$(document).ready(function(){
    $('#jenks').hide();
    $('.error').hide();
    $('.input-container').hide();
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

function validateForm() {
    $('.error').hide();
    $(".btn").click(function() {
      // validate and process form here
        let firstName = $("input#firstName").val();
        if (firstName == "") {
            $("label#firstName_error").show();
            document.getElementById("firstName").style.border = '4px solid rgb(109, 59, 71)';
            return false;
        }
  		let lastName = $("input#lastName").val();
  		if (lastName == "") {
            $("label#lastName_error").show();
            document.getElementById("lastName").style.border = '4px solid rgb(109, 59, 71)';
            return false;
        }
  		let email = $("input#email").val();
        if (email == "") {
            $("label#email_error").show();
            document.getElementById("email").style.border = '4px solid rgb(109, 59, 71)';
            return false;
        }
    });
    showInput();
    return true;
}

function showInput() {
    $(".input-container").show();
    document.getElementById('displayName').innerHTML = 
        "Name: " + document.getElementById("firstName").value + "  " + document.getElementById("lastName").value;  
    document.getElementById('displayEmail').innerHTML = 
        "Email:     " + document.getElementById("email").value;
    document.getElementById('displayMessage').innerHTML = 
        "Message:    " + document.getElementById("message").value; 
    clearInput();
}

function clearInput() {
    $('.error').hide();
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
}