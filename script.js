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
let dot = 0;

function slideLeft() {
    numero = numero + précedent;
    dot = dot + précedent;
  
    if (numero < 0) 
    numero = slides.length - 1;
    dot = numero;
    imageSelected.src = `./assets/images/slideshow/${slides[numero].image}`;
    textSlideSelected.innerHTML = slides[numero].tagLine;

    allDot[dot].classList.add("dot_selected");
  let dottest = dot + 1;
  if (dot < allDot.length - 1) allDot[dottest].classList.remove("dot_selected");
  else if (allDot[0].classList.contains("dot_selected"))
    allDot[0].classList.remove("dot_selected");

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

    // j'ajoute la classe "dot_selected" a mon element
  allDot[dot].classList.add("dot_selected");
  // je décrémente dot pour permettre d'enlever la classe "dot_selected" sur la précedente
  let dottest = dot - 1 ;
  // je fais une condition qui dit que tant que la variable dottest et inferieur au tableau et inferieur ou égal a 0. il m'enleve les classe des précedentes.
  // si ce n'est pas le cas tu me met la variable dottest egale au dernier élement du tableau pour qu'on puisse remove la classe "dot_selected" du dernier élément
  console.log(dottest);
  if ((dottest < allDot.length - 1) && (dottest >= 0)){ 
  console.log(dottest);
  allDot[dottest].classList.remove("dot_selected");
  console.log(numero);
  }
  else {
    dottest = allDot.length - 1
    allDot[dottest].classList.remove("dot_selected");
    console.log(dottest);
  }

    console.log("nextSlideRight");
}

arrowRight.addEventListener("click", slideRight, true);
arrowLeft.addEventListener("click", slideLeft, true);

for (var i = 0; i < slides.length; i++) {
  (function(index){
     allDot[i].onclick = function() {
       if (index !== numero) {
        allDot[numero].classList.remove('dot_selected');
        console.log(numero)
         this.classList.add('dot_selected');
         console.log(index)
         imageSelected.src = `./assets/images/slideshow/${slides[index].image}`;
         textSlideSelected.innerHTML = slides[index].tagLine;
         numero = index;
       }
    }
  })(i);
 }