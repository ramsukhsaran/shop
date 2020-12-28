import React,{useState,useContext}from 'react';
import UserContext from '../components/context/UserContext';
import UserHome from './UserHome';
import AdminHome from './AdminHome';

const Home =  () => {
    const {userData} =useContext(UserContext)
    return (
        <div>
           
            {
                !userData.user ?(
                    <>
                    <div className="jumbotron container" style={{ marginTop: '2rem' }}>
                        <h1 className="display-3">Welcome To Shopping App</h1>
        
                        <hr className="my-4" />
                        <p className="lead">Here You can Get Unlimited Products with Best Quality!</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
                        </p>
                    </div>
                     </>
                ):(<div>
                    {
                        userData.role === 'admin'?<AdminHome />:<UserHome />
                    }
                </div>)
              
                
            }
        </div>
    );
};

export default Home;