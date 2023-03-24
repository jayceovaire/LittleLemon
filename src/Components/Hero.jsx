
function Hero() {

    let container = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '15%',
        marginLeft: '15%',
    }

    let hstyles = {
        textAlign: 'left',
        marginTop: '5%',
        fontSize: '3rem',
    }

    let pstyles = {
        textAlign: 'left',
        marginTop: '5%',
    }

    let bstyles = {
        background: '#F4CE14',
        fontWeight: 'bolder',
        height: '20%',
        width: '50%',
        border:'none',
        borderRadius: '16px',
        marginTop: '5%',
        boxShadow: '5px 5px 15px',
        cursor: 'pointer',
        }


    let imagebox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    let image = {
        height: '25vh',
        width: '25vw',
        marginLeft: '10%',
        marginTop: '5%',
        borderRadius: '16px',
    }

    return(

        <div style={container}>
            <div>
            <h1 style={hstyles}>Little Lemon</h1>
            <p style={pstyles}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum."</p>
            <button style={bstyles}>Reserve a Table</button>
        </div>
            <div style={imagebox}>
                    <img style={image} src={require('../Assets/restaurant.jpg')} />
            </div>

        </div>
    )
}

export default Hero;