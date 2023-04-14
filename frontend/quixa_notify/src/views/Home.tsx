import {Link} from 'react-router-dom'

const Home = ()=> {
    return (
        <div>
            <h1>HOME PAGE</h1>

            <button type="submit" className='btn btn-lg' >
                <Link to='reclameitionform'>
                    <img src="../../node_modules/bootstrap-icons/icons/exclamation-diamond-fill.svg" alt="" width={"50"}/>
                </Link>
            </button>
            
        </div>        
    )
}

export default Home