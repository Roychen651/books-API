import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0); 
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (loadMore = false) => {
    if (!searchQuery) {
      toast.error("Please enter a search term!");
      return;
    }

    setLoading(true); 

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=10`
      );
      if (response.data.items) {
        setBooks((prevBooks) =>
          loadMore ? [...prevBooks, ...response.data.items] : response.data.items
        );
        setStartIndex(startIndex + 10); 
        toast.success(`Loaded ${response.data.items.length} books!`);
      } else {
        toast.error("No more books found.");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("An error occurred while fetching books.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100">
      {/* Global Toaster for Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* App Content */}
      <div className="container mx-auto p-4">
        {/* App Header */}
        <h1
          className="text-6xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg shadow-purple-500/50 hover:scale-105 transition-all duration-300"
        >
          Book Finder
        </h1>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={() => {
            setStartIndex(0); 
            fetchBooks();
          }}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="my-6">
            <LoadingSpinner />
          </div>
        )}

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Load More Button */}
        {books.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              onClick={() => fetchBooks(true)}
              disabled={loading} 
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
