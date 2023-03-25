import './Nav.css'
import {Link} from 'react-router-dom';

function Navbar(){

    let logo = {
        source: require('../Assets/lemonlogo.png'),
        alt: 'Little Lemon Logo',
    }


    return(
            <div>
                <ul className={'styling'}>
                    <li className={'logo'}><img src={logo.source} alt={logo.alt} /></li>
                    <li className={'substyle'}><Link to="/">Home</Link></li>
                    <li className={'substyle'}><a href={"#about"}>About</a></li>
                    <li className={'substyle'}><Link to="/Menu">Menu</Link></li>
                    <li className={'substyle'}><Link to="/Reservations">Reservations</Link></li>
                    <li className={'substyle'}><Link to="/OrderOnline">Order Online</Link></li>
                    <li className={'substyle'}><Link to="/Login">Login</Link></li>
                </ul>
            </div>


    )
}

export default Navbar;