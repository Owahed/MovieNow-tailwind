import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
// import { SkillsButton } from './SkillsBtnElements'

const Movie = ({ movie }) => {
        const id = movie.id;
    
        const history = useHistory();
        const handelClick = (id) => {
            history.push(`/product/${id}`)
        }
        // console.log(movie)

    const url = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
    console.log(url)
    return (
        <div>
            
            <div class="container">
                <a style={{cursor:'pointer'}} onClick={() => handelClick(id)}>
                <img className="rounded-lg" src={url} alt="Avatar" class="image" />
                <div class="overlay">
                    <a  class="icon" title="Watch now">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
                </a>
            </div>
            <h2 className="text-white">{movie.title}</h2>
            <h5 className="text-white ">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {movie.vote_average}
                </div>
            </h5>

        </div>

    );
};

export default Movie;