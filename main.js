
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");

// })

// /* for each link add an event listener */
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))


// js for modal 
// const overlay = document.querySelector("#overlay");

// document.querySelector("#view-work-a").addEventListener("click", () => {
//     overlay.getElementsByClassName.display = "block";
// })

// document.querySelector("#close-modal-btn").addEventListener('click', () => {
//     overlay.getElementsByClassName.display = "none";
// })
 
//js for modal - second attempt
var modal = document.getElementById("myModal");  // get the modal

var btn = document.getElementById("myBtn");     // get the modalopen btn

var span = document.getElementsByClassName("close")[0];     // get the span to close the modal 

// on btn click open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// on click X close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// js for navbar 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})