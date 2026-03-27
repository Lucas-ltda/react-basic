import React, { useState } from 'react';

export default function Body() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', rating: 8.8, genre: 'Ficção Científica' },
        { id: 2, title: 'The Dark Knight', rating: 9.0, genre: 'Ação' },
        { id: 3, title: 'Pulp Fiction', rating: 8.9, genre: 'Drama' },
    ]);

    const [filter, setFilter] = useState('');

    const handleAddMovie = (newMovie) => {
        setMovies([...movies, { id: Date.now(), ...newMovie }]);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <main className="body-container">
            <section className="hero">
                <h1>🎬 Avaliações de Filmes</h1>
                <p>Descubra e avalie seus filmes favoritos</p>
            </section>

            <section className="search-filter">
                <input
                    type="text"
                    placeholder="Buscar filme..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="search-input"
                />
            </section>

            <section className="movies-grid">
                {filteredMovies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <h3>{movie.title}</h3>
                        <p className="genre">{movie.genre}</p>
                        <div className="rating">⭐ {movie.rating}/10</div>
                    </div>
                ))}
            </section>
        </main>
    );
}