import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link } from 'react-router-dom';
import ComponentA from './component/componentA'
import ComponentB from './component/componentB'

const App = () => {
    return(
        <div>
            <nav className='navbar navbar-expand bg-gray justify-content-center'>
                <div className='navbar-nav'>
                    <li className='nav-item mx-5'>
                        <Link to={"https://es.react.dev"} className='nav-link'>Inicio</Link>
                    </li>
                    <li className='nav-item mx-5'>
                        <Link to={""} className='nav-link'>Aplicaciones</Link>
                    </li>
                    <li className='nav-item mx-5'>
                        <Link to={""} className='nav-link'>Características</Link>
                    </li>
                    <li className='nav-item mx-5'>
                        <Link to={""} className='nav-link'>Proyectos</Link>
                    </li>
                    <li className='nav-item mx-5'>
                        <Link to={""} className='nav-link'>Google</Link>
                    </li>
                </div>
            </nav>
            <div>
                <ComponentA />
            </div>
            <div>
                <ComponentB />
            </div>
        </div>
    );
}

export default App;
