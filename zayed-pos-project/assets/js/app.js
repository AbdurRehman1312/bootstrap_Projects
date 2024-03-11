// $(document).ready(function(){
//     var el = document.getElementById("wrapper");
//     let maincontent = document.getElementById("page-content-wrapper")
//     var toggleButton = document.getElementById("menu-toggle");

//     toggleButton.onclick = function () {
//         el.classList.toggle("toggled");
//         maincontent.classList.toggle("fullwidth")
//     };

// });



$(document).ready(function(){
  let arrobtn = document.querySelectorAll('.arrowdown-arr');
  arrobtn.forEach(arrowb=>{
      arrowb.addEventListener('click', function() {
          this.classList.toggle('active3');
      });
  })
})


// fields active

$(document).ready(function(){
      const field1 = document.querySelector('.field1');
      const submitBtn = document.getElementById('submitBtn');

      // Function to check if the fields are filled and enable the button
      function checkFieldss() {
        if (field1.value.trim() !== '') {
          submitBtn.removeAttribute('disabled');
          submitBtn.classList.add('active')
        } else {
          submitBtn.setAttribute('disabled', 'disabled');
          submitBtn.classList.remove('active')
        }
      }

      // Add event listeners to the input fields to trigger the checkFields function
      field1.addEventListener('input', checkFieldss);
      field2.addEventListener('input', checkFieldss);

      // Initially, check the fields to enable or disable the button
      checkFieldss();
    });

$(document).ready(function(){
  var otp_inputs = document.querySelectorAll(".otp__digit")
        var mykey = "0123456789".split("")
        otp_inputs.forEach((_)=>{
          _.addEventListener("keyup", handle_next_input)
        })
        function handle_next_input(event){
          let current = event.target
          let index = parseInt(current.classList[1].split("__")[2])
          current.value = event.key
          
          if(event.keyCode == 8 && index > 1){
            current.previousElementSibling.focus()
          }
          if(index < 5 && mykey.indexOf(""+event.key+"") != -1){
            var next = current.nextElementSibling;
            next.focus()
          }
          var _finalKey = ""
          for(let {value} of otp_inputs){
              _finalKey += value
          }
          if(_finalKey.length == 5){
            document.querySelector("#_otp").classList.replace("_notok", "_ok")
            document.querySelector("#_otp").innerText = _finalKey
          }else{
            document.querySelector("#_otp").classList.replace("_ok", "_notok")
            document.querySelector("#_otp").innerText = _finalKey
          }
        }
})

$(document).ready(function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})
// (function($) {
// 	'use strict';
	
// 	jQuery(document).on('ready', function(){
	
// 			$('a.page-scroll').on('click', function(e){
// 				var anchor = $(this);
// 				$('html, body').stop().animate({
// 					scrollTop: $(anchor.attr('href')).offset().top - 50
// 				}, 1500);
// 				e.preventDefault();
// 			});		

// 	}); 	

				
// })(jQuery);

