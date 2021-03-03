

export const Catalog = (harvest) => {

const DOMTarget = document.querySelector(".container");

harvest.forEach(plant => {
   const Element = `<section class="plant">${plant.type}</section>`;
   DOMTarget.innerHTML += Element;

}) ;

}




