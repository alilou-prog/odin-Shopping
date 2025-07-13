import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../App";

function Shopping() {
    const {products, set_products, cart_total, set_cart_total} = useContext(ShopContext)
    useEffect(() => {
        async function fetch_data() {
            const response = await fetch('https://fakestoreapi.com/products');
            set_products(await response.json())
        }
        fetch_data();
    }, [])
    return (
        <>
            <h1>Shopping Page</h1>
            <div className="cart">Cart: {cart_total.toFixed(2)}</div>
            <div className="cards">{products && products.map(item => <Card key={item.id} item={item} set_cart_total={set_cart_total}/>)}</div>
        </>)
}

function Card({ item , set_cart_total}) {
    const [count, setCount] = useState(0);
    const item_total = parseFloat((count * item.price).toFixed(2))
    function add_to_cart(){
        set_cart_total(prev => prev + item_total );
        setCount(0);
    }
    return (
        <>
            <div className="card">
                <img src={item.image} alt='card img'></img>
                <div className='control'>
                    <div className="total">total: {item_total}</div>
                    <div className="count">{count}</div>
                    <div className="btns">
                        <button className="inc" onClick={() => setCount(prev => prev + 1)}>inc</button>
                        <button className="dec" onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>dec</button>
                    </div>
                    <button className="add-to-cart" onClick={add_to_cart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}
export default Shopping