let ham = document.querySelector(".hamburger")
let close = document.querySelector(".close")
let card = document.querySelector(".card")



function displayclosebutton(){    
    ham.classList.toggle("ham")
    close.classList.toggle("clo")
    card.classList.toggle("hide-card")
}