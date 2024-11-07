import React from 'react';

const Header = ({ adminName }) => {
  return (
    <header className="w-full h-10 bg-gray-700 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-white text-xl">Welcome, {adminName}</h1>
      </div>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;