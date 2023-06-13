import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const dataFetch = async () => {
            try {
                await fetch('http://localhost:3000/problemas')
                .then(res => res.json())
                .then(data => {
                    const idUser = localStorage.getItem('userId');

                    if(idUser) {
                        const filteredReclamations = data.filter((reclamation: any) => reclamation.usuarioId == idUser);
                        setReclamations(filteredReclamations);
                        console.log(filteredReclamations);
                    }
                    
                })
            } catch (error) {
                console.log(error)
            } 
        } 

        dataFetch();
    }, []);

    

    return (
        <>
            <h2>Minhas Reclamações</h2>

            <section className='reclamation-container'>
                {reclamations.map<any>((reclamation) => {
                    return <div key={reclamation.id} className='reclamation-item'>
                        <h3>{reclamation.titulo}</h3>
                        <p className='descricao'>{reclamation.descricao}</p>
                        <p className='endereco'>{reclamation.endereco}</p>
                    </div>
                })}
            </section>
            
        </>
    )
}

export default MyReclamation;