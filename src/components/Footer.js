import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5 h-[200px] gap-10">
      <Link to={`/`} className=" flex flex-col w-[50%] items-center ">
        <svg
          id="Layer_1"
          height="100"
          viewBox="0 0 24 24"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className="bg-yellow-500 p-1 rounded-xl"
        >
          <path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm1 11h2v2h-2zm0-2v-2h2v2zm-2 2h-12v-9h12zm-14 2h-2v-2h2zm0-4h-2v-2h2zm-2 6h2v2h-2zm4-2h12v9h-12zm14 2h2v2h-2zm2-10h-2v-2.816a3 3 0 0 1 2 2.816zm-18-2.816v2.816h-2a3 3 0 0 1 2-2.816zm-2 16.816h2v2.816a3 3 0 0 1 -2-2.816zm18 2.816v-2.816h2a3 3 0 0 1 -2 2.816z" />
        </svg>

        <span className="font-bold text-3xl font-serif">Movie App</span>
      </Link>
      <div className="flex flex-col items-start justify-center  gap-2 w-[50%]">
        <Link
          to={`https://github.com/puscasmadalina`}
          target="_blank"
          className="text-bold font-serif text-2xl italic"
        >
          Git Account
        </Link>
        <Link
          to={`https://www.linkedin.com/in/puscas-madalina`}
          className="text-bold font-serif text-2xl italic"
          target="_blank"
        >
          Linkedin Profile
        </Link>
      </div>
    </div>
  );
};

export default Footer;
