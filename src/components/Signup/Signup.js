import { Fragment, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    async function fetchText() {
      try {
        const body = { first_name, last_name, email, password };
        const response = await fetch("http://localhost:5000/register", {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchText();
  };

  return (
    <Fragment>
      {/*        
            <div className="text-center mt-5">
                 <form onSubmit={onSubmit } className="login" id="">
                 
            <div>
                <h1 className="text-center mt-2 text-monospace" id="headerTitle">SignUp</h1>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputFirstName" className="sr-only" id ="sa">First Name</label>
                <input type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="emailHelp" placeholder="Enter First Name "
                 value={first_name} 
                 onChange={e=>setFirst_name(e.target.value)} />
                
                                </div>
            <div className="form-group">
                <label htmlFor="exampleInputLastName1" className="sr-only">Last Name</label>
                <input type="text" className="form-control" id="exampleInputLastName1" placeholder="Last Name" value={last_name} onChange={e=>setLast_name(e.target.value)}/>
                                </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="sr-only">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email (we'll never share your email with anyone else.) " value={email} onChange={e=>setEmail(e.target.value)}/>
                
                
                                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="sr-only">Password</label>
                    <input type="password" className="form-control" id="" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-lg btn-block btn-primary">Submit</button>
                <Link to="/ ">Have an account? </Link>

        </form>
            </div> */}
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={onSubmit}>
              <span className="login100-form-title p-b-49">Sign Up</span>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Email is reauired"
              >
                <span className="label-input100">First Name</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your name"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                  required
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Email is reauired"
              >
                <span className="label-input100">Last Name</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Type your last name"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  required
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Email is reauired"
              >
                <span className="label-input100">Email</span>
                <input
                  className="input100"
                  type="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Type your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="text-right p-t-8 p-b-31"></div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Sign Up</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <div>
                  <Link to="/ ">Have an account ?</Link>
                </div>
              </div>
              <div className="flex-c-m">
                <a
                  href="https://www.facebook.com/login"
                  className="login100-social-item bg1"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://www.twitter.com/login"
                  className="login100-social-item bg2"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/login"
                  className="login100-social-item bg3"
                >
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="flex-col-c p-t-155"></div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUp;
