// const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      fetchDog()

      /* for(let i = 0; i < 99; i++) {
        setTimeout(() => {
          fetchDog();
        }, 1);
      } */
    })

    
});

const fetchDog = () => {
  console.log("Dog button clicked");
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const imageElement = document.querySelector('img');
    imageElement.src = data.message;
  })
}