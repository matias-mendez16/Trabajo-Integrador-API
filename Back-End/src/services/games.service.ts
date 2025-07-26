import { GamesRepository } from "../repositories/games.repository";

export class GamesService {
    constructor (private gamesRepository = new GamesRepository()){}    

    getTodos = () => this.gamesRepository.getTodos();

    getById = (id: number) => this.gamesRepository.getById(id);

    getNombre = (nombre: string) => this.gamesRepository.getByNombre(nombre);

    getGenero = (genero: string) => this.gamesRepository.getByGenero(genero);

}
