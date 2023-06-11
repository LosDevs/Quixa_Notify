import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import '../stylesCss/ReclamationDetails.css'
import { votar } from '../services/UserService';
import { addCommentInReclamation } from '../services/ReclamationService';

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

type propsComement = {
    id: number;
    idusuario: number;
    problemaId: number
    nome: string;
    comentario: string;
}

const ReclamationDetails = () => {
    const { id } = useParams();

    const [problema, setProblema] = useState<props>();
    const [commentsArray, setCommentsArray] = useState<propsComement[] | []>([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchProblema = async () => {
          try {
            const response = await fetch(`http://localhost:3000/problemas/problema/${id}`);
            const data = await response.json();
            setProblema(data);

            const comments = await fetch(`http://localhost:3000/problemas/comentario/${id}`)
            const data2 = await comments.json();
            setCommentsArray(data2.Comentario)


          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProblema();
    }, [id]);

    const handleInputChange = (event: any) => {
        setComment(event.target.value);
    };

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

    function addComment () {
        if(comment !== '') {
            const id = problema?.id ? problema?.id : null
            const postComment = addCommentInReclamation(comment, id).then(
                (res) => {
                    if(res?.success) {
                        setComment('');
                    }
                }
            );
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
                            <input 
                                type="text" 
                                placeholder='Adicione um comentário' 
                                value={comment}
                                onChange={handleInputChange}
                            />
                            <button onClick={addComment}>Enviar</button>

                            <div className='container-comentarios'>
                            
                                {commentsArray.map((comment, index) => (
                                    <div className="card mb-3" key={index}>
                                        <div className="card-header">
                                        Comentário
                                        </div>
                                        <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p>{comment.comentario}</p>
                                            <footer className="blockquote-footer">{comment.nome}</footer>
                                        </blockquote>
                                        </div>
                                    </div>
                                ))}

                                

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