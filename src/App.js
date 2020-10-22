import React, {useState} from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form";
import Mensaje from "./Components/mensaje";
import Resultado from "./Components/resultado";
import Spinner from "./Components/spinner";
function App() {
    //Definir el State//
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo ] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);
    let componente;
    if(cargando){
        componente = <Spinner/>

    }else if(total === 0){
        componente = <Mensaje/>
    }else{
        componente  = <Resultado
                        total={total}
                        plazo={plazo}
                        cantidad={cantidad}/>
    }



  return (
    <div className="App">
      <Header titulo="Cotizador de Préstamos" />
      <div className="container">
          <Form
              cantidad={cantidad}
              guardarCantidad={guardarCantidad}
              plazo={plazo} guardarPlazo={guardarPlazo}
              total={total}
              guardarTotal={guardarTotal}
              guardarCargando={guardarCargando}

          />
          <div className="mensajes">
              { componente }
          </div>


      </div>
    </div>
  );
}

export default App;
