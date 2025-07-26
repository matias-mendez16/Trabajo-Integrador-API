import express from "express";
import cors from "cors";
import routerGame from "../src/routes/games.route";

const app = express ();
app.use(express.json());
app.use(cors());
app.use ("/games", routerGame)


app.listen (3000, () => {
    console.log ("El servidor está funcionando en el Puerto 3000");
});
