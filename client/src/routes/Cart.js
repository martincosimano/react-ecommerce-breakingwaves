import React from 'react';
import CartList from '../components/shared/CartList';
import EmptyCart from '../components/Cart/EmptyCart';
import Modal from '../components/shared/Modal';
import '../styles/routes/cart.css';

export default function Cart(props) {
  const [modal, setModal] = React.useState(false)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    address: ""
  })

  function openModal() {
    setModal(prevModal => !prevModal)
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

    return (
        <main className="cart-main">
            <div className="container">
            {props.totalPrice ? 
              (<div className="split-grid">
                  <div className="cart-items">
                    <div className="cart-category-items">
                        <h5 className="cart-product-title">Product</h5>
                        <h5 className="cart-product-price">Price</h5>
                        <h5 className="cart-product-quantity">Quantity</h5>
                    </div>
                    {Object.entries(props.groupedItems).map(([key, { count, price, smallImg, id }]) => (
                    <CartList
                        key={id}
                        item={key}
                        price={`${Number(price * count).toFixed(2)}`}
                        smallImg={smallImg}
                        removeFromCart={() => props.removeFromCart(key)}
                        sumToCart={() => props.sumToCart({ id, productName: key, productPrice: price, productImage: smallImg })}
                        isCartRoute={true}
                        countItems={count}
                    />
                    ))}
                  </div>
                  <div className="cart-summary">
                    <h4 className="cart-summary-title">Order Summary ({props.cartItems.length} {props.cartItems.length > 1 ? 'Items' : 'Item'})</h4>
                    <form className="cart-summary-form">
                      <input 
                        type="text" 
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        >
                      </input>
                      <input 
                        type="text" 
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        >
                      </input>
                      <input 
                        type="text" 
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        >
                      </input>
                      <input 
                        type="text" 
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        >
                      </input>
                      <input 
                        type="text" 
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        >
                      </input>
                    </form>
                    <p className="cartlist-total-price">Total: ${props.totalPrice.toFixed(2)}</p>
                    <button className="btn-black" onClick={openModal}>Proceed to Checkout</button>
                  </div>
                  <Modal 
                  modal={modal} 
                  setModal={setModal}
                  totalPrice={props.totalPrice.toFixed(2)}
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  email={formData.email}
                  city={formData.city}
                  address={formData.address}
                  />
                </div>) : 
                (
                <EmptyCart />
                )}
            </div>
        </main>
    )
}