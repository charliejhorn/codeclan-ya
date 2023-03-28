document.addEventListener('DOMContentLoaded', () => {
  getBiscuits();
  const form = document.querySelector('#biscuit-form');
  form.addEventListener('submit', onFormSubmit);
})

const getBiscuits = () => {
  fetch('/api/biscuits')
  .then(res => res.json())
  .then(biscuits => {
    const list = document.querySelector('#biscuit-list');
    list.innerHTML = "";
    for (let biscuit of biscuits) {
        const listItem = document.createElement('li');
        listItem.textContent = `${biscuit.name} by ${biscuit.brand}`;
        list.appendChild(listItem);
    }
  })
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const newBiscuit = {
        name: event.target.name.value,
        brand: event.target.brand.value
    }
    fetch("/api/biscuits", {
        method: 'POST',
        body: JSON.stringify(newBiscuit),
        headers: { 'Content-Type': 'application/json' }
      })
    .then(() => {
      event.target.reset()
      getBiscuits()
    })
}