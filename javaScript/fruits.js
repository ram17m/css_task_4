'use strict'

//1

const berry = document.getElementById('berry');
const berryName = berry.innerText;
console.log(`I found the berry: ${berryName}`);

//2

const squishy = document.querySelectorAll('li[data-foodtype="squishy"]');
const squishyName = squishy[0].innerText;
console.log(`I found the fruit: ${squishyName}`);
squishy[0].style.color = "orange";

//3.1

const liElements = document.getElementsByTagName('li');
console.log(liElements);

//3.2

console.log('Using the for loop here:');
Array.from(liElements).forEach((element) => {
    if(element.innerText === 'Pear'){
        element.style.color = 'green';
    }
    element.style.width = "100px";
    element.style.listStyleType = 'none';
    console.log(element.innerText);
});

//4.1

const allLiElements = document.querySelectorAll('li');

//4.2

allLiElements.forEach(element => {
    element.style.border = '1px solid';
    if(element.innerText === 'Orange'){
        element.style.background = 'Orange';
        element.style.color = 'black';
    }
    if(element.innerText === 'Pear'){
        element.style.background = 'Green';
        element.style.color = 'black';
    }
    if(element.innerText === 'Strawberry'){
        element.style.background = 'Pink';
    }
});