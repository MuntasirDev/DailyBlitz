import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext as use } from "react";
import { set } from "date-fns";

const Register = () => {

  const {createUser ,setUser} = use(AuthContext);



const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value; 
    console.log({name, photoUrl, email, password});

    createUser(email, password)
    .then(result => {
        const loggedUser = result.user;
     setUser(loggedUser);
        form.reset();
    })
    .catch(error => {
        console.log(error);
    })
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
          <h2 className="text-2xl font-bold text-center mt-6">
            Register Your Account
          </h2>

          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset space-y-2">
              {/* Name */}
              <label className="label font-semibold">Your Name</label>
              <input name="name"
                type="text"
                className="input input-bordered"
                placeholder="Your Name"
                required
              />

              {/* Photo URL */}
              <label className="label font-semibold">Photo URL</label>
              <input name="photoUrl"
                type="text"
                className="input input-bordered"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label font-semibold">Email</label>
              <input name="email"
                type="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label font-semibold">Password</label>
              <input name="password"
                type="password"
                className="input input-bord ered"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-primary w-full mt-4">Login</button>

              <p className="font-semibold pt-5">
                Already Have An Account?{" "}
                <Link className="text-secondary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
