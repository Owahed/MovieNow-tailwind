import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from './Movie';

const Movies = () => {
    const [movies,setMovies]=useState({})

    
    let moviesResults=movies.results;

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=cdfdbad09e4ac97664fb24ceeef8d121')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);
    return (
        <div style={{backgroundColor: '#112D42',paddingBottom:'50px'}} className="align-c">
            <h2 className="text-xl text-white py-10 pl-10 sm:text-center">Popular Movies </h2>
            <div class="grid gap-5 md:grid-cols-5 sm:grid-cols-1 justify-items-center" >
            {
                moviesResults?.map(movie=><Movie movie={movie}></Movie>)
            }
            </div>
        </div>
    );
};

export default Movies;