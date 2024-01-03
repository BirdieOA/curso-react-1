import imagen0 from "./images/rey_ataulfo.png";
import imagen1 from "./images/rey_sisebuto.png";
import "./App.css";
import { useRef } from "react";

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
    }
  }
  //  e.target.style.backgroundColor="peru";
  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiar = (j) => {
    if (j.target.src.includes("ataulfo")) {
      j.target.src = imagen1;
    } else {
      j.target.src = imagen0;
    }
  };
  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  };

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={imagen0} />
      </div>
      <input onChange={lectura} className="campo" />
    </>
  );
}

export default App;

//target es para decirme a que elemento le he hecho el envento onClick
//simpre que se use un useRef que es para referenciar un elemento seguido de el va un current
