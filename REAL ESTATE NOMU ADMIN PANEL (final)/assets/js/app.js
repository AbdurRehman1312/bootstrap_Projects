function toggleSideBar(){
  var el = document.getElementById("wrapper");
  var toggleButton = document.getElementById("menu-toggle");

  toggleButton.onclick = function () {
      el.classList.toggle("toggled");
  };
}


$(document).ready(function(){
  let arrobtn = document.querySelectorAll('.arrowdown-arr');
  arrobtn.forEach(arrowb=>{
      arrowb.addEventListener('click', function() {
          this.classList.toggle('active3');
      });
  })
})

// --------------- ACTIVE CLASS SCRIPT --------------- 

document.addEventListener('DOMContentLoaded', function () {
  var activeLinks = document.querySelectorAll('.sidebar_list li a');
  function setActiveLink() {
      var currentUrl = window.location.href;
      activeLinks.forEach(function (link) {
          var linkUrl = link.href;
          if (currentUrl === linkUrl) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }
  activeLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          setActiveLink();
      });
  });
  setActiveLink();
});


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
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})

