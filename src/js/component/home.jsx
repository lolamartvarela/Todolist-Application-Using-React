import React, { useState } from "react";
// create your first component
const Home = () => {
  const [Datos, setDatos] = useState("");
  const [save, setSave] = useState([]);


  function enviarDatos(e) {
    e.preventDefault();
    setSave(save.concat(Datos));
    setDatos("");
  }

  function eliminarDatos(eliminarli) {
    const nuevasTareas = save.filter(function (item, index) {
      return index !== eliminarli;
    });

    setSave(nuevasTareas);
  }

  return (
    <>
    <div className="container-fluid border border-primary col-md-8 mt-4">
      <div>
        <p className="fst-italic fw-light fs-1 d-flex  justify-content-center col-md-4 offset-md-4 mt-4">
          todos
        </p>
      </div>
      <div className="container col-md-4 offset-md-4 mt-4">
        <div className="input-group mb-3 mt-3">
          <input
            id="exampleDatoss"
            onChange={(e) => {
              setDatos(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
            value={Datos}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="enviar"
            onClick={enviarDatos}
          >
            Enviar
          </button>
        </div>

        <ul>

          {save.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
              <button
                className="btn"
                type="button"
                onClick={() => eliminarDatos(index)}
              >
                <i className="fas fa-trash-alt" />
              </button>
            </li>
          ))}{" "}
        
        </ul>
        </div>
        </div>
    </>
  );
};

export default Home;
