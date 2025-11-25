import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-full max-w-md mx-auto p-2">
      <h2 className="font-bold mb-4 text-center sm:text-left text-lg sm:text-xl">Login Now</h2>
      
      <div className="flex flex-col gap-3 w-full">
        <button className="btn w-full btn-outline btn-secondary flex items-center justify-center gap-2">
          <FaGoogle size={20} />
          <span>Login with Google</span>
        </button>

        <button className="btn w-full btn-outline btn-primary flex items-center justify-center gap-2">
          <FaGithub size={20} />
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
