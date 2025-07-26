import { Request, Response } from "express";
import { GamesService } from "../services/games.service";

export class GamesController {
    constructor (private gamesService = new GamesService()){
    }

    getTodos = (req: Request, res: Response) => {   // http://localhost:3000/games/
        try {
            res.json(this.gamesService.getTodos());
        } catch (error) {
            res.status(500).json ({ error: "Error interno de nuestros servidores. (Error 500)"});
        }
    }

    getById = (req: Request, res: Response) => {    // http://localhost:3000/games/21
        try {
            const id = parseInt(req.params.id);
            const game = this.gamesService.getById(id);
            if (!game){
                res.status(404).json ({ error: `El ID que seleccionaste (${id}) no coincide con ningún juego de nuestro catálogo. (Error 404)`});
            } else {
                res.json(game);
            }
        } catch (error) {
            res.status(500).json ({ error: "Error interno de nuestros servidores. (Error 500)"});
        }
    }

    getNombre = (req: Request, res: Response) => {  // http://localhost:3000/games/nombre?nombre=sonic
        try {
            const nombre = req.query.nombre as string;
            const game = this.gamesService.getNombre(nombre);
            if (!game || game.length === 0){
            res.status(404).json ({ error: `El nombre que seleccionaste (${nombre}) no coincide con ningún juego de nuestro catálogo. (Error 404)`});
            } else {
                res.json(game);
            }
        } catch (error) {
            res.status(500).json ({ error: "Error interno de nuestros servidores. (Error 500)"});
        }
    }

    getGenero = (req: Request, res: Response) => {  // http://localhost:3000/games/genero/aventura
        try {
            const genero = req.params.genero;
            const game = this.gamesService.getGenero(genero as string);
            if (!game || game.length === 0) {
            res.status(404).json ({ error: `El género que seleccionaste (${genero}) no coincide con ningún juego de nuestro catálogo. (Error 404)`});
            } else {
                res.json (game);
            }
        } catch (error) {
            res.status(500).json ({ error: "Error interno de nuestros servidores. (Error 500)"});
        }
    }
}
