import React from "react";

const Resultado = ({total, plazo, cantidad}) =>{
    return(
      <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: { cantidad }</p>
            <p>El total es: {total}</p>
            <p> Su pago mensual es de: { parseInt(total/plazo) }</p>
            <p>El plazo es: { plazo }</p>
      </div>
    );
}

export default Resultado;