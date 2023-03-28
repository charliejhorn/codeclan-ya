document.addEventListener('DOMContentLoaded', () => {
    console.log('domcontentloaded');
    
    const mainELement = document.querySelector('main');
    if(mainELement.id === "destination-create-main") {
        const destinationCreateFormElement = document.querySelector('#destination-create-form');
        destinationCreateFormElement.addEventListener('submit', handleCreateFormSubmit);
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