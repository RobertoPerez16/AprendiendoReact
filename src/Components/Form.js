import React, { useState, Fragment } from "react";
import {calcularTotal} from "../helpers.js";

const Form = ( {guardarCantidad, cantidad, plazo, guardarPlazo,total, guardarTotal, guardarCargando } ) => {

    const [error, guardarError] = useState(false);
    const calcularPresupuesto = e =>{
        e.preventDefault();
        if( cantidad === 0 || plazo === ''){
            guardarError(true);
            return ;
        }
        guardarError(false);
        guardarCargando(true);
        setTimeout(()=>{
            const total = calcularTotal(cantidad, plazo);
            guardarTotal(total);
            guardarCargando(false);
        }, 3000)


    }
    return(
        <Fragment>
            <form onSubmit={ calcularPresupuesto }>

                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={ e => guardarCantidad(parseInt(e.target.value)) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>

                        <select
                            className="u-full-width"
                            onChange={ e=> guardarPlazo(e.target.value)}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
                { error ? <p className="error">Todos los campos son obligatorios</p> : ''}

            </form>
        </Fragment>
    );
}

export default Form;