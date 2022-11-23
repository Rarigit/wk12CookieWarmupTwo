
const bulbasaur = "https://imgs.search.brave.com/QTBc7u4A-va6X5JQjksfSWd6gn3L_tw-Q0B7U1al7Wo/rs:fit:514:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/R2xUcmR2d2pBWmZG/T0cwdjZJcGl3SGFH/MSZwaWQ9QXBp";
const charmander = "https://imgs.search.brave.com/TvoVUymFsGr0rSVx29--Su1OAfG35tZIxHBYum9ohjs/rs:fit:421:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/Nm5Fb3g5dXlnUFQ0/a1k4ajFPaVVRSGFJ/ViZwaWQ9QXBp";
const squirtle = "https://imgs.search.brave.com/NZA6pzsBnvfapaZj4Ks4PIh99EcPRxYFLlPElsIvvGQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/S3RpS29iaWRoQzVm/dGVhWmQwSXhRSGFI/YSZwaWQ9QXBp";
//Mark used constants for this example const bulbusaur = "url". Way more cleaner example
function injectPokemon(src, alt){
    document.body.insertAdjacentHTML(`beforeend`,
                                `<img src="${src}" alt="${alt}">`);
}

function choosePokemon(event){
    Cookies.set(`imageUrl`, event.target.getAttribute(`src`));
    location.href = "/display.html";
}

injectPokemon(bulbasaur, "Bulbasaur");
injectPokemon(charmander, "Charmander");
injectPokemon(squirtle, "Squirtle");

let images = document.querySelectorAll(`img`);

for (img of images){
    img.addEventListener(`click`, choosePokemon);
}

// //Equivalent
// for (let i=0; i<images.length, i++){
//     images[i].addEventListener(`click`, choosePokemon);
// }