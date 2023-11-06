import {config} from "dotenv";
config();

import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from "cors";
import Deck from "./models/Deck";
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { getSingleDeckController } from "./controllers/getSingleDeckController";


const PORT = 5000;

const app = express();

// allows json post requests
app.use(express.json());
// allow bypass of requests when running locally
app.use(
    cors({
        origin: "*"
    })
);


app.get('/decks', getDecksController);
app.delete('/decks/:deckId', deleteDeckController);
app.post("/decks", createDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController)
app.get('/decks/:deckID', getSingleDeckController)

app.get("/hello", async (req: Request, res: Response) => {
    res.send("hello world !!!");
    console.log(req.body.title);
});

mongoose.connect(
    process.env.MONGO_URL ?? ""
).then(()=> {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});


