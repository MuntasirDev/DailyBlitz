import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext as use } from "react";
import { set } from "date-fns";

const Register = () => {

  const {createUser ,setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();


const [nameError, setNameError] = useState("");
const [photoError, setPhotoError] = useState ("");
const [emailError, setEmailError] = useState ("");
const [passwordError, setPasswordError] = useState ("");

const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = form.photoUrl.value;
    if (photoUrl.length < 5) {
      setPhotoError("Photo URL must be at least 5 characters long");
      return;
    } else {
      setPhotoError("");
    }
    const email = form.email.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }
    const password = form.password.value; 
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else {
      setPasswordError("");
    }
    // console.log({name, photoUrl, email, password});

    createUser(email, password)
    .then(result => {
        const loggedUser = result.user;
     setUser(loggedUser);
        form.reset();
        updateUser ({displayName: name, photoURL: photoUrl})
        .then (() => {
          setUser({...loggedUser, displayName: name, photoURL: photoUrl});
          navigate("/");
        })
        .catch (error => {
          // console.log (error);
        });
        alert ("Registration Successful");
    })
    .catch(error => {
        // console.log(error);
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
              {nameError && <p className="text-red-600 font-semibold">{nameError}</p> }

              {/* Photo URL */}
              <label className="label font-semibold">Photo URL</label>
              <input name="photoUrl"
                type="text"
                className="input input-bordered"
                placeholder="Photo URL"
                required
              />
              {photoError && <p className="text-red-600 font-semibold">{photoError}</p> }
              {/* Email */}
              <label className="label font-semibold">Email</label>
              <input name="email"
                type="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />
              {emailError && <p className="text-red-600 font-semibold">{emailError}</p> }
              {/* Password */}
              <label className="label font-semibold">Password</label>
              <input name="password"
                type="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />
              {passwordError && <p className="text-red-600 font-semibold">{passwordError}</p> }

              <button type="submit" className="btn btn-primary w-full mt-4">Register</button>

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
