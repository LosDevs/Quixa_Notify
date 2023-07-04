import { useEffect, useState, useContext } from "react";
import { ICoordinates } from "../types/ICoordinates";
import { IProblema } from "../types/IProblema";
import { create } from "../services/ReclamationService";
import { AuthContext } from "../context/AuthContext";

interface FormRaclamationProps {
  location: ICoordinates 
}

export enum TipoProblema {
  BURACOS_VIAS = "Buracos nas vias",
  ILUMINACAO_PUBLICA = "Iluminação pública",
  VANDALISMO_PICHACOES = "Vandalismo e pichações",
  FALTA_COLETA_LIXO = "Falta de coleta de lixo",
  FALTA_MANUTENCAO_PARQUES = "Falta de manutenção",
  PROBLEMAS_TRANSPORTE_PUBLICO = "transporte público",
  INFILTRACOES_VAZAMENTOS_AGUA = "Infiltrações e vazamentos",
  FALTA_ACESSIBILIDADE = "Falta de acessibilidade",
  POLUICAO_SONORA = "Poluição sonora",
  FALTA_SIGNALIZACAO_ADEQUADA = "Falta de sinalização",
}

const FormRaclamation = ({location}: FormRaclamationProps) => {
  const [formulario, setFormulario] = useState<IProblema>({
    titulo: "",
    longitude: "",
    latitude: "",
    endereco: "",
    tipo_problema: "",
    nivel_gravidade: 0,
    votacao: 0,
    descricao: "",
    image: [],
    imagePreview: null,
  });

  const [isCompany, setIsCompany] = useState(false);
  const [image, setImage] = useState("");

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    setFormulario({
      ...formulario,
      longitude: location.lng,
      latitude: location.lat,
    });
  }, [location]);

  useEffect(() => {
    const isCompany = JSON.parse(localStorage.getItem("isCompany") || "false");
    setIsCompany(isCompany);
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "image") {
      setFormulario((prevState) => ({
        ...prevState,
        [name]: event.target.files[0],
      }));
    } else {
      setFormulario((prevState) => ({
        ...prevState,
        [name]:
          name === "nivel_gravidade" || name === "votacao"
            ? Number(value)
            : value,
      }));
    }
  };

  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!isAuthenticated) {
      alert("É preciso estar logado para fazer uma reclamação");
    }

    const formData = new FormData();

    formData.append("imagem", image);
    formData.append("titulo", formulario.titulo);
    formData.append("longitude", formulario.longitude);
    formData.append("latitude", formulario.latitude);
    formData.append("endereco", formulario.endereco);
    formData.append("tipo_problema", formulario.tipo_problema);
    formData.append("descricao", formulario.descricao);
    formData.append(
      "nivel_gravidade",
      formulario.nivel_gravidade.toString()
    );
    formData.append("votacao", formulario.votacao.toString());

    await create(formData)
    .then(() => {
      // window.location.reload();
    })
    .catch(() => {
      alert("Não foi possível adicionar essa reclamação!");
    });

    const newForm = {
      titulo: "",
      longitude: "",
      latitude: "",
      endereco: "",
      tipo_problema: "",
      nivel_gravidade: 0,
      votacao: 0,
      descricao: "",
      image: [],
      imagePreview: null,
    };

    setFormulario(newForm);
  };

  return (
    <>
      <form className="m-3 p-3" onSubmit={handleSubmit}>
        {!isAuthenticated &&
          <span style={{ color: 'red' }}>É preciso estar logado para fazer uma reclamação</span>
        }

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
          <label htmlFor="inputDescricao" className="form-label">
            Descriçao
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescricao"
            name="descricao"
            value={formulario.descricao}
            onChange={handleChange}
            placeholder="descricao"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputLatitude" className="form-label">
            Latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLatitude"
            name="inputLatitude"
            disabled
            value={formulario.latitude}
            placeholder="Latitude"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="inputLongitude" className="form-label">
          Longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLongitude"
            name="inputLongitude"
            value={formulario.longitude}
            disabled
            placeholder="Longitude"
          />
        </div>
        
        <div className="form-group my-3">
          <label htmlFor="inputTipoProblema" className="form-label">
            Tipo de Problema
          </label>
          <select
            className="form-control"
            id="inputTipoProblema"
            name="tipo_problema"
            value={formulario.tipo_problema}
            onChange={handleChange}
          >
            <option value="">Selecione o tipo de problema</option>
            {Object.values(TipoProblema).map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group my-3">
          <label htmlFor="inputNivelGravidade" className="form-label">
            Nível de Gravidade
          </label>
          <input
            type="number"
            max={10}
            min={0}
            className="form-control"
            id="inputNivelGravidade"
            name="nivel_gravidade"
            value={formulario.nivel_gravidade}
            onChange={handleChange}
            placeholder="Nível de Gravidade"
          />
        </div>
        {/* <div className="form-group my-3">
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
        </div> */}
        <div className="form-group my-3">
          <label htmlFor="inputImage" className="form-label">
            Imagem
          </label>
          <input
            type="file"
            className="form-control"
            id="inputImage"
            name="image"
            onChange={handleImageChange}
            placeholder="Imagem"
          />
        </div>
        <div className="form-group my-3">
          <button disabled={isCompany || !isAuthenticated} type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormRaclamation;
