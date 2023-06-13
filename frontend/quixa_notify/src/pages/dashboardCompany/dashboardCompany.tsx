import { useEffect, useState } from "react";

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
    const [reclamations , setReclamations] = useState<props[]>([]);

    useEffect(() => {
        const fetchProblema = async () => {
            try {
                const response = await fetch(`http://localhost:3000/problemas`);
                const data = await response.json();
                console.log(data)
                setReclamations(data);
            } catch (error) {
              console.error(error);
            }
        };

        fetchProblema();
    }, []);

    async function finalizarProblema(id: string) {
        try {
            await finalizarProblema(id);

            fetch('http://localhost:3000/problemas')
            .then(res => res.json())
            .then(data => setReclamations(data));
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <div className="p-5">
            <h2>Tela da Empresa</h2>
            <section className='reclamation-container'>
                {reclamations.map<any>((reclamation) => {
                    return <div key={reclamation.id} className='reclamation-item'>
                        <h3>{reclamation.titulo}</h3>

                        <div className='descricao'>
                            <h6>Descrição:</h6>
                            <p>{reclamation.descricao}</p>
                        </div>

                        <div className='endereco'>
                            <h6>Endereço:</h6>
                            <p>{reclamation.endereco}</p>
                        </div>
                        
                        <div className='footer-card'>

                            <div className='footer-card-tipo'>
                                <h6>Tipo do Problema:</h6>
                                <p>{reclamation.tipo_problema}</p>
                            </div>

                            <div className='footer-card-interacoes'>
                                <h6>Interações:</h6>
                                <p>{reclamation.votacao}</p>
                            </div>

                            <div className='footer-card-imagem'>
                                <img src={`http://localhost:3000/problemas/${reclamation.imagem}`} alt="imagem do problema" />
                            </div>
                        </div>

                        <p>Status: {reclamation.finalized ? 'Fechado' : 'Em Aberto'}</p>

                        {reclamation.finalized && 
                          <button className="btn btn-primary" onClick={() => finalizarProblema}>
                            FECHAR RECLAMAÇÃO
                          </button>
                        }
                    </div>
                })}
            </section>
        </div>
    )
}

export default DashboardCompany;