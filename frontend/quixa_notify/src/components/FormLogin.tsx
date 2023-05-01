import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


/* eslint-disable prettier/prettier */
const FormLogin = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() =>{
        
    }) 
    const navigate = useNavigate()

    const handleSubmit =  (event: { preventDefault: () => void })=> {
        event.preventDefault()
        console.log(event)
        console.log(email, password)
    }


    return  (
        <div className="row d-felx align-items-center justify-content-envily m-5 p-5">
            <div className="col d-flex align-items-center justify-content-center">
                <img src="logo1.png" alt="" width={500}/>
            </div>
            <form className="col d-flex flex-column " onSubmit={handleSubmit}>
                <h2 className="mb-4">Login</h2>
                <div className="mb-3 from-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email  </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@exemplo.com"  
                            onChange={
                                (event)=>{
                                    setEmail(event.target.value)
                            }
                        }/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="inputPassword5" className="form-label">Senha</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" 
                            onChange={
                                (event)=>{
                                    setPassword(event.target.value)
                                }
                            }/>
                        <div id="passwordHelpBlock" className="form-text">
                        Sua senha tem que ter de 8 a 20 caractéres, letras maiúsculas, minusculas e números.
                        </div>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin