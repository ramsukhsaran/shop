import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import UserContext from '../components/context/UserContext'
// userHme screen
const UserHome = () => {

    const [products, setProducts] = useState([])
    const { userData } = useContext(UserContext)

    useEffect(() => {

        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))

    }, [])

    const renderData = (products) => {
        return products.map((product, idx) => {
            return (
                <div className="card shadow p-3 mb-5 bg-white rounded" key={idx} style={{ width: '350px', height: '680px'}}>
                    <div className="card-title">
                        <img className="img-thumbnail" src={product.ProductImgUrl} alt="Img Error" height="250px" />

                    </div>
                    <div className="card-header text-center">
                        <h2 className="badge badge-success">{product.ProductTitle}</h2>
                    </div>
                    <div className="card-body">
                        <p className="lead">{product.ProductDes}</p>
                    </div>
                    <div className="card-footer">
                        <h1 className="text-warning"><span className="text-info">$</span>{product.Price}</h1>
                        <hr />
                        <button className="btn btn-primary float-right">Add To Cart</button>
                    </div>
                </div>

            )

        })

    }

    return (

        <div className="container" style={{ backgroundColor: 'lightblue', marginTop: '20px' }}>
            <hr />
              <div className="jumbotron mt-3" >
                        <h1  id="showcase">Welcome <span className="text-success">{userData.user}</span></h1>
        
                        <hr className="my-4" />

              </div>
            <div className="container d-flex justify-content-between flex-wrap" style={{ rowGap: '45px' }} >
                {
                    renderData(products)
                }

            </div>
            <br />
        </div>



    );
};

export default UserHome;