// console.log('app loaded', window)

document.addEventListener('DOMContentLoaded', () => {
    const title = window.document.querySelector('h1')
    const welcomeParagraph = window.document.querySelector('#welcome-paragraph')
    const list = document.querySelector('ul')

    title.textContent = 'javascript hello'
    welcomeParagraph.textContent = 'boo'

    const p = document.createElement("p");
    p.textContent = 'new paragraph';   
    p.setAttribute('class', 'red')
    document.body.appendChild(p);
})

