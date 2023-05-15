import React, { useState } from "react";
import Map from "./Map/Map";

const FormRaclamation = () => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    longitude: "",
    latitude: "",
    endereco: "",
    tipo_problema: "",
    nivel_gravidade: 0,
    votacao: 0,
    image: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]:
        name === "nivel_gravidade" || name === "votacao"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(formulario);
  };

  console.log(selectedLocation);

  return (
    <>
      <form className="m-3 p-3" onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="inputTitleReclamation" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitleReclamation"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            placeholder="Título"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputEndereco" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEndereco"
            name="endereco"
            value={formulario.endereco}
            onChange={handleChange}
            placeholder="Endereço"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputTipoProblema" className="form-label">
            Tipo de Problema
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTipoProblema"
            name="tipo_problema"
            value={formulario.tipo_problema}
            onChange={handleChange}
            placeholder="Tipo de Problema"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputNivelGravidade" className="form-label">
            Nível de Gravidade
          </label>
          <input
            type="number"
            className="form-control"
            id="inputNivelGravidade"
            name="nivel_gravidade"
            value={formulario.nivel_gravidade}
            onChange={handleChange}
            placeholder="Nível de Gravidade"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputVotacao" className="form-label">
            Votação
          </label>
          <input
            type="number"
            className="form-control"
            id="inputVotacao"
            name="votacao"
            value={formulario.votacao}
            onChange={handleChange}
            placeholder="Votação"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputImage" className="form-label">
            Imagem
          </label>
          <input
            type="text"
            className="form-control"
            id="inputImage"
            name="image"
            value={formulario.image}
            onChange={handleChange}
            placeholder="Imagem"
          />
        </div>
        <div className="form-group my-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormRaclamation;
