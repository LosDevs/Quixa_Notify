import { useEffect, useState } from 'react';
import { ICoordinates } from '../types/ICoordinates';
import { votar } from "../services/UserService";
import { useNavigate } from "react-router-dom";

import FormRaclamation from './FormReclamation';

interface ReclamationOffCanvasProps {
  location: ICoordinates,
}

const ReclamationOffcanvas = ({ location }: ReclamationOffCanvasProps) => {
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

    const navigate = useNavigate();

    async function buttonListar(event: any) {
        event.preventDefault();
        try {
            fetch('http://localhost:3000/problemas')
                .then(res => res.json())
                .then(data => setRep(data))
        } catch (error) {
            console.error(error);
        }
    }

    // async function vota(voto: any) {
    //     try {
    //         await votar(voto)
    //         fetch('http://localhost:3000/problemas')
    //             .then(res => res.json())
    //             .then(data => setRep(data))
    //     } catch (error) {

    //     }
    // }

    function navigateForDetailsReclamation(id: any) {
        navigate(`/reclamation/${id}`)
    }

    const [isCompany, setIsCompany] = useState(false);

    useEffect(() => {
      const isCompany = JSON.parse(localStorage.getItem('isCompany') || 'false');
      setIsCompany(isCompany);
    }, []);

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
          { !isCompany &&
            <button className="btn btn-primary mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasReclamation" aria-controls="offcanvasReclamation">Fazer reclamação</button>
          }

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasReclamation" aria-labelledby="offcanvasReclamationLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasReclamation">Cadastrar Reclamação</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <FormRaclamation location={location}></FormRaclamation>
                </div>
            </div>

            <button className="btn btn-secondary mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasList" aria-controls="offcanvasList" onClick={buttonListar}>Listar reclamações</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasList" aria-labelledby="offcanvasListLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasListLabel">Reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {rep.map<any>((rep) => {
                        return <div key={rep.id}>
                            <div className="card">
                                <img width={400} height={300} src={'http://localhost:3000/problemas/' + rep.imagem} alt=" " className="card-img-top"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{rep.titulo}</h5>
                                    <p className="card-text">{rep.descricao}.</p>
                                    <a onClick={() => navigateForDetailsReclamation(rep.id)} className="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default ReclamationOffcanvas;
