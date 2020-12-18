import React, { useState } from 'react';
import './style.css'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    
    const handleSubmit = () => {
        
    }
    return (
        <div className="container-fluid" style={{backgroundColor: 'lightblue',height:'100vh'}}>
            <div className="row">
                    <div className="col-4 offset-4 card rounded"  style={{backgroundColor: '#f3f3f3',marginTop: '3.2rem'}}>
                        <div className="text-center mt-1"><i className="fa fa-user-plus fa-2x" aria-hidden="true"></i> </div>
                        <form  onSubmit={handleSubmit} >

                            <label  htmlFor="email">Email ID:</label>
                            <input className="form-control" id="email" type="text" name="emailId" onChange={e=>setEmail(e.target.value)} />

                            <label htmlFor="name">UserName</label>
                            <input className="form-control" type="text" id="name" name="username"  onChange={e=>setName(e.target.value)} />
                         
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={e=>setPassword(e.target.value)} />

                            <label>ConfirmPassword</label>
                            <input className="form-control" type="password" name="cnfpassword" onChange={e=>setConfirmPassword(e.target.value)} />

                            <label htmlFor="mobile">Mobile No:</label>
                            <input className="form-control" type="text" id="mobile" name="mobileno"  onChange={e=>setMobile(e.target.value)}/>

                            
                            <label htmlFor="Address">Address:</label>
                            <input className="form-control" type="text" id="Address" name="address" onChange={e=>setAddress(e.target.value)}/>

                         
                            <br />
                            <div className="mt-3"><button type="submit" className="btn btn-primary form-control" >Register</button></div>
                            <div className="mt-4">Already have an account?<a href="/login">Click Here To Login</a></div>
                            <br />
                    
                        </form>
                    </div>
                </div>

        </div>
    );
};

export default Register;