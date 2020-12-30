import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'

const AllCartItems = (props) => {
  const { userData, setUserData } = useContext(UserContext)
  const [productData] = useState([])
  const [flag, setFlag] = useState(false)
  const [cartData] = useState(props.cartData)
  userData.cartData = cartData
  userData.productData = productData
  useEffect(async () => {
    for (let i = 0; i < cartData.length; i++) {
      // loading product data
      await axios.get(`http://localhost:5000/products/productId/${cartData[i].productId}`)
          .then(res => productData.push(res.data))
          .catch((err) => console.log(err))
      }
      setFlag(true)
  }, [cartData])

  const decreaseQuantity = async (e, idx) => {
    e.preventDefault()
    if (cartData[idx].quantity < 1) {
      cartData[idx].quantity = 0
      return
    }
    cartData[idx].quantity--
    setUserData({ ...userData, cartData })
    if (cartData[idx].quantity > 0) {
      const updatedData = {
        items: { productId: cartData[idx].productId, quantity: cartData[idx].quantity }
      }
      await axios.put(`http://localhost:5000/cart/update/${userData.userId}`, updatedData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  }

  const increaseQuantity = async (e, idx) => {
    e.preventDefault()

    cartData[idx].quantity++
    setUserData({ ...userData, cartData })

    const updatedData = {
        items: { productId: cartData[idx].productId, quantity: cartData[idx].quantity }
    }
    await axios.put(`http://localhost:5000/cart/update/${userData.userId}`, updatedData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const deleteCartItem = async (e, idx, productId) => {
     e.preventDefault()
    let { cartData, productData } = userData
    const newCart = cartData.filter(item => item.productId !== productId)
    cartData = newCart
    setUserData({ ...userData, cartData })

    // const newProductData = productData.filter(item => item.ProductId !== productId)
    productData.splice(idx, 1)
    console.log(productData)
    setUserData({ ...userData, productData })
    await axios.delete(`http://localhost:5000/cart/delete/${userData.userId}`, { data: { productId: productId } })
    .then(res => console.log(res.data))
    .catch(res => console.log(res))
  }

  const renderAllCartItems = (productData) => {
    return productData.map((product, idx) => {
      return (
              <tr key={idx}>
                  <th scope="row"><img src={product.ProductImgUrl} alt="img Error" className="img-thumbnail" width="90px" height="90px"/></th>
                  <th scope="row">{product.ProductTitle}</th>
                  <th scope="row">{product.Price}</th>
                  <th scope="row"><button
                                  className="btn btn-danger btn-sm mr-1"
                                  onClick={(e) => decreaseQuantity(e, idx)}
                                  >
                                  <i className="fa fa-minus"></i>
                                  </button>
                                  {cartData[idx].quantity}
                                  <button className="btn btn-success btn-sm ml-1" onClick={(e) => increaseQuantity(e, idx)} >
                                  <i className="fa fa-plus"></i>
                                  </button>
                  </th>
                  <th scope="row">{cartData[idx].quantity * product.Price}</th>
                  <th scope="row">
                      <button className="btn bg-danger" onClick={(e) => deleteCartItem(e, idx, product.ProductId)}><i className="fa fa-trash"></i></button>
                  </th>
              </tr>
      )
    })
  }
  return (
        <div>
            <table className="table">
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
                      flag ? renderAllCartItems(productData) : ''
                    }
                </tbody>
            </table>
        </div>
  )
}

export default AllCartItems
