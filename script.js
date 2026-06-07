function toggleMenu(){

let nav =
document.getElementById(
"navMenu"
);

nav.classList.toggle(
"show"
);

}

function showPage(pageId){

let pages =
document.querySelectorAll(
".page"
);

pages.forEach(function(page){

page.classList.remove(
"active"
);

});

document.getElementById(
pageId
).classList.add(
"active"
);

window.scrollTo({
top:0,
behavior:"smooth"
});

closeMenu();

}

function closeMenu(){

document
.getElementById(
"navMenu"
)

.classList.remove(
"show"
);

}

function scrollProducts(){

document
.getElementById(
"products"
)

.scrollIntoView({
behavior:"smooth"
});

}

function showDetails(
title,
price,
description,
image
){

document.getElementById(
"detailsBox"
).style.display="flex";

document.getElementById(
"detailTitle"
).innerHTML=title;

document.getElementById(
"detailPrice"
).innerHTML=price;

document.getElementById(
"detailDescription"
).innerHTML=description;

let img =
document.getElementById(
"detailImage"
);

img.src=image;

img.style.display="block";

}

function closeDetails(){

document.getElementById(
"detailsBox"
).style.display="none";

}

window.onclick=function(e){

let box =
document.getElementById(
"detailsBox"
);

if(e.target===box){

closeDetails();

}

}

function buyNow(name, imagePath, price) {
  const phone = "250784169176";
  
  let message =
    `🛒 NEW ORDER : 

 Product: ${name}+
 Image: ${imagePath}+
 Price: ${price}RWF
`;
  
  window.open(
    `https://wa.me/${phone}?text=${(message)}\n\n`,
    "_blank"
  );
}

function searchShoes(){

let input =
document.querySelector(
".search"
).value.toLowerCase();

let cards =
document.querySelectorAll(
".card"
);

cards.forEach(function(card){

let title =
card.querySelector(
"h3"
).innerText.toLowerCase();

if(title.includes(input)){

card.style.display=
"block";

}

else{

card.style.display=
"none";

}

});

}