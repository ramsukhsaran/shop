import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import Msgshow from '../components/msgshow.js/Msgshow'
import axios from 'axios'
import './style.css'


const Register = () => {
    let history= useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState();
    const [mobileno, setMobileno] = useState();
    const [address, setAddress] = useState();
    const [role, setRole] = useState('user');
    
    let [msg,setMsg] = useState('');
    let redirect=false
    const handleSubmit =  (e) => {
        e.preventDefault();
        const newUser={
            email,
            password,
            passwordCheck,
            name,
            mobileno,
            address,
            role

        };
        console.log(newUser)
     axios.post('http://localhost:5000/users/register',newUser)
           .then(res =>{console.log(res.data)
            if(res.data.msg === 'SignUp successful'){
                redirect=true
                if(redirect){
                    history.push('/login')
                }
            }
                        
        })
           .catch(err =>{
               setMsg(err.response.data.msg)

        })

       
    

        
    }
    return (
        <div className="container-fluid" style={{backgroundColor: 'lightblue',height:'100vh'}}>
            <div className="row">    
                  <div >{ msg &&(<Msgshow message={msg} clearMsg={() =>setMsg(undefined)} />)}</div>    
                    <div className="col-4 offset-4 card rounded"  style={{backgroundColor: '#f3f3f3',marginTop:'3rem'}}>
                        <div className="text-center mt-1"><i className="fa fa-user-plus fa-2x" aria-hidden="true"></i> </div>
                        <form  onSubmit={e=>handleSubmit(e)} >
                            <label  htmlFor="email">Email ID:</label>
                            <input className="form-control" id="email" type="text" name="emailId" onChange={e=>setEmail(e.target.value)} />

                            <label htmlFor="name">UserName</label>
                            <input className="form-control" type="text" id="name" name="username"  onChange={e=>setName(e.target.value)} />
                         
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={e=>setPassword(e.target.value)} />

                            <label>ConfirmPassword</label>
                            <input className="form-control" type="password" name="cnfpassword" onChange={e=>setPasswordCheck(e.target.value)} />

                            <label htmlFor="mobile">Mobile No:</label>
                            <input className="form-control" type="text" id="mobile" name="mobileno"  onChange={e=>setMobileno(e.target.value)}/>

                            
                            <label htmlFor="Address">Address:</label>
                            <input className="form-control" type="text" id="Address" name="address" onChange={e=>setAddress(e.target.value)}/>
                            <label>Select Role:</label>
                            <select className="form-control" onChange={e=>{setRole(e.target.value)}}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                         
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