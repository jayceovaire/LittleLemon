import './Footer.css'
function Footer() {
    return (
        <>
            <div className={'footerContainer'}>
                <div className={'footerColumn'}>
                    <h3>Doormat</h3>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>Home</li>
                        <li className={'footerLink'}>About</li>
                        <li className={'footerLink'}>Menu</li>
                        <li className={'footerLink'}>Reservations</li>
                        <li className={'footerLink'}>Order Online</li>
                        <li className={'footerLink'}>Login</li>
                    </ul>
                </div>
                <div className={'footerColumn'}>
                    <h3>Contact</h3>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>Address</li>
                        <li className={'footerLink'}>Phone Number</li>
                        <li className={'footerLink'}>Email</li>
                    </ul>
                </div>
                <div className={'footerColumn'}>
                    <h3>Social Media</h3>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>Twitter</li>
                        <li className={'footerLink'}>Facebook</li>
                        <li className={'footerLink'}>Instagram</li>
                        <li className={'footerLink'}>Youtube</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer