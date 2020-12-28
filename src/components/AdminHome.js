import React, { useContext, useState} from 'react';
import Msgshow from '../components/msgshow.js/Msgshow'
import EditProduct from './EditProduct'
import RemoveProduct from './RemoveProduct'
import axios from 'axios'
import UserContext from '../components/context/UserContext'

const AdminHome = () => {
    
    const { userData } = useContext(UserContext)
    const [products, setproducts] = useState([])
    const [serverMsg,setServerMsg] = useState('') 
    const [ProductId, setProductId] = useState()
    const [ProductTitle, setProductTitle] = useState()
    const [ProductImgUrl, setProductImgUrl] = useState()
    const [ProductDes, setProductDes] = useState()
    const [Price, setPrice] = useState()


    const loadAllProducts = () => {
        // e.preventDefault()
        axios.get('http://localhost:5000/products')
            .then((response) => setproducts(response.data))
            .catch((err) => console.log(err))

    }

   

    const renderAllProducts = (products) => {
        return products.map((product, idx) => {
            return (
                <div className="card shadow p-3 mb-5 bg-white rounded" key={idx} style={{ width: '350px', height: '650px' }}>
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
                    </div>
                </div>
            )
        })
    }

    const addProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            ProductId,
            ProductTitle,
            ProductDes,
            ProductImgUrl,
            Price
        }
        const token=localStorage.getItem('auth-token')
        axios.post('http://localhost:5000/products/add', newProduct,{headers:{'x-auth-token':token}})
            .then(response =>setServerMsg(response.data.msg))
            .catch(err => console.log(err))
       
        setTimeout(() =>{
            setProductId('')
            setProductTitle('')
            setProductDes('')
            setProductImgUrl('')
            setPrice('')
            loadAllProducts()
        },3000)
        
    }

  
    return (
        <div className="container" style={{ backgroundColor: 'lightblue', marginTop: '20px' }}>
             <div className="d-flex text-success">{serverMsg && (<Msgshow message={serverMsg} clearMsg={() => setServerMsg(undefined)} />)}</div>
            {
                !products.length ? (<div>
                    <hr />
                    <div className="jumbotron mt-3" >
                        <h1 className="text-center text-success">Welcome Admin {userData.user}</h1>
                        <hr className="my-4" />
                    </div>
                    <br />
                    <hr />
                </div>):''
            }

            <div className="d-flex justify-content-between">
                <ul className="nav nav-tabs card-header-tabs">
                    <li class="nav-link "><a data-toggle="tab" href="#allproducts"  onClick={loadAllProducts}>AllProducts</a></li>

                    <li className="nav-link"><a data-toggle="tab" href="#addproducts">AddProduct &nbsp;<i className="fa fa-plus"></i></a></li>

                    <li className="nav-link"><a data-toggle="tab" href="#editproduct">EditProduct &nbsp;<i className="fa fa-edit"></i></a></li>

                    <li className="nav-link"><a data-toggle="tab" href="#removeproduct">RemoveProduct &nbsp;<i className="fa fa-minus"></i></a></li>

                </ul>
                <span className="text-dark">Total products:&nbsp;<b className="badge badge-success">{products.length}</b></span>
            </div>
            < hr />
            {/* Tab content */}
            <div class="tab-content">

                <div id="allproducts" class="tab-pane fade">
                    <div className="container d-flex justify-content-between flex-wrap" style={{ rowGap: '45px' }} >
                        {
                            products.length ? renderAllProducts(products) : ''
                        }

                    </div>

                </div>

                <div id="addproducts" class="tab-pane fade">
                    <div className="row card p-4">
                        <div className="col-8 offset-2 jumbotron">
                            <div className="" style={{ height: 'auto' }}>
                                <form  onSubmit={e=>addProduct(e)}> 
                                    <div class="form-group row">
                                        <label for="productid" class="col-sm-2">ProductID</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="productid" value={ProductId} onChange={e => setProductId(e.target.value)} required placeholder="Enter ProductID...." />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="productitle" class="col-sm-2 col-form-label">ProductTitle</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="productitle" value ={ProductTitle} onChange={e => setProductTitle(e.target.value)} required placeholder="Enter Title ...." />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="productitle" class="col-sm-2 col-form-label">ProductDes</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="productitle" value={ProductDes} onChange={e => setProductDes(e.target.value)} required placeholder="Enter Description..." />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="productimg" class="col-sm-2 col-form-label">ProductImg</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="productimg"  value={ProductImgUrl} onChange={e => setProductImgUrl(e.target.value)} required placeholder='Enter Product Img URL' />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="productprice" class="col-sm-2 col-form-label">Price</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="productprice" value={Price} onChange={e => setPrice(e.target.value)} required placeholder='Product Price...' />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="" class="col-sm-2 col-form-label"></label>
                                        <div class="col-sm-10">
                                            <button className="btn btn-primary form-control mt-4" type="submit">ADD</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>

                <div id="editproduct" className="tab-pane fade" >
                   <EditProduct />
                    
                </div>


                <div id="removeproduct" className="tab-pane fade">
                    <RemoveProduct />
                    <br />
                </div>


            </div>









        </div>
    );
};

export default AdminHome;