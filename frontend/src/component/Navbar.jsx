import { PlusIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import React from "react";
import SearchBar from "./SearchBar";

const Navbar = ({onSearchChange}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    navigate("/login"); // Redirect to login page
  };

  return (
    <header>
      <div className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto md:max-w-6xl  px-4 py-4">
          <div className="flex flex-wrap items-center  justify-between gap-2">
            {/* Logo */}
            <h1 className="font-bold text-xl md:text-3xl text-primary cursor-pointer" onClick={() => navigate("/")}>
              NoteFlow
            </h1>
            
            <SearchBar onSearchChange={onSearchChange}/>


            <div className="flex items-center gap-4">
              {/* Add Note Button */}
              <Link to={"/create"} className="btn btn-outline btn-primary px-1 md:px-2">
                <span className="text-sm md:text-lg">Add Note</span>
                <PlusIcon className="h-3 w-3 md:h-5 md:w-5" />
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-error btn-outline flex items-center gap-2 px-1 md:px-2"
              >
                <LogOutIcon className="h-3 w-3 md:h-5 md:w-5" />
                <span className="text-sm md:text-lg">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
