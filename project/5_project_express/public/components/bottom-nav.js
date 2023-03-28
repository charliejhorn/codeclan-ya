class BottomNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav id="bottom-nav-bar">
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="/destination-list.html">
                        <span class='bottom-nav-bar-icon material-symbols-outlined' alt="browse destinations icon">
                            travel_explore
                        </span>
                        <h6 class='bottom-nav-bar-text'>browse</h6>
                    </a>
                </div>
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="/html/destination-edit.html">
                        <span class='bottom-nav-bar-icon material-symbols-outlined' alt="browse destinations icon">
                            add_location
                        </span>
                        <h6 class='bottom-nav-bar-text'>create</h6>
                    </a>
                </div>
            </nav>
        `;
    }
}
  
customElements.define('bottom-nav-component', BottomNav);