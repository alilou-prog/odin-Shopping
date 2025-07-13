import { useState } from "react"

function Shopping() {
    return (
        <>
            <h1>Shopping Page</h1>
            <div className="cart">Cart</div>
            <Card />
        </>)
}

function Card({ item_fake }) {
    const [count, setCount] = useState(0)
    const item = {
        price: 100
    }
    return (
        <>
            <div className="card">
                <img src={null} alt='card img'></img>
                <div className='control'>
                    <div className="total">total: {count * item.price}</div>
                    <div className="count">{count}</div>
                    <div className="btns">
                        <button className="inc" onClick={() => setCount(prev => prev + 1)}>inc</button>
                        <button className="dec" onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>dec</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shopping