import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './MyReclamation.css';

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
}

const MyReclamation = () => {
    const [reclamations , setReclamations] = useState<props[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const idUser = localStorage.getItem('userId');
        const isCompany = localStorage.getItem('isCompany');
        if(!idUser || isCompany) {
            navigate('/login')
        }

        const dataFetch = async () => {
            try {
                await fetch('http://localhost:3000/problemas')
                .then(res => res.json())
                .then(data => {
                    const idUser = localStorage.getItem('userId');

                    if(idUser) {
                        const filteredReclamations = data.filter((reclamation: any) => reclamation.usuarioId == idUser);
                        setReclamations(filteredReclamations);
                    }
                    
                })
            } catch (error) {
                console.log(error)
            } 
        } 

        dataFetch();
    }, []);

    return (
        <div className='p-5'>
            <h2>Minhas Reclamações</h2>
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
                    </div>
                })}
            </section>
        </div>
    )
}

export default MyReclamation;
