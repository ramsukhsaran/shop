import React, { useState, useContext } from 'react';
import axios from 'axios'
import UserContext from '../components/context/UserContext'

const EditProduct = () => {
    const { userData } = useContext(UserContext)
    const [id, setId] = useState()
    const [product, setProduct] = useState()



    const [editTitle, setEditTitle] = useState()
    const [editDes, setEditDes] = useState()
    const [editImg, setEditImg] = useState()
    const [editPrice, setEditPrice] = useState()

    const [flag, setFlag] = useState(false)

    const loadEdit = (e) => {
        e.preventDefault()
        // fetch product for edit
        axios.get(`http://localhost:5000/products/productId/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))

        setId('')
        setFlag(true)

    }
    const editUpdate = (e)=>{
        e.preventDefault()
        console.log(editDes)
        console.log(editTitle)
    }
    const renderProduct = (product) => {

    

        if (product !== undefined) {
            // setEditDes(product.ProductDes)
            // setEditPrice(product.ProductPrice)
            // setEditImg(product.ProductImgUrl)
            // setEditTitle(product.ProductTitle)
            return (
                <div>
                    <div className="card-title">
                        <img className="" src={product.ProductImgUrl} alt="Img Error" height="200px" width="350px" />

                    </div>
                    <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: '350px', height: 'auto' }}>
                        <form  onSubmit={e=>editUpdate(e)}>
                            <div className="card-header">
                                <span className="badge badge-info">Title</span>
                                <input type="text" className="form-control mt-1"  onChange={e=>setEditTitle(e.target.value)}  />

                                <h1 className="badge badge-info">Description</h1>
                                <textarea className="form-control" onChange={e=>setEditDes(e.target.value)}>
                                    {product.ProductDes}
                                </textarea>

                                <h1 className="badge badge-info">ImgUrl</h1>
                                <input type="text" className="form-control mt-1" value={product.ProductImgUrl}  onChange={e=>setEditImg(e.target.value)}/>

                                <h1 className="badge badge-info">Price</h1>
                                <input type="number" className="form-control mt-1" value={product.Price}  onChange={e=>setEditPrice(e.target.value)} />

                            </div>
                            <div className="card-footer">
                                <input className="btn btn-primary float-right"  type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>

            )
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-4 offset-4">
                    <form onSubmit={e => loadEdit(e)}>

                        <input type="number" className="form-control" value={id} onChange={e => setId(e.target.value)} placeholder="Enter ProductID for Edit" />

                        <input type="submit" className="form-control btn btn-primary mt-3" placeholder="Edit" />
                    </form>

                </div>
            </div>
            <hr />
            <div className="row ">
                <div className="col-6 offset-4">
                    {
                        flag ? (renderProduct(product)) : ''
                    }
                </div>


            </div>
        </div>
    );
};

export default EditProduct;