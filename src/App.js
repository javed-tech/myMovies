import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  // const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  // const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setsearchTerm] = useState('')

  // useEffect(() => {
  //   getmovies(Featured_API);
  // }, [])

  // const getmovies=(API)=>{
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setMovies(data.results)
  //     })
  // }

  // const handleonSubmit = (e) => {
  //   e.preventDefault()
  //   if (searchTerm) {
      
  //     getmovies(SEARCH_API + searchTerm)
        
  //     setsearchTerm('')
  //   }
  // }

  // const handleonChange = (e) => {
  //   setsearchTerm(e.target.value)
  // }
  return (
    <>
    <Navbar/>
    <Footer/>
      {/* <form onSubmit={handleonSubmit}>
        <header>
          <input
            className="search"
            placeholder="search"
            type="search"
            value={searchTerm}
            onChange={handleonChange} />
        </header>
      </form>
      <div className="movie-container">
        {
          movies.length > 0 && movies.map((movie) =>
            <Movie key={movie.id} {...movie} />
          )
        }
      </div> */}
    </>
  );
}

export default App;
