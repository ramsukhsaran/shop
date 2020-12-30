import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import AllCartItems from './AllCartItems'

const CartPanel = () => {
  const { userData } = useContext(UserContext)
  const [cartData, setCartData] = useState([])
  const [productData] = useState([])
  const [flag, setFlag] = useState(false)

  useEffect(async () => {
    const { items } = userData.cart
    // post data to cart db
    for (let i = 0; i < items.length; i++) {
      const cartData = {
        userId: userData.userId,
        items: { productId: items[i].productId, quantity: items[i].quantity }
      }

      await axios.post('http://localhost:5000/cart/add', cartData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    for (let i = 0; i < items.length; i++) {
      await axios
        .get(`http://localhost:5000/products/productId/${items[i].productId}`)
        .then((res) => {
          productData.push(res.data)
        })
        .catch((err) => console.log(err))
    }
    setFlag(true)
    // loading existing cart data
    await axios.get(`http://localhost:5000/cart/${userData.userId}`)
      .then(response => {
        setCartData(response.data.items)
      })
      .catch(err => console.log(err))
  }, [])

  const renderCartItems = (productData) => {
    const { items } = userData.cart
    return productData.map((product, idx) => {
      return (
        <tr key={idx}>
          <th scope="row">
            <img
              src={product.ProductImgUrl}
              alt="img Error"
              className="img-thumbnail"
              width="70px"
              height="70px"
            />
          </th>
          <th scope="row">{product.ProductTitle}</th>
          <th scope="row">{product.Price}</th>
          <th scope="row">
            {items[idx].quantity ? items[idx].quantity : 0}
          </th>
          <th scope="row">{items[idx].quantity * product.Price}</th>
        </tr>
      )
    })
  }

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            NewlyAdded
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            AllItems
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div
            className="container d-flex justify-content-between flex-wrap"
            style={{ rowGap: '45px' }}
          >
            {
            flag
              ? (
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
                <tbody>{renderCartItems(productData)}
                </tbody>
              </table>
                ) : (<div className="d-flex align-items-center" style={{ marginTop: '30px' }}>

                <strong>Loading...</strong>
                <div className="spinner-border" style={{ marginLeft: '200px' }} role="status" aria-hidden="true"></div>
              </div>)}
          </div>
        </div>
        <div
          className="tab-pane fade show "
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
         {
           cartData.length > 0 ? <AllCartItems cartData={cartData} /> : null
         }
        </div>
      </div>
    </div>
  )
}

export default CartPanel
