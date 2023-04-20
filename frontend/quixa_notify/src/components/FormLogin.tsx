/* eslint-disable prettier/prettier */
const FormLogin = ()=> {
    return  (
        <div className="row  w-100 p-3">
            <div className="col w-100 p-3">
                <img src="../../public/logo.png" alt="" width={200} height={200}/>
            </div>
            
            <div className="col d-flex  flex-column">
                <h2>Login</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </div>
            </div>
        </div>
    )
}

export default FormLogin