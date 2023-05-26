import "./components/export"
import "./screens/export"


class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const dasboard = this.ownerDocument.createElement('app-dasboard');
        this.shadowRoot?.appendChild(dasboard);
    }
}

customElements.define('app-container', App)