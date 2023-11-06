import { Request, Response} from "express";
import Deck from "../models/Deck"

export async function getDecksController(req:Request, res:Response){
    // fetch all decks and send back to the user
    // how do we fetch the decks from mongo
    // how do we send back the array to the UI
    const decks = await Deck.find(
        // {
        //     title: "yaay"
        // }
    );
    res.json(decks);
}