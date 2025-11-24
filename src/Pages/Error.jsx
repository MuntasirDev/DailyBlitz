import React from "react";
// Assuming you are using 'react-router-dom' for modern React apps,
// I've changed 'react-router' to 'react-router-dom' and 'Link' import.
import { Link } from "react-router"; 
// If you are using an older version of react-router, keep 'import { Link } from "react-router";'

const EnhancedError = () => {
  return (
    // Use a fixed or prominent background, min-h-screen for full height
    <div className="min-h-screen flex items-center justify-center bg-base-300 p-4">
      
      {/* Container for the content - gives it a card-like feel */}
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl p-10 text-center transform transition duration-500 hover:scale-[1.01] rounded-xl border-t-4 border-secondary">
        
        {/* Decorative element - a disconnected icon or graphic */}
        <div className="text-secondary mb-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.174 3.374 1.94 3.374h14.71c1.766 0 2.806-1.874 1.94-3.374L13.94 2.146c-.664-1.15-2.314-1.15-2.978 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        {/* 404 Heading */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-secondary tracking-widest leading-none">
          404
        </h1>

        {/* Secondary Title with a Divider */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-5 border-b pb-4 border-base-200">
          Oops! Lost in the Matrix
        </h2>

        {/* Descriptive Text */}
        <p className="text-base-content opacity-90 mt-2 text-lg max-w-sm mx-auto">
          The page you’ve been looking for seems to have gone on a little vacation.
          Let's get you back to where the action is!
        </p>

        {/* The Link Button */}
        <Link
          to="/"
          className="btn btn-secondary btn-lg mt-8 text-white font-bold tracking-wider uppercase transition duration-300 hover:shadow-xl hover:opacity-90"
        >
          🚀 Go Back Home
        </Link>
        
        {/* Footer/Trademark */}
        <p className="text-sm text-base-content opacity-50 mt-6 pt-4 border-t border-base-200/50">
           Stay updated. Stay informed. Stay Blitzed.
        </p>
      </div>
    </div>
  );
};

export default EnhancedError;