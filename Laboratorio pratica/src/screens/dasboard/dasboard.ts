import { loadCss } from "../../utilidades/style_general";
import style from "./style.css"

export default class dasboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        loadCss(this, style)
       

        const principal = this.ownerDocument.createElement('section');
        principal.classList.add("main_box");
        this.shadowRoot?.appendChild(principal);
        

        const second = this.ownerDocument.createElement('div');
        second.classList.add("second_box");
        principal.appendChild(second);

        const login_box = this.ownerDocument.createElement('div');
        login_box.classList.add("login_box");
        login_box.textContent = ("login form:")
        second.appendChild(login_box);

        const login = this.ownerDocument.createElement('app-login');
        login.classList.add("login");
        login_box.appendChild(login);

        const product_box = this.ownerDocument.createElement('div');
        product_box.classList.add("product_box");
        product_box.textContent = ("Product form:")
        second.appendChild(product_box);

        const product = this.ownerDocument.createElement('app-product');
        product.classList.add("product");
        product_box.appendChild(product);

        const producto_box = this.ownerDocument.createElement('div');
        producto_box.classList.add("producto_box");
        product_box.textContent = ("Product form:")
        second.appendChild(producto_box);

        const producto = this.ownerDocument.createElement('app-producto');
        producto.classList.add("producto");
        producto_box.appendChild(producto);











    }
}

customElements.define('app-dasboard', dasboard)