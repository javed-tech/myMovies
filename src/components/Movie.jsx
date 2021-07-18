import React from 'react'

const Movie = ({ title, poster_path, overview, vote_average }) => {
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return (
        <>
            <div className="movie">
                <img  src={ poster_path
                    ? IMG_API + poster_path
                : "https://images.unsplash.com/photo-1612036781997-c3c7622682fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1hcnZlbCUyMG1vdmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            } alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    )
}

export default Movie
