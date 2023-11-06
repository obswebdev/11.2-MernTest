import { Request, Response} from "express";
import Deck from "../models/Deck";

export async function deleteDeckController(req:Request, res:Response){
   // TODO
    // 1. Get the deck id from the url
    // 2. Delete the deck from Mongo
    // 3. return the deleted deck to the user who made the request
    
    const deckId = req.params.deckId;

    const deck = await Deck.findByIdAndDelete(deckId);

    res.json(deck);
}