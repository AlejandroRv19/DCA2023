export default class producto extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        
        const box = this.ownerDocument.createElement('div');
        box.textContent = ("Product form:")
        box.classList.add("box");
        this.shadowRoot?.appendChild(box);

        const btn2 = this.ownerDocument.createElement("button");
        btn2.classList.add("btn");
        btn2.textContent = ("send")
    }
}

customElements.define('app-producto', producto)