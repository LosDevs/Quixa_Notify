import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { deletarProblema, finalizarProblema } from "../../services/UserService";

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
  finalized: boolean;
  usuarioId: number;
}

const MyReclamation = () => {
    const [reclamations , setReclamations] = useState<props[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
      const idUser = JSON.parse(localStorage.getItem('userId') || 'null');
      const isCompany = JSON.parse(localStorage.getItem('isCompany') || 'null');

      if(!idUser || isCompany) {
        navigate('/login');
      }

      const dataFetch = async () => {
        try {
          await fetch('http://localhost:3000/problemas')
          .then(res => res.json())
          .then(data => {
            if(idUser) {
              const filteredReclamations = data.filter(
                (reclamation: any) => reclamation.usuarioId == idUser
              );

              setReclamations(filteredReclamations);
            }
          });
        } catch (error) {
          console.error(error);
        } 
      } 

      dataFetch();
    }, []);

    async function finalizar(id: string) {
        try {
            await finalizarProblema(id);

            const response = await fetch(`http://localhost:3000/problemas`);
            const data = await response.json();
            setReclamations(data);
        } catch (error) {
          console.error(error);
          alert("Não foi possível finalizar o problema");
        }
    }

    async function deleteProblema(id: string) {
        try {
            await deletarProblema(id);

            const response = await fetch(`http://localhost:3000/problemas`);
            const data = await response.json();
            setReclamations(data);
        } catch (error) {
          console.error(error);
          alert("Não foi possível deletar o problema");
        }
    }

    function navigateForDetailsReclamation(id: any) {
      navigate(`/reclamation/${id}`);
    }

    const playDescription = () => {
      const images = document.getElementById('problemaImage');
      const image = images as HTMLImageElement; 
  
      if (image) {
        const desc = new SpeechSynthesisUtterance(image.alt);
        window.speechSynthesis.speak(desc);
      }
  };

    return (
      <div className='p-5'>
        <h2>Minhas Reclamações</h2>
        <section className='reclamation-container'>
          {reclamations.map<any>((reclamation) => {
            return <div key={reclamation.id} className='reclamation-item'>
              <div className="title mb-4">
                <h3>{reclamation.titulo}</h3>
                <button className='btn btn-primary' onClick={() => deleteProblema(reclamation.id)}>
                  <img src="trash-icon.png" alt="" width={24} />
                </button>
              </div>

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
                <figure onClick={playDescription}>
                  <img id='problemaImage' src={`http://localhost:3000/problemas/${reclamation.imagem}`} 
                    alt={`Imagem da rua ${reclamation.endereco} com o problema de ${reclamation.descricao}`} />
                  <figcaption>Imagem da rua {reclamation.endereco} com o problema de {reclamation.descricao}</figcaption>
                </figure>
              </div>

              <div className='row g-2'>
                <a onClick={() => navigateForDetailsReclamation(reclamation.id)} className="btn btn-primary">
                  VER MAIS
                </a>

                {!reclamation.finalized &&
                  <button className="btn btn-secondary" onClick={() => finalizar(reclamation.id)}>
                    FECHAR RECLAMAÇÃO
                  </button>
                }
              </div>
            </div>
          })}
      </section>
    </div>
  );
}

export default MyReclamation;
