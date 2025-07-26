import { Router } from "express";
import { GamesController } from "../controllers/games.controllers";

const routerGame = Router();
const gamesController = new GamesController();

routerGame.get ("/nombre", gamesController.getNombre)    // Parámetro Query
routerGame.get ("/genero/:genero", gamesController.getGenero)    // Parámetro
routerGame.get ("/:id", gamesController.getById)    // Parámetro
routerGame.get ("/", gamesController.getTodos)


export default routerGame;
