$(document).ready(function(){
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };

});


$(document).ready(function(){
  let arrobtn = document.querySelectorAll('.arrowdown-arr');
  arrobtn.forEach(arrowb=>{
      arrowb.addEventListener('click', function() {
          this.classList.toggle('active3');
      });
  })
})


$(document).ready(function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})

