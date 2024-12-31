import React from "react";
import { toast } from "react-hot-toast";

const Modal = ({ show, book, onClose }) => {
  if (!show) return null;

  const { title, authors, description, imageLinks, previewLink } = book.volumeInfo;

  toast.info(`Viewing details for: ${title}`);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <button
          className="text-gray-400 hover:text-gray-600 float-right"
          onClick={() => {
            onClose();
            toast.success("Closed the book details.");
          }}
        >
          ✖
        </button>
        <div className="text-center">
          {imageLinks?.thumbnail && (
            <img
              src={imageLinks.thumbnail}
              alt={title}
              className="w-48 h-48 mx-auto mb-4"
            />
          )}
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">By: {authors?.join(", ") || "Unknown Author"}</p>
          <p className="mt-2 text-sm text-gray-700">{description || "No description available."}</p>
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
