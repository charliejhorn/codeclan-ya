document.addEventListener('DOMContentLoaded', () => {
    const destinationCreateFormElement = document.querySelector('#destination-create-form');
    destinationCreateFormElement.addEventListener('submit', handleCreateFormSubmit);
    console.log('domcontentloaded');
})

const handleCreateFormSubmit = function (event) {
    event.preventDefault();
    const formResponseList = document.querySelector('#form-response');
    const formInputs = ['destination_name', 'destination_country', 'destination_city', 'destination_type', 'destination_description', 'destination_image']

    /* const nameElement = document.createElement('#destination-name');
    const countryElement = document.querySelector('#destination-country');
    const cityElement = document.querySelector('#destination-city');
    const typeElement = document.querySelector('#destination-type');
    const descriptionElement = document.querySelector('#destination-description');
    const imageLinkElement = document.querySelector('#destination-image'); */
    
    const nameElement = document.createElement('li');
    const countryElement = document.createElement('li');
    const cityElement = document.createElement('li');
    const typeElement = document.createElement('li');
    const descriptionElement = document.createElement('li');
    const imageLinkElement = document.createElement('li');

    for ( const item of formInputs ) {
        const listElement = document.createElement('li');
        listElement.textContent = `${item.slice(12)}: ${this[item].value}`;
        formResponseList.appendChild(listElement)
    }
    
}