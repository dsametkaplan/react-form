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
