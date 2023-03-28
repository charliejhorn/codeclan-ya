class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                Footer
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);