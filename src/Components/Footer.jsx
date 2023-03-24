import './Footer.css'
function Footer() {
    return (
        <>
            <div className={'footerContainer'}>
                <div className={'footerColumn'}>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>1</li>
                        <li className={'footerLink'}>2</li>
                        <li className={'footerLink'}>3</li>
                        <li className={'footerLink'}>4</li>
                        <li className={'footerLink'}>5</li>
                        <li className={'footerLink'}>6</li>
                    </ul>
                </div>
                <div className={'footerColumn'}>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>1</li>
                        <li className={'footerLink'}>2</li>
                        <li className={'footerLink'}>3</li>
                    </ul>
                </div>
                <div className={'footerColumn'}>
                    <ul className={'footerList'}>
                        <li className={'footerLink'}>1</li>
                        <li className={'footerLink'}>2</li>
                        <li className={'footerLink'}>3</li>
                        <li className={'footerLink'}>4</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer