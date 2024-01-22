import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-row bg-black h-20 text-white text-xs gap-4 items-center justify-center">
      <Link
        to="/"
        className="bg-yellow-500 text-lg text-black font-bold p-1 rounded hover:bg-gray-400 h-12 flex items-center gap-2"
      >
        <svg
          id="Layer_1"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm1 11h2v2h-2zm0-2v-2h2v2zm-2 2h-12v-9h12zm-14 2h-2v-2h2zm0-4h-2v-2h2zm-2 6h2v2h-2zm4-2h12v9h-12zm14 2h2v2h-2zm2-10h-2v-2.816a3 3 0 0 1 2 2.816zm-18-2.816v2.816h-2a3 3 0 0 1 2-2.816zm-2 16.816h2v2.816a3 3 0 0 1 -2-2.816zm18 2.816v-2.816h2a3 3 0 0 1 -2 2.816z" />
        </svg>
        Movie App
      </Link>
      <Link
        to="/movie"
        className="bg-gray-400 text-lg text-black font-bold p-1 rounded hover:bg-yellow-500 h-8 flex items-center"
      >
        Movies
      </Link>
      <Link
        to="/tvshows"
        className="bg-gray-400 text-lg text-black font-bold p-1 rounded hover:bg-yellow-500 h-8 flex items-center"
      >
        TV Shows
      </Link>
      <Link
        to="/actors"
        className="bg-gray-400 text-lg text-black font-bold p-1 rounded hover:bg-yellow-500 h-8 flex items-center"
      >
        Actors
      </Link>
    </nav>
  );
};

export default NavBar;
