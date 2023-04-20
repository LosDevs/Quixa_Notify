import { useState } from "react"
import { useNavigate } from "react-router-dom"

/* eslint-disable prettier/prettier */
const FormLogin = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    console.log(email, password)

    const handleSubmit =  (event)=> {
        event.preventDefault()
        console.log(event)
    }


    return  (
        <div className="row  w-100 p-3">
            <div className="col w-100 p-3">
                <img src="../../public/logo.png" alt="" width={200} height={200}/>
            </div>
            <form className="col d-flex flex-column " onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="mb-3 from-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  
                            onChange={
                                (event)=>{
                                    setEmail(event.target.value)
                            }
                        }/>
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" 
                            onChange={
                                (event)=>{
                                    setPassword(event.target.value)
                                }
                            }/>
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long
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