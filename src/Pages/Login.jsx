import React, { useState } from "react";
import NavBar from "../Componets/NavBar";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";

const Login = () => {

  const [error, setError] = useState(null);


  const { signIn } = useContext(AuthContext);
const location  = useLocation();
// console.log(location);
  

  const navigate = useNavigate();



const handleLogin = (event) => {
    event.preventDefault();
    // Implement login functionality here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

   signIn(email, password)
    .then (result => {
        const loggedUser = result.user;
        // console.log (loggedUser);
        alert ("Login Successful");
        form.reset();

        navigate (`${location.state ? location.state : '/'}`);


    })
  
    .catch(error => {

      const errorCode = error.code;
      const errorMessage = error.message;
    // alert(error.message);

    setError(errorCode.message);

    });

}

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center mt-6">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset space-y-2">

{/* Email */}

            <label className="label font-semibold">Email</label>
            <input type="email" required name="email" className="input input-bordered" placeholder="Email" />
   
   {/* Password */}
   
            <label className="label font-semibold">Password</label>
            <input
              type="password" required name="password"
              className="input input-bordered"
              placeholder="Password"
            />

            <div className="link link-hover"> Forgot Password? </div>

            {
              error && <p className="text-red-600 font-semibold">{error}</p>
            }

           

            <button type="submit" className="btn btn-primary w-full mt-4">Login</button>

            <p className="font-semibold pt-5">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </fieldset>
        </form>
      </div>

    </div>
  );
};

export default Login;
