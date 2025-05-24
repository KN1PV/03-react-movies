import axios from "axios";
import { type Movie } from "../types/movie";

interface MovieResponce {
    results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    console.log(import.meta.env.VITE_VITE_TMDB_TOKEN);
    
    const response = await axios.get<MovieResponce>('https://api.themoviedb.org/3/search/movie', {
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

    return response.data.results;
 };