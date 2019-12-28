import { people, getById } from "./db"
import { getMovies, getMovieById, addMovie, deleteMovie } from "./db"
import { getApi } from "./db"

const resolvers = {
    Query : {
        people : () => people,
        person : (_, {id}) => getById(id),
        movies : () => getMovies(),
        movie : (_, {id}) => getMovieById(id),
        movieAPI :(_, {limit, rating}) => getApi(limit, rating)
    },
    Mutation : {
        addMovie : (_, {name, score}) => addMovie(name, score),
        deleteMovie : (_, {id}) => deleteMovie(id)
    }
}

export default resolvers;