class BottomNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav id="bottom-nav-bar">
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="#">
                        <img class='bottom-nav-bar-img'src="/assets/bottom-nav/travel_explore.svg" alt="travel_explore">
                    </a>
                </div>
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="#">
                        <img class='bottom-nav-bar-img'src="/assets/bottom-nav/calendar_month.svg" alt="travel_explore">
                    </a>
                </div>
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="html/destination-list.html">
                        <img class='bottom-nav-bar-img'src="/assets/bottom-nav/location_pin.svg" alt="travel_explore">
                    </a>
                </div>
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="#">
                        <img class='bottom-nav-bar-img'src="/assets/bottom-nav/map.svg" alt="travel_explore">
                    </a>
                </div>
                <div class="bottom-nav-bar-link-container">
                    <a class='bottom-nav-bar-anchor' href="#">
                        <img class='bottom-nav-bar-img'src="/assets/bottom-nav/profile.svg" alt="travel_explore">
                    </a>
                </div>
            </nav>
        `;
    }
}
  
customElements.define('bottom-nav-component', BottomNav);