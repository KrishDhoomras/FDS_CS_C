
  export default MovieList;
  import "./Movielist.css";
import movies from "./movies";
const Movieslist = () => {
  return (
    <div  className="movie-List">
        {movies.map((movie)=>(
            <div key={movie.id} className="movie-card">
                <img src={movie.image} className="movie-image"/>
                <h1>title:{movie.title}</h1>
                <h2>langauge:{movie.language}</h2>
                <h2>cost:{movie.cost}</h2>
                
            </div>

        ))}
        </div>
  )
};

export default Movieslist;