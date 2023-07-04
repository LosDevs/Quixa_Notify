import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { votar } from '../services/UserService';
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
    const [refresh, setRefresh] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
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

        fetchProblema();
    }, [id, refresh]);

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

    return (
        <div>
            {problema ? (
                <div className="container">
                    <div className="card mb-3 card-tamanho">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`http://localhost:3000/problemas/${problema.imagem}`} className="img-fluid rounded-start h-100 w-100" alt="..."></img>
                            </div>

                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3>Titulo: {problema.titulo}</h3>
                                    <h4>Descrição: {problema.descricao}</h4>
                                    <div className='position-absolute top-0 end-0 m-2'>
                                        <h2 className="card-text">Votação: {problema.votacao}</h2>
                                        <button className='btn btn-primary position-absolute  end-0 m-2' onClick={() => vota()}>
                                            <FaThumbsUp />
                                        </button>
                                    </div>

                                    <p className="card-text"><small className="text-muted"><strong>Endereço: </strong>{problema.endereco}</small></p>
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
