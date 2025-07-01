import React from "react";

const ComicCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">Explore this epic manhwa adventure</p>
        <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ComicCard;

