import React, { useEffect, useState } from "react";
import deleteIcon from "../../assets/images/icon-delete.png"
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const CartPage = (props) => {
  const [cartData,setCartData] = useState({})
  const [total,setTotal] = useState(0)
  useEffect(() => {
    if(localStorage.getItem("js_cart_data")){
      setCartData(JSON.parse(localStorage.getItem("js_cart_data")))
    }
  },[])
  useEffect(() => {
    if(cartData && Object.keys(cartData) && Object.keys(cartData).length > 0){
      let productTotal = 0;
      Object.keys(cartData).map((product_id) => {
        productTotal += parseFloat(cartData[product_id].price) * cartData[product_id].qty;
      })
      setTotal(productTotal)
    }
  },[cartData])


  const remove_item_from_cart = (product_id) => {
      let tempData = { ... cartData}
      let newData = {}
      Object.keys(tempData).map((item_id) => {
        if(product_id != item_id){
          newData[item_id] = tempData[item_id];
        }
      })
      setCartData(newData);
      localStorage.setItem("js_cart_data",JSON.stringify(newData))
  }

  const empty_cart = () => {
    setCartData({});
    localStorage.removeItem("js_cart_data")
  }
  return (
    <div className="gallery_section layout_padding">
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
              <h1 className="gallery_taital">Shopping Cart</h1>
             
            </div>
        </div>
        <div id="shopping-cart">
          {cartData && Object.keys(cartData) && Object.keys(cartData).length > 0 ? 
          <>
            <a id="btnEmpty" onClick={() => empty_cart()}>Empty Cart</a>
            <table className="tbl-cart" cellPadding="10" cellSpacing="1">
              <tbody>
                <tr>
                  <th></th>
                  <th style={{textAlign:"left"}}>Name</th>
                  <th style={{textAlign:"right"}} width="5%">Quantity</th>
                  <th style={{textAlign:"right"}} width="10%">Unit Price</th>
                  <th style={{textAlign:"right"}} width="10%">Price</th>
                  <th style={{textAlign:"center"}} width="5%">Remove</th>
                </tr>	
                {Object.keys(cartData).map((product_id) => {
                  return (
                    <tr  key={product_id}>
                      <td><img src={cartData[product_id].image} className="cart-item-image" /></td>
                      <td>{cartData[product_id].name}</td>
                      <td  style={{textAlign:"right"}}>{cartData[product_id].qty}</td>
                      <td style={{textAlign:"right"}}>{cartData[product_id].price} ₹</td>
                      <td  style={{textAlign:"right"}}>{parseFloat(cartData[product_id].price) * cartData[product_id].qty} ₹</td>
                      <td style={{textAlign:"center"}}><img src={deleteIcon} alt="Remove Item" onClick={() => remove_item_from_cart(product_id)}/></td>
                    </tr>
                  )
                })}
                <tr>
                  <td colSpan="2" align="right">Total:</td>
                  <td align="right"></td>
                  <td align="right" colSpan="2"><strong>{total} ₹</strong></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </> : 
          <div className="no-records">Your Cart is Empty</div>}
        </div>
        {Object.keys(cartData).length > 0 && 
        <div className="row">
          <Button LinkComponent={Link} to="/checkout" variant="contained">Go To Checkout</Button>
        </div>}
      </div>
    </div>
  );
};

export default CartPage;