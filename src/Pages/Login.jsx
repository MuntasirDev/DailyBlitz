import React from "react";
import NavBar from "../Componets/NavBar";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";

const Login = () => {

  const { signIn } = useContext(AuthContext);


const handleLogin = (event) => {
    event.preventDefault();
    // Implement login functionality here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

   signIn(email, password)
    .then (result => {
        const loggedUser = result.user;
        console.log (loggedUser);
        alert ("Login Successful");
        form.reset();
    })
  
    .catch(error => {

      const errorCode = error.code;
      const errorMessage = error.message;
    alert(error.message);

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
            <input type="email" name="email" className="input input-bordered" placeholder="Email" />

   
   {/* Password */}
   
            <label className="label font-semibold">Password</label>
            <input
              type="password" name="password"
              className="input input-bordered"
              placeholder="Password"
            />

           

            <button type="submit" className="btn btn-primary w-full mt-4">Login</button>

            <p className="font-semibold pt-5">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </fieldset>
        </form>
      </div>

    </div>
  );
};

export default Login;
