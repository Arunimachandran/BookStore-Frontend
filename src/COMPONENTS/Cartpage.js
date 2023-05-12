// import React from 'react'
// import { useCart } from '../Context/CartProvider'
// import './Cartpage.css';

// function Cartpage() {
//     const [cart, setcart] = useCart()
//    const removecart = (id) =>{
//     try {
//       const mycart=[...cart]
//       console.log(id)
//       const index=mycart.findIndex(item=>item._id === id)
//       console.log(index);
//       mycart.splice(index,1)
//       setcart(mycart)
//       localStorage.setItem('cart',JSON.stringify(mycart))

//     } catch (error) {
//       console.log(error);
//     }

//    }
//   return (
//     <div>
//     <div>
//     <div>
//     <h4>{cart.length>=1 ? `you have ${cart.length}` : "Add items" }</h4>
//     </div>
//     <div>
//    {cart.map((details)=>(
//     <div key={details._id}>
//     <h4>Book Name:{details.BookName}</h4>
//     <h4>Author:{details.Author}</h4>
//     <h4>Publication:{details.Publication}</h4>
//     <h4>Year:{details.Year}</h4>
//     <h4>Avalibilty:{details.Avalibility}</h4>
//     <h4>Price:{details.Price}</h4>
    
//     <button onClick={()=>removecart(details._id)}>Remove</button>
// </div>
//    ))} 
//     </div>
//     </div>
    
//     </div>
//   )
// }


// export default Cartpage


//============================================================================================================================

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Cartpage() {
//     const [cart, setcart] = useState([])

//     useEffect(() => {
//         const data={ userid: localStorage.getItem('userid')} 
//         console.log(data.userid);
//       axios.post('http://localhost:3001/getcart',data)
//       .then((res)=>{
//         console.log(res.data.data.cart);
//         setcart(res.data.data.cart)
//       })
//     }, [])
    
//     const handledelete=async(productid)=>{
//       const prdctid=productid
//       const userid=localStorage.getItem('userid')
    

//       const data={productid:prdctid,userid:userid}
//       axios.put('http://localhost:3001/deletecart',data)
//       .then((res)=>(setcart(cart.filter(dt=>dt._id !== productid)),
//       console.log(res.data)
//       ))
      
//     }
    
//   return (
//     <div>
//     {cart.map((details)=>(
//             <div key={details._id}>
//             <h4>Book Name:{details.BookName}</h4>
//             <h4>Author:{details.Author}</h4>
//             <h4>Publication:{details.Publication}</h4>
//             <h4>Year:{details.Year}</h4>
//             <h4>Avalibilty:{details.Avalibility}</h4>
//             <button onClick={()=>handledelete(details._id)}>Remove</button>
//         </div>
//             ))} 
//     </div>
//   )
// }

// export default Cartpage
//=========================================================================================================================

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Cartpage.css"

function Cartpage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const data = { userid: localStorage.getItem('userid') }
    console.log(data.userid)
    axios
      .post('http://localhost:3001/getcart', data)
      .then((res) => {
        console.log(res.data.data.cart)
        const initializedCart = res.data.data.cart.map((item) => ({
          ...item,
          Quantity: 1,
        }))
        setCart(initializedCart)
      })
  }, [])

  const handleDelete = async (productid) => {
    const prdctid = productid
    const userid = localStorage.getItem('userid')

    const data = { productid: prdctid, userid: userid }
    axios.put('http://localhost:3001/deletecart', data).then((res) => (
      setCart(cart.filter((dt) => dt._id !== productid)),
      console.log(res.data)
    ))
  }

  const handleIncrement = (productid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productid) {
        return {
          ...item,
          Quantity: item.Quantity + 1,
          Price: item.Price / item.Quantity * (item.Quantity + 1), // update the price based on the new quantity
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const handleDecrement = (productid) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productid && item.Quantity > 1) {
        return {
          ...item,
          Quantity: item.Quantity - 1,
          Price: item.Price / item.Quantity * (item.Quantity - 1), // update the price based on the new quantity
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // calculate total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.Price;
  }, 0);


  return (
    <article>
      <div>
        {cart.map((details) => (
          <div className="cart_box" key={details._id}>
            <div className="cart_img">
              <img src={details.Image} />
              <p>{details.BookName}</p>
            </div>
            <p>{details.Price}</p>
            <div className="cart_quantity">
              <button onClick={() => handleDecrement(details._id)}>-</button>
              <span>{details.Quantity}</span>
              <button onClick={() => handleIncrement(details._id)}>+</button>
            </div>
            <button onClick={() => handleDelete(details._id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <span>Total price of your Cart</span> 
        
        <span>Rs- {totalPrice}</span>
        
        </div>
    </article>
  )
}

export default Cartpage