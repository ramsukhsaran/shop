import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import UserContext from '../context/UserContext'

const CartPanel = () => {
    const { userData, setUserData } = useContext(UserContext)
    const [productData] = useState([])
    const [flag, setFlag] = useState(false)
  
    useEffect(async () => {
      const { items } = userData.cart
      for (let i = 0; i < items.length; i++) {
        await axios.get(`http://localhost:5000/products/productId/${items[i].productId}`)
          .then(res => {
            productData.push(res.data)
          })
          .catch(err => console.log(err))
  
  
      }
      setFlag(true)
    }, [productData])
    const decreaseQuantity=(e,idx) =>{
      e.preventDefault()
      const {cart}= userData
      if(cart.items[idx].quantity<1){
        cart.items[idx].quantity=0
        setUserData({...userData,cart})
        return;
      }
      cart.items[idx].quantity--
      setUserData({...userData,cart})
    }
    const increaseQuantity = (e,idx)=>{
      e.preventDefault()
      const {cart}= userData
      cart.items[idx].quantity++
      setUserData({...userData,cart})
    }
    const renderCartItems = (productData) => {
      const {items}=userData.cart
      return productData.map((product,idx) => {
        return (
          <tr>
            <th scope="row"><img src={product.ProductImgUrl} alt="img Error" className="img-thumbnail" width="70px" height="70px" /></th>
            <th scope="row">{product.ProductTitle}</th>
            <th scope="row">{product.Price}</th>
            <th scope="row"><button className="btn btn-danger btn-sm mr-1" onClick={e=>decreaseQuantity(e,idx)}><i className="fa fa-minus"></i></button>{items[idx].quantity?items[idx].quantity:0}<buuton className="btn btn-success btn-sm ml-1" onClick={e=>increaseQuantity(e,idx)}><i className="fa fa-plus"></i></buuton></th>
            <th scope="row">{items[idx].quantity * product.Price}</th>
            <th scope="row"><button className="btn bg-danger"><i className="fa fa-trash"></i></button></th>
          </tr>
        )
      })
    }
  
    return (
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">NewlyAdded</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">AllItems</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="container d-flex justify-content-between flex-wrap" style={{ rowGap: '45px' }} >
                        {
                            flag ? (<table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ProductImg</th>
                                        <th scope="col">ProductName</th>
                                        <th scope="col">ProductPrice</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        renderCartItems(productData)
                                    }
                                </tbody>
                            </table>) : ''
                        }
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">1</div>
            </div>
        </div>
    );
};

export default CartPanel;