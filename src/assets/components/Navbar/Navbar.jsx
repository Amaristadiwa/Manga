import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-blue-600">My Manga</h2>
        
        <div className="flex items-center gap-4">
            <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Search
            </button>
            <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-blue-500"
            />
        </div>
    </nav>
);
};

export default Navbar;
