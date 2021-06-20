import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendedMovie from './RecommendedMovie'

const MovieDetail = () => {
    const { id } = useParams();

    const [moviesDetail, setMoviesDetail] = useState();
    const moviesData = moviesDetail?.find((data) => data.id == id);
    const [tvShowDetail, setTvShowDetail] = useState();
    const tvShowData = tvShowDetail?.find((data) => data.id == id);

    console.log(tvShowData)
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdfdbad09e4ac97664fb24ceeef8d121')
            .then(res => res.json())
            .then(data => setMoviesDetail(data.results))
    }, []);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=cdfdbad09e4ac97664fb24ceeef8d121')
            .then(res => res.json())
            .then(data => setTvShowDetail(data.results))
    }, []);



    const [movies,setMovies]=useState({})

    
    let moviesResults=movies?.results;

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cdfdbad09e4ac97664fb24ceeef8d121')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    
   
    let url=null;
    if (moviesData) {
        url = `https://image.tmdb.org/t/p/w185${moviesData?.backdrop_path}`;
      } else {
        url = `https://image.tmdb.org/t/p/w185${tvShowData?.backdrop_path}`;
      }
    
   
    return (
        <div className="h-screen detailCom text-white">
            <div className="backgroundImg" style={{ background: "url(https://dmitryvolkov.me/demo/flixtv/main/img/details.jpg)", backgroundPosition: "center" }}>

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 text-white z-10 relative sm:p-10  md:mt-20 md:ml-20 md:mt-8">
                <div className="sm:h-auto">

                    <h1 className='text-5xl '>{moviesData?.title}</h1>
                    <h1 className='text-5xl '>{tvShowData?.original_name}</h1>
                    <p className="flex mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        {moviesData?.vote_average}
                        {tvShowData?.vote_average}
                    </p>
                    <p className="md:mt-12 block">{moviesData?.overview}</p>
                    <p className="md:mt-12 block">{tvShowData?.overview}</p>

                </div>
                <div class="flex justify-center mt-3">
                    <div  className="inline-flex ">
                        <img className="h-32 w-36 " src={url} alt="" />
                        {/* <button class="mt-8 ml-5 px-4 w-3/4 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transform motion-safe:hover:scale-110 ">
                            Watch now
                        </button> */}
                        <button class="btn-all ml-5 h-12">
                            Watch now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center detailCom h-28 md:h-72">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white z-10 relative animate-bounce " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
           <div className="detailCom">
           <div className="md:ml-20 ml-6">
                <p className='text-4xl uppercase py-4'>upcoming movies list</p>
                <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-4 justify-items-center" >
            {
                moviesResults?.map(movie=><RecommendedMovie movie={movie}></RecommendedMovie>)
            }
            
            </div>
            </div>
           </div>
        </div>
    );
};

export default MovieDetail;