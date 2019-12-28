import fetch from "node-fetch";

export const people = [
    {
        id : 0,
        name : "Nicolas",
        age : 18,
        gender : "Female"
    },
    {
        id : 1,
        name : "jisu",
        age : 20,
        gender : "Female"
    },
    {
        id : 2,
        name : "kim",
        age : 15,
        gender : "male"
    },
    {
        id : 3,
        name : "lady",
        age : 23,
        gender : "Female"
    },
    {
        id : 4,
        name : "man",
        age : 25,
        gender : "male"
    },
    {
        id : 5,
        name : "park",
        age : 14,
        gender : "male"
    }
];

let movies = [
    {
        id : 0,
        name : "Star Wars - The new one",
        score : 1
    },
    {
        id : 1,
        name : "Avengers - The new one",
        score : 8
    },
    {
        id : 2,
        name : "The Godfather I",
        score : 99
    },
    {
        id : 3,
        name : "Logan",
        score : 2
    },
]

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = () => movies;
export const getApi = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json=>json.data.movies);
}

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie =>movie.id !== id);
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}

export const getMovieById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : `${movies.length + 1}`,
        name, 
        score 
    };
    movies.push(newMovie);
    return newMovie;
}