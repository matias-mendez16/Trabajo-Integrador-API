import * as fs from "fs";
import * as path from "path";
import { Games } from "../models/games";

const dataPath = path.join (__dirname, '../repositories/games.json')

export class GamesRepository {
    private games: Games[] = [];

    constructor (){
        this.games = JSON.parse(fs.readFileSync (dataPath, 'utf-8'));
    }

    public getTodos() : Games[] {
        return this.games;
    }

    public getById (id: number): Games | undefined {
        return this.games.find(games => games.id.toString() === id.toString());
    }

    public getByNombre (nombre: string): Games[] |undefined {
        return this.games.filter(game => 
            game.nombre.toLowerCase().trim().includes(nombre.toLowerCase().trim())
        );
    }

    public getByGenero (genero: string): Games[] {
        return this.games.filter(games => 
            games.genero.toLowerCase().trim().includes(genero.toLowerCase().trim())
        );
    }
}
