import { React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header';
import Contact from './Contact'
import Movie from './Movie'
const Navbar = () => {
    const Featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('')


    useEffect(() => {
        getmovies(Featured_API);
    }, [])

    const getmovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setMovies(data.results)
            })
    }

    const handleonSubmit = (e) => {
        e.preventDefault()
        if (searchTerm) {

            getmovies(SEARCH_API + searchTerm)

            setsearchTerm('')
        }
    }

    const handleonChange = (e) => {
        setsearchTerm(e.target.value)
    }
    return (
        <>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container">
                        <img src="green_app_icon.svg" className="logo " alt="logo" />
                        <NavLink className="navbar-brand" to="/">MoviesDB </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form class="myform form-inline  " onSubmit={handleonSubmit}>
                                <input class=" form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleonChange}
                                />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={handleonSubmit}>Search</button>
                            </form>

                        </div>
                    </div>
                </nav>
                <Header/>
                <div className="movie-container">
                    {
                        movies.length > 0 && movies.map((movie) =>
                            <Movie key={movie.id} {...movie} />
                        )
                    }
                </div>
                <Contact/>
            </div>

        </>
    )
}

export default Navbar
