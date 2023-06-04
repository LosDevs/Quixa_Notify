import { useEffect, useState } from 'react';
import { ICoordinates } from '../types/ICoordinates'
import FormRaclamation from './FormReclamation'
import Map from './Map/Map'

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


    return (
        <div className='m-3'>  
            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasList" aria-controls="offcanvasList" onClick={buttonListar}>Listar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasList" aria-labelledby="offcanvasListLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasListLabel">Reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <ul>{rep.map<any>((rep) => {
                {console.log(rep)}
                    return <li key={rep.id}>
                        <div className={rep.titulo}>
                        <img src={'http://localhost:3000/problemas/'+rep.imagem} alt="" />
                        <div className='card-header'>
                            <p>{rep.titulo}</p>
                        </div>
                        <div className='card-body'>
                            <p>{rep.nivel_gavidade}</p>
                            <p>{rep.votacao}</p>
                            <p>{rep.descricao}</p>
                        </div>    
                    </div>
                    </li>
                })}</ul>
                    
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