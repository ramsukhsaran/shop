import React,{useContext,useEffect,useState} from 'react';
import UserContext from './context/UserContext'

const Cart = () => {
    const {userData,setUserData}= useContext(UserContext)

    return (
         <div className="container" style={{ backgroundColor: 'lightblue', marginTop: '20px' }}>
            <hr />
              <div className="jumbotron mt-3" >
                        <h1  id="showcase">Welcome To Cart Page <span className="text-success">{userData.user}</span></h1>
        
                        <hr className="my-4" />

              </div>
            {/* <div className="container d-flex justify-content-between flex-wrap" style={{ rowGap: '45px' }} >
                {
                    renderData(products)
                }

            </div> */}
            <br />
        </div>

    );
};

export default Cart;