export default class product extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        
        
        const box_main = this.ownerDocument.createElement('div');
        box_main.textContent = ("ProduCT LIST:")
        box_main.classList.add("box");
        this.shadowRoot?.appendChild(box_main);

        const box = this.ownerDocument.createElement('div');
        box.textContent = ("Product Name:")
        box.classList.add("box");
        this.shadowRoot?.appendChild(box);

        const box2 = this.ownerDocument.createElement('div');
        box2.textContent = ("Product Name:")
        box2.classList.add("box_2");
        this.shadowRoot?.appendChild(box2);

        const box3 = this.ownerDocument.createElement('div');
        box3.textContent = ("Product Name:")
        box3.classList.add("box_3");
        this.shadowRoot?.appendChild(box3);

        const box4 = this.ownerDocument.createElement('div');
        box4.textContent = ("Product Name:")
        box4.classList.add("box_4");
        this.shadowRoot?.appendChild(box4);
    }





    }
    


customElements.define('app-product', product)