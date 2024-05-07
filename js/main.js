
const contenitoreCard = document.getElementById("box")

const images = [
    {
        image: 'berserk.1.jpg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'berserk.2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'berserk.3.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'berserk.4.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }
];

// Inizializza l'indice dell'immagine attualmente visualizzata
let currentIndex = 0;


document.getElementById("prev").addEventListener("click", function() {
    // Nascondi tutte le schede delle immagini
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Calcola l'indice della nuova slide
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    // Mostra la nuova slide
    const currentSlide = slides[currentIndex];
    currentSlide.style.display = 'block';
});

document.getElementById("next").addEventListener("click" , function(){
// ciclo per stampare in console le proprietà degli oggetti dentro l'array
for(let i = 0 ; i < images.length ; i++){

    const slide = images[i];
    console.log(slide)
    const slideHtml = creaSlideHTML(images[i])
    contenitoreCard.innerHTML += slideHtml;
 }

   // Nascondi tutte le schede delle immagini
   const slides = document.querySelectorAll('.slide');
   slides.forEach(slide => {
       slide.style.display = 'none';
   });

   // Mostra la scheda dell'immagine corrente
   const currentSlide = slides[currentIndex];
   currentSlide.style.display = 'block';

   // Aggiorna l'indice dell'immagine attualmente visualizzata
   currentIndex = (currentIndex + 1) % images.length;
})

// Definisci la funzione che restituirà il contenuto della card
function creaSlideHTML(card) {
    return `
        <div class="slide">
            <p class="titolo"> ${card.title}</p>
            <p> ${card.text}</p>
            <img src="./img/${card.image}" alt="${card.title}">
        </div>
    `;
}



