class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div>
                    
                </div>
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);