const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const allDot = document.querySelectorAll(".dot");
const imageSelected = document.querySelector(".banner-img");
const textSlideSelected = document.querySelector(".text-slide");

let numero = 0;
let next = 1;
let précedent = -1;

function slideLeft() {
    numero = numero + précedent;
  
    if (numero < 0) 
    numero = slides.length - 1;
    dot = numero;
    imageSelected.src = `./assets/images/slideshow/${slides[numero].image}`;
    textSlideSelected.innerHTML = slides[numero].tagLine;

    console.log("nextSlideLeft");
}

function slideRight() {
    numero = numero + next;
    dot = dot + next;
  
    if (numero > slides.length - 1) 
    numero = 0;
    dot = numero;
    imageSelected.src = `./assets/images/slideshow/${slides[numero].image}`;
    textSlideSelected.innerHTML = slides[numero].tagLine;

    console.log("nextSlideRight");
}

arrowRight.addEventListener("click", slideRight, true);
arrowLeft.addEventListener("click", slideLeft, true);