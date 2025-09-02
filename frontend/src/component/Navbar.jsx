import { PlusIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    navigate("/login"); // Redirect to login page
  };

  return (
    <header>
      <div className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="font-bold text-3xl text-primary cursor-pointer" onClick={() => navigate("/")}>
              NoteFlow
            </h1>

            <div className="flex items-center gap-4">
              {/* Add Note Button */}
              <Link to={"/create"} className="btn btn-outline btn-primary">
                <span className="text-lg">Add Note</span>
                <PlusIcon className="h-5 w-5" />
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-error btn-outline flex items-center gap-2"
              >
                <LogOutIcon className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
