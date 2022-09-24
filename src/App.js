import React, { useState } from "react";
import { useEffect  } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//1e303ad6

const API_URL = "http://www.omdbapi.com?apikey=1e303ad6";
const movie1 = {
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "tt0112462",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
};
const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchWord,setSearchWord] = useState();
    const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`) ;   
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    }
     useEffect(()=>{
        searchMovies('hulk')
     },[])

    return(
       <div className="app">
             <h1>MovieLand</h1>
             <div className="search">
                 <input
                 placeholder="Search for movies"
                 value={searchWord}
                 onChange={(e)=>setSearchWord(e.target.value)}

                 />
                 <img
                 src={SearchIcon}
                 alt="search"
                 onClick={()=>searchMovies(searchWord)}
                 />
             </div>
             {
                movies?.length>0?(  <div className="container">
                {movies.map((movie)=>(<MovieCard movie={movie}/>))}
                </div>):(
                <div className="empty">
                <h2>No movies found</h2>
                </div>
                )
                
             }
            
       </div>
    );
}

export default App;