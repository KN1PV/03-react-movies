import axios from "axios";
import { type Movie } from "../types/movie";

interface MovieResponse {
    results: Movie[];
}

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
    console.log(import.meta.env.VITE_TMDB_TOKEN);
    
    const response = await axios.get<MovieResponse>('https://api.themoviedb.org/3/search/movie', {
        params: {
            query,
            include_adult: false,
            language: 'en-US',
            page: 1,
        },
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        }
    });

    return response.data;
};