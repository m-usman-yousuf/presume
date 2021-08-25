import { BorderBottom } from '@material-ui/icons'
import React from 'react'
import './signup.css'

const Signup =()=>{
    return (
        <div style={{
            display:'block',justifyContent:'center',
        alignItems:'center',
        //backgroundImage:`url(${process.env.PUBLIC_URL+"/assets/back.jpg"})`,
        //backgroundSize:'cover',
        //backgroundRepeat:'no-repeat',
        //backgroundAttachment:'fixed'
        background:'none',
        }}>
             <div style={
            {
            borderStyle:'solid',
            borderWidth:'medium',
            borderColor:'green',
            marginTop:'100px',
            marginLeft: '100px',
            marginRight: '100px'
            
            }

            }>
                <h1 style={{color:'white',marginTop:'40px',fontSize:'100px'}}>SIGN UP
                    
                </h1>
                <h2 style={{
                    borderBottomColor:'green',borderBottomStyle:'solid',
                    marginRight:'100px',
                    marginLeft:'100px',
                    marginTop:'50px',
                    marginBottom:'50px',
                    Width:'50%',
                    color: 'white',
                    fontSize:'30px',
                    paddingBottom:'50px'
                    }}>
                     CREATE AN ACCOUNT WITH PRESUME
                </h2>
                
            </div>
    
            <form className="container-fluid max-w-screen-xl container p-3">
                    {/*/<h1 className="font-display">Create Account</h1>*/}
                    {/*<hr className="border border-dark"></hr>*/}
                    <div className='mb-2'>
                        <label className='form-label' for='username'>Username</label>
                        <input className="form-control" id='username' type="text" name="username"  placeholder="Your Username"></input>
                    </div>
                    <div className='mb-2'>
                        <label className="form-label" for="email">Email</label>
                        <input className="form-control" id="email" type="email" name="email" placeholder="Your Email" ></input>
                    </div>
                    <div className='mb-2'>
                        <label className="form-label" for="organization">Organization</label>
                        <input className="form-control" id="organization" type="organization" name="organization" placeholder="Your Organisation" ></input>
                    </div>
                    <div className="mb-2">
                        <label className="form-label" for="password">Password</label>
                        <input className="form-control" id="password" type="password" name="password"  placeholder="Password" ></input>
                    </div>
                    <div className="mb-2">
                        <label className="form-label" for="confirm_password">Confirm Password</label>
                        <input className="form-control" id="confirm_password" type="password" name="confirm_password"  placeholder="Repeat Password" ></input>
                    </div>
                    <button className="btn" type="submit">Register Now</button>
                </form>

            
        </div>
    )
}

export default Signup;
