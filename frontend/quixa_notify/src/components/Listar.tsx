import { useEffect, useState } from "react";

const Listar = () => {
  type props = {
    id: string;
    titulo: string;
    longitude: string;
    latitude: string;
    endereco: string;
    tipo_problema: string;
    nivel_gavidade: number;
    descricao: string;
    votacao: number;
    imagem: string;
  }
  
  const [rep, setRep] = useState<props[]>([]);

  useEffect(() => {
    try {
      fetch('http://localhost:3000/problemas')
        .then(res => res.json())
        .then(data => setRep(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="card-container">
      {rep.map<any>(r => (
        <div className="listar" key={r.id}>
          <div className="card mb-3">
            <div className="row g-0 ">
              <div className="col-md-4">
                <img
                  src={`http://localhost:3000/problemas/${r.imagem}`}
                  className="img-fluid rounded-start h-100 w-100"
                  alt="..."
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h3>Titulo: {r.titulo}</h3>
                  <h5>Descrição: {r.descricao}</h5>
                  <p className="card-text">Votação: {r.votacao}</p>

                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Endereço: </strong>
                      {r.endereco}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listar;
