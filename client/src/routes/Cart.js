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
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  function openModal() {
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }
    setModal((prevModal) => !prevModal);
  }
  function validateForm() {
    const updatedFormData = {};

    for (const field of Object.keys(formData)) {
      if (!formData[field]) {
        updatedFormData[field] = "";
      } else {
        updatedFormData[field] = formData[field];
      }
    }

    setFormData(updatedFormData);
    return Object.values(updatedFormData).every(Boolean);
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleButtonClick() {
    setFormSubmitted(true);
    openModal();
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
                      className={!formData.firstName && formSubmitted ? "empty-field" : ""}
                    />
                    {!formData.firstName && formSubmitted && (
                      <p className="error-message">Please enter your first name.</p>
                    )}

                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={!formData.lastName && formSubmitted ? "empty-field" : ""}
                    />
                    {!formData.lastName && formSubmitted && (
                      <p className="error-message">Please enter your last name.</p>
                    )}

                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={!formData.email && formSubmitted ? "empty-field" : ""}
                    />
                    {!formData.email && formSubmitted && (
                      <p className="error-message">Please enter your email address.</p>
                    )}

                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={!formData.city && formSubmitted ? "empty-field" : ""}
                    />
                    {!formData.city && formSubmitted && (
                      <p className="error-message">Please enter your city.</p>
                    )}

                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={!formData.address && formSubmitted ? "empty-field" : ""}
                    />
                    {!formData.address && formSubmitted && (
                      <p className="error-message">Please enter your address.</p>
                    )}
                  </form>
                    <p className="cartlist-total-price">Total: ${props.totalPrice.toFixed(2)}</p>
                    <button className="btn-black" onClick={handleButtonClick}>Proceed to Checkout</button>
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