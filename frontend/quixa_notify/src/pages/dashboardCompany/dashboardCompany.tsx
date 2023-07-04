import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./dashboardCompany.css";

type props =  {
    id : string;
    titulo: string;
    longitude: string;
    latitude: string;
    endereco: string;
    tipo_problema: string;
    nivel_gavidade: number;
    descricao : string;
    votacao: number;
    imagem: string;
    finalized: boolean;
}
const DashboardCompany = () => {
    const [reclamations, setReclamations] = useState<props[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProblema = async () => {
            try {
                const response = await fetch(`http://localhost:3000/problemas`);
                const data = await response.json();
                setReclamations(data);
            } catch (error) {
              console.error(error);
            }
        };

        fetchProblema();
    }, []);

    function navigateForDetailsReclamation(id: any) {
      navigate(`/reclamation/${id}`);
    }

    return (
        <div className="p-5">
            <h2>Tela da Empresa</h2>
            <section className='reclamation-container'>
                {reclamations.map<any>((reclamation) => {
                  return <div key={reclamation.id} className='reclamation-item'>
                    <h3 className='mb-4'>{reclamation.titulo}</h3>

                    <div className='row mb-2'>
                      <h5 className='col'>Descrição: {reclamation.descricao}</h5>
                    </div>
                    
                    <div className="row mb-2">
                      <h5 className='col'>Endereço: {reclamation.endereco}</h5>
                    </div>

                    <div className='row mb-2'>
                      <h5 className='col-6'>Tipo do Problema: {reclamation.tipo_problema}</h5>
                      <h5 className='col-3'>Interações: {reclamation.votacao}</h5>
                    </div>

                    <div className='footer-card-imagem mb-3'>
                      <img src={`http://localhost:3000/problemas/${reclamation.imagem}`} alt="imagem do problema" />
                    </div>

                    <p>Status: {reclamation.finalized ? 'Fechado' : 'Em Aberto'}</p>
                
                    <a onClick={() => navigateForDetailsReclamation(reclamation.id)} className="btn btn-primary">
                      VER MAIS
                    </a>
                  </div>
                })}
            </section>
        </div>
    )
}

export default DashboardCompany;