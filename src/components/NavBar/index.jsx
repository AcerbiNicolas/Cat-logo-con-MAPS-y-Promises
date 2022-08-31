import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import Cont from "../ItemCount";

const onAdd = (quantity) =>{
    (console.log(`compro: ${quantity}`))
}
const NavBar = () => {

    
    return(
        <nav class="container">
            <div class="row align-items-start">
                <blockquote class="blockquote">
                    <h2>MERCADO GLOBAL</h2>
                    <a href="#" class="link-dark col-2 btn">Inicio</a>
                    <a href="#" class="link-dark col-2 btn" > Articulos</a>
                    <a href="#" class="link-dark col-2 btn"> Ayuda</a>
                    <a href="#" class="link-dark col-2 btn"> Somos</a>
                    <CartWidget />
                </blockquote>
                <Cont stock={5} initial={1}/>
                
            </div>
        </nav>
        
    )
}

export default NavBar;