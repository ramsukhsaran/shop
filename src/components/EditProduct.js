import React, { useState } from 'react';
import axios from 'axios'
import Msgshow from '../components/msgshow.js/Msgshow'

const EditProduct = () => {
    
    const [id, setId] = useState()
    const [product, setProduct] = useState()

    const [editTitle, setEditTitle] = useState()
    const [editDes, setEditDes] = useState()
    const [editImg, setEditImg] = useState()
    const [editPrice, setEditPrice] = useState()
    const [msg,setMsg] = useState()

    const [flag, setFlag] = useState(false)

    const loadEdit = async (e) => {
        e.preventDefault()
        // fetch product for edit
     await axios.get(`http://localhost:5000/products/productId/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))

        setId('')
        setFlag(true)
      

    }
    const editUpdate = (e) => {
        e.preventDefault()
        const updatedData={}
        
        if(editTitle){
            updatedData.ProductTitle=editTitle
        }else{
            updatedData.ProductTitle=product.ProductTitle
        }
        if(editDes){
            updatedData.ProductDes=editDes
        }else{
            updatedData.ProductDes=product.ProductDes
        }
        if(editImg){
            updatedData.ProductImgUrl=editImg
        }else{
            updatedData.ProductImgUrl=product.ProductImgUrl
        }
        if(editPrice){
            updatedData.Price=editPrice
        }else{
            updatedData.Price=product.Price
        }
        
        const token=localStorage.getItem('auth-token')
        // sending update required to server
        axios.put(`http://localhost:5000/products/update/${product.ProductId}`, updatedData, {headers: {'x-auth-token': token}})
             .then(response =>setMsg(response.data.msg))
             .catch(error => console.log(error))
        
        setEditTitle('')
        setEditDes('')
        setEditPrice(undefined)
        setEditImg('')
        setFlag(false)

    }
  
    const renderProduct = (product) => {
           
        if (product !== undefined) {
            return (
                <div>
                    
                    <div className="card jumbotron shadow  rounded" style={{ width: '350px'}}>
                        <h2 className="mb-3 badge badge-primary">Edit Product </h2> 
                        <form onSubmit={e => editUpdate(e)}>
                                <span className="badge badge-info">ProductID</span>
                                <input type="number" className="form-control mt-1 bg-danger text-white text-center font-weight-bold" value={product.ProductId} disabled />

                                <span className="badge badge-info">Title</span>
                                <input type="text" className="form-control mt-1" onChange={e => setEditTitle(e.target.value)} />

                                <h1 className="badge badge-info">Description</h1>
                                <textarea className="form-control" onChange={e => setEditDes(e.target.value)}></textarea>

                                <h1 className="badge badge-info">ImgUrl</h1>
                                <input type="text" className="form-control mt-1" onChange={e => setEditImg(e.target.value)} />

                                <h1 className="badge badge-info">Price</h1>
                                <input type="number" className="form-control mt-1" onChange={e => setEditPrice(e.target.value)} />

                                <input className="btn btn-primary float-right mt-3" type="submit" value="Update" />

                        </form>
                    </div>
                </div>

            )
        }
    }
    const renderProductCard = (product) => {
        if (product !== undefined) {
            return (
                <div>
                    <div className="card-title" style={{ height: 'auto'}}>
                        <img className=" img-thumbnail " src={product.ProductImgUrl} alt="Img Error" style={{width:'350px'}}/>
                    </div>
                <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '350px' }}>
                    <div className="card-header text-center">
                        <h2 className="badge badge-success">{product.ProductTitle}</h2>
                    </div>
                    <div className="card-body">
                        <p className="lead">{product.ProductDes}</p>
                    </div>
                    <div className="card-footer">
                        <h1 className="text-warning"><span className="text-info">$</span>{product.Price}</h1>
                       
                    </div>
                </div>
               </div> 
            )
        }

    }
    return (
        <div>
            {
                msg?<Msgshow message={msg} clearMsg={() => setMsg(undefined)} /> : null
            }
            {
                flag ? '' : (
                    <div className="row mt-3">
                        <div className="col-4 offset-4">
                            <form onSubmit={e => loadEdit(e)}>

                                <input type="number" className="form-control" value={id} onChange={e => setId(e.target.value)} placeholder="Enter ProductID for Edit" />

                                <input type="submit" className="form-control btn btn-primary mt-3" placeholder="Edit" />
                            </form>

                        </div>
                    </div>
                )
            }
            <div className="d-flex justify-content-around">
                
                   <div>
                    {
                        flag ? renderProductCard(product) : ''
                    }
                    </div>
                   <div className="mt-5">
                    {
                        flag ? (renderProduct(product)) : ''
                    }
                    </div>
                
            </div>
        </div>
    );
};

export default EditProduct;