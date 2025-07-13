import { useEffect, useState } from "react"

function Shopping() {
    const [data, set_data] = useState(null);
    useEffect(() => {
        async function fetch_data() {
            const response = await fetch('https://fakestoreapi.com/products');
            set_data(await response.json())
        }
        fetch_data();
    }, [])
    console.log(data)
    return (
        <>
            <h1>Shopping Page</h1>
            <div className="cart">Cart</div>
            {data && data.map(item => <Card key={item.id} item={item} />)}
        </>)
}

function Card({ item }) {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="card">
                <img src={item.image} alt='card img'></img>
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