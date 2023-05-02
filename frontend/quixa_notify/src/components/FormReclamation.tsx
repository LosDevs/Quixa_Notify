
const FormRaclamation = ()=> {
    return  (
        <>
        <form className="m-3 p-3" action="">
            <div className="form-group my-3" >
                <label htmlFor="inputTitleReclamation" className="form-label">Título</label>
                <input type="text" className="form-control" id="inputTitleReclamation" placeholder="Título" />
            </div>
            <div className="form-group my-3" >
                <label htmlFor="inputDescriptionReclamation" className="form-label">Descrição</label>
                <textarea className="form-control" id="inputDescriptionReclamation" placeholder="Descrição" rows={5} />
            </div>
            <div className="form-groupmy my-3" >
                <label htmlFor="inputResponsabilityReclamation" className="form-label">Possível solucionador</label>
                <input type="text" className="form-control" id="inputResponsabilityReclamation" placeholder="Possível solucionador" />
            </div>
            <a type="submit" className="btn btn-primary my-3">
                <img src="../../../node_modules/bootstrap-icons/icons/camera-fill.svg" alt="" />
                <img src="../../../node_modules/bootstrap-icons/icons/plus.svg" alt="" />
            </a>   

            <div className="form-group my-3">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>

        </form>
        </>
    )
}

export default FormRaclamation