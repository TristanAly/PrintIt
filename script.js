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

function showSlide(index) {
  allDot[numero].classList.remove("dot_selected");
  allDot[index].classList.add("dot_selected");
  imageSelected.src = `./assets/images/slideshow/${slides[index].image}`;
  textSlideSelected.innerHTML = slides[numero].tagLine;
  numero = index;
}

function slideLeft() {
  let index = (numero - 1 + slides.length) % slides.length;
  showSlide(index);

  console.log("nextSlideLeft");
}

function slideRight() {
  let index = (numero + 1) % slides.length;
  showSlide(index);
  console.log("nextSlideRight");
}

arrowRight.addEventListener("click", slideRight, true);
arrowLeft.addEventListener("click", slideLeft, true);


// for (var i = 0; i < slides.length; i++) {
//      allDot[i].addEventListener("click", function() {
//        if (i !== numero) {
//         showSlide(i);
//         console.log("dot click")
//        }
//        console.log("dot click 2")
//     });
//   }

  for (var i = 0; i < slides.length; i++) {
    (function(index){
       allDot[i].onclick = function() {
         if (index !== numero) {
          showSlide(index);
        console.log("dot click")
         }
      }
    })(i);
   }