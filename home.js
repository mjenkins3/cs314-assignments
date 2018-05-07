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
 



$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#scrollLink").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("#scrollLink2").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#scrollLink3").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    $("html, body").animate({ scrollTop: 0 }, 600); 
}