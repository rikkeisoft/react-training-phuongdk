import React, { Component } from 'react';
import config from '../config';
import Breadcrumbs from '../partials/breadcrumbs';
import axios from 'axios';

export default class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: ''
        };
        axios.get('https://www.omdbapi.com/?s=The+A&apikey=5f404258')
        .then(results => {
            if (results.data.Response === 'True') {
                console.log(results);
                this.setState({
                    movies: results.data.Search
                });
            }
            console.log(this.state.movies);
        })
        .catch(error => console.log(error));
        ;
  }
  
    render() {
        const movies = this.state.movies;
        return (
            <div className="search-wrapper">
                <Breadcrumbs title={config.page.search.title} color={config.page.search.color} bgcolor={config.page.search.bgcolor} />
            <div className="search-content block-content">
                {
                    movies !== null && movies.length > 0
                    ? movies.map((movie, key) =>
                    <div className="movie-content-wrap" key={key}>
                      <div>Poster: <br/> <img src={movie.Poster} alt="Poster" /></div>
                      <div>Title: { movie.Title }</div>
                      <div>Year: { movie.Year }</div>
                      <div>Movie Type: { movie.Type }</div>
                      <div>IMDB ID: { movie.imdbID }</div>
                    </div>
                    )
                    : ''
                }
            </div>
            </div>
        );
    }
}