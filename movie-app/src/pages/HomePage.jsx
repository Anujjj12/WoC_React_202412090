import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/omdbService";
import Header from "@/components/header";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      const data = await fetchMovies(query);

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("Movie not found");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="w-full px-4 mt-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && (
        <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
      )}

      {error && (
        <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
      )}

      <div className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <Card className="bg-slate-300 p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
                  }
                  alt={movie.Title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {movie.Title}
                  </h3>
                  <p className="text-sm text-gray-600">{movie.Year}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
