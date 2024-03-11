// AOS.init();


// menu js start

document.querySelector(".navbar").style.background = "#fff";
window.onscroll = function () { scrollFunction() };

function scrollFunction() {


    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").style.height = '75px';
        document.querySelector(".sizelogo").style.width = '180px';

    } else {
        document.querySelector(".navbar").style.height = 'auto';
        document.querySelector(".sizelogo").style.width = '200px';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var activeLinks = document.querySelectorAll('.navbar-nav .nav-item a');    
    function setActiveLink() {
        var currentUrl = window.location.href;
        activeLinks.forEach(function (link) {
            var linkUrl = link.href;
            if (currentUrl === linkUrl) {
                link.classList.add('active-nav-link');
            } else {
                link.classList.remove('active-nav-link');
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










