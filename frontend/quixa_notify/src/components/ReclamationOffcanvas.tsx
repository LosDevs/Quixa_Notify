import { useEffect, useState } from 'react';
import { ICoordinates } from '../types/ICoordinates'
import FormRaclamation from './FormReclamation'
import Map from './Map/Map'
import { votar } from "../services/UserService";
import { api } from "../services/api";

interface ReclamationOffCanvasProps {
    location: ICoordinates 
}


const ReclamationOffcanvas = ({location}: ReclamationOffCanvasProps)=> {

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

    const [rep , setRep] = useState<props[]>([]);
    
    async function buttonListar(event : any) {
        event.preventDefault();
        try {
            fetch('http://localhost:3000/problemas')
            .then(res => res.json())
            .then(data => setRep(data))
        } catch (error) {
            console.log(error)
        }
    }

    async function vota(voto:any) {
        try {
            await votar(voto)
            fetch('http://localhost:3000/problemas')
            .then(res => res.json())
            .then(data => setRep(data))
        } catch (error) {
            
        }
    }   


    return (
        <div className='m-3'>  
            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasList" aria-controls="offcanvasList" onClick={buttonListar}>Listar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasList" aria-labelledby="offcanvasListLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasListLabel">Reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                {rep.map<any>((rep) => {
                    return <div key={rep.id}>
                        <div className="card">
                        <img width={400} height={300} src={'http://localhost:3000/problemas/'+rep.imagem} alt=" " className="card-img-top"></img>
                        <div className="card-body">
                            <h5 className="card-title">{rep.titulo}</h5>
                            <p className="card-text">{rep.descricao}.</p>
                            <a onClick={() => vota(rep)}className="btn btn-primary">Votação {rep.votacao}</a>
                        </div>
                        </div>
                    </div>
                })}
                    
                </div>
            </div>

            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasReclamation" aria-controls="offcanvasReclamation">Reclamar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasReclamation" aria-labelledby="offcanvasReclamationLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasReclamation">Cadastrar Reclamação</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <FormRaclamation location={location}></FormRaclamation>
                </div>
            </div>
        </div>
    )
}

export default ReclamationOffcanvas