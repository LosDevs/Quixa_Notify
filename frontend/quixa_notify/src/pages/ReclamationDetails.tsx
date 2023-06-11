import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import '../stylesCss/ReclamationDetails.css'
import { votar } from '../services/UserService';

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

const ReclamationDetails = () => {
    const { id } = useParams();

    const [problema, setProblema] = useState<props>();

    useEffect(() => {
        const fetchProblema = async () => {
          try {
            const response = await fetch(`http://localhost:3000/problemas/problema/${id}`);
            const data = await response.json();
            setProblema(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProblema();
    }, [id]);

    async function vota() {
        try {
            const id: number = Number(problema?.id);
            const votacao: number = Number(problema?.votacao);
            await votar({id, votacao})
            fetch('http://localhost:3000/problemas')
            .then(res => res.json())
            .then(data => {
                const objetoEncontrado = data.find((objeto: any) => objeto.id === id);
                setProblema(objetoEncontrado)
            })
        } catch (error) {
            
        }
    } 

    return (
        <div>
        {problema ? (
            <div className="container">
              <div className="row justify-content-center">
                    <div className="col-md-6 reclamation-details">
                    {problema ? (
                        <div className='content-container'>
                            <h1>Detalhes da Reclamação: {problema.titulo}</h1>
                            
                            <div className='img-container'>
                                <img src={`http://localhost:3000/problemas/${problema.imagem}`} alt="imagem do problema"/>
                            </div>

                            <h4>Descrição:</h4>
                            <p>{problema.descricao}</p>

                            <h4>Endereço:</h4>
                            <p>{problema.endereco}</p>

                            <h4>Interações:</h4>
                            <p>{problema.votacao} <button onClick={() => vota()}><FaThumbsUp/></button></p>

                            <h4>Coméntários:</h4>
                            <input type="text" placeholder='Adicione um comentário' />

                            <div className='container-comentarios'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, totam. Est quae dolore dolor alias sapiente laborum a. Dolor, impedit?</p>
                            </div>
                        </div>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </div>
                </div>
            </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    )
}

export default ReclamationDetails;