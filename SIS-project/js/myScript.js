// AOS.init();


// menu js start
 window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.background = "#000";
        document.querySelector(".navbar").classList.add('active');
        document.querySelector(".navbar").style.height= '70px';
        document.querySelector(".sizelogo").style.width = '80px';

    } else {
        document.querySelector(".navbar").style.background = "transparent";
        document.querySelector(".navbar").classList.remove('active');
        document.querySelector(".navbar").style.height= 'auto';
        document.querySelector(".sizelogo").style.width = '100px';

    }
}


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// menu js end

// js for TOOLTIP 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))












