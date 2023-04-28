import Map from './Map/Map'

const ReclamationForm = ()=> {
    return (
        // Tipos de reclamação
        <div className='m-3'>
            <h1>Formulário de Reclamação</h1>
            <Map></Map>     
            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasList" aria-controls="offcanvasList">Listar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasList" aria-labelledby="offcanvasListLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasListLabel">offcanvas com lista de reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Lista aqui as reclamações que aparecem no mapa.</p>
                </div>
            </div>

            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasReclamation" aria-controls="offcanvasReclamation">Reclamar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasReclamation" aria-labelledby="offcanvasReclamationLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasReclamation">offcanvas com formulário de reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Fazer o formulário de reclamaçãoa aqui.</p>
                </div>
            </div>
        </div>
    )
}

export default ReclamationForm