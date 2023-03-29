document.addEventListener('DOMContentLoaded', () => {
    console.log('domcontentloaded');
    
    const mainELement = document.querySelector('main');
    // destination create form below
    if(mainELement.id === "destination-create-main") {
        const destinationCreateFormElement = document.querySelector('#destination-create-form');
        destinationCreateFormElement.addEventListener('submit', handleCreateFormSubmit);
    }

    // destination view below
    if(mainELement.id === 'destination-page') {
        const carouselElement = document.querySelector('#destination-img-carousel-container')
        const maxIndex = document.querySelectorAll(".carousel-img").length -1;
        console.log('carouselElement', carouselElement);
        console.log('maxIndex', maxIndex);
        console.log('initial index', carouselElement.dataset.imgnum);


        const leftButton = document.querySelector('#destination-img-carousel-control-left-button')
        const rightButton = document.querySelector('#destination-img-carousel-control-right-button')

        leftButton.addEventListener('click', handleCarouselButton);
        rightButton.addEventListener('click', handleCarouselButton);
    }
})

const handleCreateFormSubmit = function (event) {
    event.preventDefault();
    const formResponseList = document.querySelector('#form-response');
    const formInputs = ['destination_name', 'destination_country', 'destination_city', 'destination_type', 'destination_description', 'destination_image']

    for ( const item of formInputs ) {
        const listElement = document.createElement('li');
        listElement.textContent = `${item.slice(12)}: ${this[item].value}`;
        formResponseList.appendChild(listElement)
    }
    
}

const handleCarouselButton = function (event) {
    const carouselElement = document.querySelector('#destination-img-carousel-container')
    const maxIndex = document.querySelectorAll(".carousel-img").length -1;
    const imagesContainer = document.querySelector('#images-container')
    let index = carouselElement.dataset.imgnum;
    
    
    // add or subtract index
    if(event.target.id.includes('left')) {
        console.log('left');
        index--
        carouselElement.dataset.imgnum = index
    } else if (event.target.id.includes('right')) {
        console.log('right');
        index++
        carouselElement.dataset.imgnum = index
    };
    console.log('index after increase/decrease', index);
    
    // reset index if needed
    if(index < 0) {
        index = maxIndex;
        carouselElement.dataset.imgnum = index
    }  else if (index > maxIndex) {
        index = 0;
        carouselElement.dataset.imgnum = index
    }
    console.log('index', index);

    imagesContainer.style.transform = `translate( calc(${index} * 100vw * -1), 0 )`;
}

