import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { deletarProblema, finalizarProblema, votar } from '../services/UserService';
import { AuthContext } from '../context/AuthContext';
import { addCommentInReclamation } from '../services/ReclamationService';

import './ReclamationDetails.css';
import '../stylesCss/ReclamationDetails.css'

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
    usuarioId: number;
    finalized: boolean;
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

    const [userId, setUserId] = useState(-1);
    const [problema, setProblema] = useState<props>();
    const [commentsArray, setCommentsArray] = useState<propsComement[] | []>([]);
    const [comment, setComment] = useState('');
    const [refresh, setRefresh] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
      const userId = JSON.parse(localStorage.getItem('userId') || 'null');
      setUserId(userId);
      
      fetchProblema();
    }, [id, refresh]);

    const fetchProblema = async () => {
        try {
            const response = await fetch(`http://localhost:3000/problemas/problema/${id}`);
            const data = await response.json();
            setProblema(data);

            const comments = await fetch(`http://localhost:3000/problemas/comentario/${id}`)
            const data2 = await comments.json();
            setCommentsArray(data2.Comentario);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event: any) => {
        setComment(event.target.value);
    };

    async function vota() {
        try {
            const id: number = Number(problema?.id);
            const votacao: number = Number(problema?.votacao);
            await votar({ id, votacao })
            fetch('http://localhost:3000/problemas')
                .then(res => res.json())
                .then(data => {
                    const objetoEncontrado = data.find((objeto: any) => objeto.id === id);
                    setProblema(objetoEncontrado)
                })
        } catch (error) {

        }
    }

    function addComment() {
        if (comment !== '') {
            if (isAuthenticated) {
                const id = problema?.id ? problema?.id : null
                addCommentInReclamation(comment, id).then(
                    (res) => {
                        if (res?.success) {
                            setComment('');
                            setRefresh(!refresh);
                        }
                    }
                );
            } else {
                alert('É preciso estar logado para comentar')
            }
        } else {
            alert('É preciso adicionar um texto para comentar')
        }
    }
    
    async function finalizar(id: string) {
        try {
            await finalizarProblema(id);

            navigate('/my-reclamation');
        } catch (error) {
          console.error(error);
          alert("Não foi possível finalizar o problema");
        }
    }

    async function deleteProblema(id: string) {
        try {
            const response = await deletarProblema(id);

            if (response) navigate('/my-reclamation');
        } catch (error) {
          console.error(error);
          alert("Não foi possível deletar o problema");
        }
    }

    return (
        <div>
            {problema ? (
                <div className="container">
                    <div className="card mb-3 card-tamanho">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <figure>
                                    <img src={`http://localhost:3000/problemas/${problema.imagem}`} className="img-fluid rounded-start h-100 w-100" alt="..."></img>
                                    <figcaption>Imagem da rua {problema.endereco} com o problema de {problema.descricao}</figcaption>
                                </figure>
                            </div>

                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3>{problema.titulo}</h3>
                                    <h4>Descrição: {problema.descricao}</h4>
                                    <h4 className="card-text">Votação: {problema.votacao}</h4>

                                    <div className='position-absolute bottom-0 end-0 m-3'>
                                        <button className='btn btn-primary' onClick={() => vota()}>
                                            <FaThumbsUp />
                                        </button>

                                        {userId == problema.usuarioId &&
                                          <button style={{ marginLeft: '10px' }} className='btn btn-primary' onClick={() => deleteProblema(problema.id)}>
                                            <img src="../../public/trash-icon.png" alt="" width={24} />
                                          </button>
                                        }
                                    </div>

                                    <p className="card-text"><small className="text-muted"><strong>Endereço: </strong>{problema.endereco}</small></p>

                                    {!problema.finalized && userId == problema.usuarioId &&
                                      <button className="btn btn-secondary" onClick={() => finalizar(problema.id)}>
                                        FECHAR RECLAMAÇÃO
                                      </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-6 reclamation-details">
                            {problema ? (
                                <div className='content-container'>
                                    <div className='comments-container'>
                                        <h4>Comentários:</h4>
                                        <textarea
                                            placeholder='Adicione um comentário'
                                            value={comment}
                                            onChange={handleInputChange}
                                            className="form-control" id="exampleFormControlTextarea1">
                                        </textarea>

                                        <button className='btn btn-primary  btn-enviar' onClick={addComment}>Enviar</button>

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
