📚 Books API

A modern and responsive Book Finder Application built using React, TailwindCSS, and Vite. The app allows users to search for books via the Google Books API, view details, and dynamically load more results with a beautiful and user-friendly interface.


✨ Features

Search for Books: Search books dynamically via the Google Books API.
Pagination: Load 10 books at a time, with the ability to load more using a "Load More" button.
Responsive Design: Fully responsive and optimized for all screen sizes.
Stunning UI: Beautiful animations, gradient backgrounds, and interactive elements for a modern look.
Error Handling: User-friendly error messages displayed using react-hot-toast.


🚀 Technologies Used

Frontend:
React (JavaScript library for building user interfaces)
TailwindCSS (Utility-first CSS framework)
Vite (Fast build tool and development server)
API:
Google Books API
UI Enhancements:
react-hot-toast (Toast notifications for feedback)
Custom animations and transitions via TailwindCSS


🛠️ Future Enhancements

Book Details Modal: Display additional book details in a popup modal.
Favorites: Allow users to save their favorite books locally.
Dark Mode: Add a toggle for light and dark themes.
Infinite Scroll: Replace the "Load More" button with automatic infinite scrolling.


Here's the README.md in proper Markdown format:

📚 Books API

A modern and responsive Book Finder Application built using React, TailwindCSS, and Vite. The app allows users to search for books via the Google Books API, view details, and dynamically load more results with a beautiful and user-friendly interface.

🖥️ Live Demo

View Live Project (Replace with your deployment link)
✨ Features

Search for Books: Search books dynamically via the Google Books API.
Pagination: Load 10 books at a time, with the ability to load more using a "Load More" button.
Responsive Design: Fully responsive and optimized for all screen sizes.
Stunning UI: Beautiful animations, gradient backgrounds, and interactive elements for a modern look.
Error Handling: User-friendly error messages displayed using react-hot-toast.
🚀 Technologies Used

Frontend:
React (JavaScript library for building user interfaces)
TailwindCSS (Utility-first CSS framework)
Vite (Fast build tool and development server)
API:
Google Books API
UI Enhancements:
react-hot-toast (Toast notifications for feedback)
Custom animations and transitions via TailwindCSS
📂 Project Structure

├── public/                 # Public assets (e.g., favicon, images)
├── src/                    # Main source code
│   ├── components/         # React components
│   │   ├── SearchBar.jsx   # Search bar component
│   │   ├── BookCard.jsx    # Individual book cards
│   │   ├── LoadingSpinner.jsx # Spinner for loading state
│   ├── App.jsx             # Main app file
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── README.md               # Project documentation
├── package.json            # Project dependencies
├── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration
⚙️ Installation and Setup

Follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/Roychen651/books-API.git
cd books-API
Install Dependencies:
npm install
Start the Development Server:
npm run dev
Open your browser and navigate to:
http://localhost:5173
🔑 Environment Variables

This project uses the Google Books API. You will need an API key to fetch data. Create a .env file in the root directory and add your API key:

VITE_API_KEY=your_google_books_api_key
Make sure to replace your_google_books_api_key with your actual API key.

🛠️ Future Enhancements

Book Details Modal: Display additional book details in a popup modal.
Favorites: Allow users to save their favorite books locally.
Dark Mode: Add a toggle for light and dark themes.
Infinite Scroll: Replace the "Load More" button with automatic infinite scrolling.


📜 License

This project is licensed under the MIT License.


🙏 Acknowledgements

Google Books API for providing the book data.
TailwindCSS for the amazing utility-first CSS framework.