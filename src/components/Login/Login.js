import { Fragment, useState } from "react"
import React from 'react'
import {Link} from 'react-router-dom';





function Login() {
    const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
   
 
    const onSubmit = async e=>{

        e.preventDefault();
        try {

       
  
            const body={email,password};
            const response = await fetch("http://localhost:5000/login",{
                method:"Post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(response);
        } catch (err) {
            console.error(err.message);
            
        }
    
    };
      
  return (
    
    <Fragment>
        
{/*        
            <div className="text-center mt-5">
                 <form onSubmit={onSubmit } className="login">
                 
            <h1 className="text-center mt-2 text-monospace">Login</h1>
        
                
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="sr-only">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="sr-only">Password</label>
                    <input type="password" className="form-control" id="" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Submit</button>
 

        </form>
                     <div>  
                     <Link to="/register ">Don't have an account</Link>
                  
                         </div>
            </div> */}
            <div className="limiter">
  <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      <form className="login100-form validate-form" onSubmit={onSubmit}>
        <span className="login100-form-title p-b-49">
          Login
        </span>
        <div className="wrap-input100 validate-input m-b-23" data-validate="Email is reauired" >
          <span className="label-input100">Email</span>
          <input className="input100" type="text" name="email" placeholder="Type your email"  value={email} onChange={e=>setEmail(e.target.value)} required/>
          <span className="focus-input100" data-symbol="" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input className="input100" type="password" name="pass" placeholder="Type your password"  value={password} onChange={e=>setPassword(e.target.value)} required/>
          <span className="focus-input100" data-symbol="" />
        </div>
        <div className="text-right p-t-8 p-b-31">
          
        </div>
        <div className="container-login100-form-btn">
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn" />
            <button className="login100-form-btn">
              Login
            </button>
          </div>
        </div>
        <div className="txt1 text-center p-t-54 p-b-20">
          <span>
            Or Sign Up Using
          </span>
        </div>
        <div className="flex-c-m">
          <a href="https://www.facebook.com" className="login100-social-item bg1">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://www.twitter.com" className="login100-social-item bg2">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.instagram.com" className="login100-social-item bg3">
            <i className="fa fa-google" />
          </a>
        </div>
        <div className="flex-col-c p-t-155">
        <div>  
                     <Link to="/register ">Don't have an account</Link>
                  
                         </div>
        </div>
      </form>
    </div>
  </div>
</div>

    
    
    
    
    
    </Fragment>
  )
}

export default Login