import { loadCss } from "../../utilidades/style_general";
import style from "./style.css"


export default class login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {


        loadCss(this, style)
        

        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);


        const box = this.ownerDocument.createElement('div');
        box.textContent = ("login form:")
        box.classList.add("box");
        this.shadowRoot?.appendChild(box);

        const btn = this.ownerDocument.createElement("button");
        btn.classList.add("btn");
        btn.textContent = ("Send")
        box.appendChild(btn);

        const input = this.ownerDocument.createElement("input");
        btn.classList.add("imput");
        box.appendChild(input);

        const input2 = this.ownerDocument.createElement("input");
        btn.classList.add("imput2");
        box.appendChild(input2);



  }
       
}

customElements.define('app-login', login)