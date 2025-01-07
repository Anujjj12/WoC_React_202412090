import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "@/services/omdbService";

const MovieDetails = () => {
  const { id } = useParams(); // Get the imdbID from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        console.log("API response:", data);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found");
        }
      } catch (err) {
        setError("Failed to fetch movie details. Please try again.");
      }
    };

    getMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6">
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="flex-shrink-0">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-lg w-full md:w-64 h-auto object-cover"
            />
          </div>

          <div className="flex-grow text-gray-600">
            <h1 className="text-3xl font-bold text-gray-800">{movie.Title}</h1>
            <p className="mt-2">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>IMDb Rating:</strong>{" "}
              <span className="text-yellow-500">{movie.imdbRating}</span>
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Plot:</strong> {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
