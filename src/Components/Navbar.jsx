import './Nav.css'

function Navbar(){

    let logo = {
        source: require('../Assets/lemonlogo.png'),
        alt: 'Little Lemon Logo',
    }


    return(
        <div>
            <ul className={'styling'}>
                <li className={'logo'}><img src={logo.source} alt={logo.alt} /></li>
                <li className={'substyle'}>Home</li>
                <li className={'substyle'}>About</li>
                <li className={'substyle'} >Menu</li>
                <li className={'substyle'} >Reservations</li>
                <li className={'substyle'} >Order Online</li>
                <li className={'substyle'}>Login</li>
            </ul>
        </div>
    )
}

export default Navbar;