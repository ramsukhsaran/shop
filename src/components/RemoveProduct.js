import React, { useState } from 'react';
import axios from 'axios'
import Msgshow from '../components/msgshow.js/Msgshow'



const RemoveProduct = () => {
    const [id, setId] = useState()
    const [product, setProduct] = useState()
    const [msg, setMsg] = useState()
    const [flag, setFlag] = useState(false)

    const loadProduct = async (e) => {
        e.preventDefault()
        // fetch product for edit
        await axios.get(`http://localhost:5000/products/productId/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))

        setFlag(true)
    }

    const deleteeProduct = () =>{
        axios.delete(`http://localhost:5000/products/delete/${id}`,{headers: {'x-auth-token': localStorage.getItem('auth-token')}})
             .then(response=>setMsg(response.data.msg))
             .catch(error=>console.log(error))
             setId('')
             setFlag(false)

    }

    const renderProductCard = (product) => {
        if (product !== undefined) {
            return (
                <div>
                    <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '350px' }}>
                        <div className="card-title" style={{ height: 'auto' }}>
                            <img className=" img-thumbnail " src={product.ProductImgUrl} alt="Img Error" />
                        </div>
                        <div className="card-header text-center">
                            <h2 className="badge badge-success">{product.ProductTitle}</h2>
                        </div>
                        <div className="card-body">
                            <p className="lead">{product.ProductDes}</p>
                            <h1 className="text-warning"><span className="text-info">$</span>{product.Price}</h1>
                        </div>
                        <div className="card-footer">
                           <button className="btn btn-primary float-right" onClick={deleteeProduct}>Delete</button>
                        </div>

                    </div>
                </div>
            )
        }

    }


    return (
        <div>

            {
                msg ? <Msgshow message={msg} clearMsg={() => setMsg(undefined)} /> : null
            }
            {
                
                    <div className="row mt-3">
                        <div className="col-4 offset-4">
                            <form onSubmit={e => loadProduct(e)}>

                                <input type="number" className="form-control" value={id} onChange={e => setId(e.target.value)} placeholder="Enter ProductID for Delete" />

                                <input type="submit" className="form-control btn btn-primary mt-3" placeholder="Get Product" />
                            </form>

                        </div>
                    </div>
                
            }
             <hr />
            <div className="d-flex justify-content-around">

                <div>
                    {
                        flag ? renderProductCard(product) : ''
                    }
                </div>
            </div>

        </div>
    );
};

export default RemoveProduct;