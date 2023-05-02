import FormRaclamation from './FormReclamation'
import Map from './Map/Map'

const ReclamationOffcanvas = ()=> {
    return (
        <div className='m-3'>  
            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasList" aria-controls="offcanvasList">Listar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasList" aria-labelledby="offcanvasListLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasListLabel">Reclamações</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='card my-3'>
                        <img src="buracorua.jpg" alt="" />
                        <div className='card-header'>
                            <p>Raclamação 1</p>
                        </div>
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium saepe sapiente, et in soluta ipsa. Officia, porro deleniti vitae, ipsa aliquam quibusdam incidunt officiis ea sapiente suscipit a totam!</p>
                        </div>    
                    </div>
                    <div className='card my-3'>
                        <img src="lixorua.jpg" alt="" />
                        <div className='card-header'>
                            <p>Raclamação 2</p>
                        </div>
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium saepe sapiente, et in soluta ipsa. Officia, porro deleniti vitae, ipsa aliquam quibusdam incidunt officiis ea sapiente suscipit a totam!</p>
                        </div>    
                    </div>
                    <div className='card my-3'>
                        <img src="luz.jpg" alt="" />
                        <div className='card-header'>
                            <p>Raclamação 3</p>
                        </div>
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium saepe sapiente, et in soluta ipsa. Officia, porro deleniti vitae, ipsa aliquam quibusdam incidunt officiis ea sapiente suscipit a totam!</p>
                        </div>    
                    </div>
                    <div className='card my-3'>
                        <img src="buracorua.jpg" alt="" />
                        <div className='card-header'>
                            <p>Raclamação 4</p>
                        </div>
                        <div className='card-body'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium saepe sapiente, et in soluta ipsa. Officia, porro deleniti vitae, ipsa aliquam quibusdam incidunt officiis ea sapiente suscipit a totam!</p>
                        </div>    
                    </div>
                </div>
            </div>

            <button className="btn btn-primary m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasReclamation" aria-controls="offcanvasReclamation">Reclamar</button>

            <div className="offcanvas offcanvas-end" data-bs-show="true" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasReclamation" aria-labelledby="offcanvasReclamationLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasReclamation">Cadastrar Reclamação</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <FormRaclamation></FormRaclamation>
                </div>
            </div>
        </div>
    )
}

export default ReclamationOffcanvas