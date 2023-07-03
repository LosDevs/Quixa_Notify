import { useEffect, useState } from "react";
import './Listar.css'


const Listar = () => {
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


    useEffect(() => {
        try {
            fetch('http://localhost:3000/problemas')
                .then(res => res.json())
                .then(data => setRep(data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="card card-principal">
            {rep.map<any>(r => {
                return <div className="listar" key={r.id}>

                    <div className="card mb-3">
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <img src={`http://localhost:3000/problemas/${r.imagem}`} className="img-fluid rounded-start h-100" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3>Titulo : </h3>
                                    <h5 className="card-title">{r.titulo}</h5>
                                    <h4>Descrição : </h4>
                                    <p className="card-text">{r.descricao}</p>
                                    <div className='position-absolute top-0 end-0 m-2'>
                                        <h2 className="card-text">Votação: {r.votacao}</h2>
                                    </div>
                                    <p className="card-text"><small className="text-muted"><strong>Endereço: </strong>{r.endereco}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            })}
        </div>
    )
}

export default Listar