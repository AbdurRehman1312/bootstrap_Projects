// AOS.init();


// menu js start
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.querySelector(".navbar");
    if (document.documentElement.scrollTop > 250) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var activeLinks = document.querySelectorAll('.navbar-nav .nav-item a');
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
let firstRow = document.getElementById("firstRow");
let secondRow = document.getElementById("secondRow");
document.getElementById('payBtn').addEventListener("click", () => {
    secondRow.style.display = 'block'
    firstRow.style.display = 'none'
})
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the mobileNav */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// menu js end

// js for TOOLTIP 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))











