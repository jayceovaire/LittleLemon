import './Highlights.css'


function Highlights() {
    let hImages = {
        source1: require('../Assets/lemon dessert.jpg'),
        source2: require('../Assets/chickendish.jpg'),
        source3: require('../Assets/greek salad.jpg')
    }


    return(
        <>
            <div className={'cardBox'}>
            <div className={'card'}>
                <div className={'imageBox'}>
                    <img className={'highlightImage'} src={hImages.source1} />
                </div>
                <h3 className={'cardTitle'}>Expensive Food</h3>
                <p className={'cardPara'}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat."
                </p>
                <div className={'bottomCard'}>
                    <button className={"cardButton"}>Add Item+<span className={'cardIcon'}>$20.00</span></button>
                </div>

            </div>
                <div className={'card'}>
                    <div className={'imageBox'}>
                        <img className={'highlightImage'} src={hImages.source2} />
                    </div>
                    <h3 className={'cardTitle'}>Affordable Food</h3>
                    <p className={'cardPara'}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat."
                    </p>
                    <div className={'bottomCard'}>
                        <button className={"cardButton"}>Add Item+<span className={'cardIcon'}>$15.00</span></button>
                    </div>

                </div>
                <div className={'card'}>
                    <div className={'imageBox'}>
                        <img className={"highlightImage"} src={hImages.source3} />
                    </div>
                    <h3 className={'cardTitle'}>Cheap Food</h3>
                    <p className={'cardPara'}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat."
                    </p>
                    <div className={'bottomCard'}>
                        <button className={"cardButton"}>Add Item+<span className={'cardIcon'}>$10.00</span></button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Highlights