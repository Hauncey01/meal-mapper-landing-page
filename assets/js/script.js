"use strict";

document.addEventListener('DOMContentLoaded', init);


async function init() {
    await displayHighlightedRecipe();
    document.querySelector("header button").addEventListener("click", (e) =>{
        e.preventDefault();
        showNav();
    } );
}

async function getHighlightedRecipe() {
    const res = await fetch('https://dummyjson.com/recipes/1');
    return await res.json();
}

async function displayHighlightedRecipe() {
    const recipe = await getHighlightedRecipe();
    const container = document.getElementById('highlight');
    console.log(recipe);
    container.insertAdjacentHTML('beforeend',
        `<div class="wrapper">
        <div id="image-container">
        <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div id="recipe">
        <h3>${recipe.name}</h3>
        <p><i id="rating-star" class="material-icons">star</i>${recipe.rating}</p>
        <p><i class="material-symbols-outlined">clock_loader_40</i>${recipe.cookTimeMinutes+recipe.prepTimeMinutes}</p>
        <h4>Ingredients:</h4>
         <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        </div>
        </div>`);
}


function showNav() {
    const nav = document.querySelector('nav');
    if(nav.style.display === 'none' || nav.style.display === ''){
        nav.style.display = 'flex';
    }else {
        nav.style.display = 'none';
    }
}