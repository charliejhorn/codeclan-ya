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
        console.log('carouselElement', carouselElement);
        const numImages = document.querySelectorAll(".carousel-img").length;
        console.log('numImages', numImages);

        carouselElement.dataset


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
    // console.log(event);
    // console.log(carouselElement)
    // // console.log(carouselElement.dataset.imgnum)
    // console.log(numImages);



    if(event.target.id.includes('left')) {
        carouselElement.dataset.imgnum--
    } else if (event.target.id.includes('right')) {
        carouselElement.dataset.imgnum++
    };
}

