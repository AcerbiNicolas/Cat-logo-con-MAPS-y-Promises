import React, { useState } from 'react';

const Cont = ({stock, initial}) => {
    const [carrito, setCarrito] = useState(initial)

    const addNumber = () => {
        if (carrito < stock) {
            setCarrito(carrito + 1)
        }
    }
    const restNumber = () => {
        if (carrito > 1) {
            setCarrito(carrito - 1)
        }
    }
    return(
        <div>
            <div class="qty mt-5">
                <h3>Usted tiene {carrito} productos en su carrito, quedan {stock} en total</h3>
            </div>
            <div>
                <button class="btn btn-dark" onClick={restNumber}>-</button>
                <button class="btn btn-dark" onClick={addNumber}>+</button>
            </div>

            <div>
                <button class="btn btn-dark" onClick={() =>console.log("llena el carro")}>
                   Agregar al carrito
                </button>
                    
                </div>
            
        </div>
        
    )
}
export default Cont;