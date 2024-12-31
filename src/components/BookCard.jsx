import React from "react";

const BookCard = ({ book }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors?.join(", ");
  const publishedDate = book.volumeInfo.publishedDate;

  return (
    <div className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
      {/* Decorative Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-all duration-300"></div>

      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-all duration-300"
        />
      )}
      <h3 className="text-lg font-bold text-gray-700 group-hover:text-primary transition-all duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{authors || "Unknown Author"}</p>
      <p className="text-sm text-gray-500 mt-1">{publishedDate || "N/A"}</p>
    </div>
  );
};

export default BookCard;
