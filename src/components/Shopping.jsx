function Shopping() {
    return (
        <>
            <h1>Shopping Page</h1>
            <div className="cart">Cart</div>
            <Card />
        </>)
}

function Card({item}) {
    return (
        <>
        <div className="card">
            <img src={null} alt='card img'></img>
            <div className='control'>
                <div className="total">total</div>
                <div className="count"></div>
                <div className="btns">
                    <button className="inc">inc</button>
                    <button className="dec">dec</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shopping