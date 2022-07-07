import axios from "axios";
import {Film} from "@/models/Film";

class FilmService {
    url = 'http://localhost:3000/films';

    create(film) {
        return axios.post(this.url, film)
            .then( ({data}) => this.filmMapper(data))
            .catch( () => this.handleError())
    }

    getAll() {
        return axios.get(this.url)
            .then( ({data}) => data.map(el => this.filmMapper(el)))
            .catch(() => this.handleError())
    }

    delete(id) {
        return axios.delete(`${this.url}/${id}`)
            .catch(() => this.handleError())
    }

    update(film) {
        return axios.put(`${this.url}/${film.id}`, film)
            .then(({data}) => this.filmMapper(data))
            .catch( () => this.handleError())
    }

    filmMapper(film_raw) {
        const film =  new Film(film_raw.id, film_raw.title, film_raw.image, film_raw.vu);
        film.id = film_raw.id;
        return film;
    }


    handleError() {
        alert('Nope')
    }
}

export default new FilmService()