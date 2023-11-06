import { Request, Response} from "express";
import Deck from "../models/Deck"

export async function getSingleDeckController(req:Request, res:Response){
    const {deckId} = req.params;
    const singleDeck = await Deck.findById(deckId);
    res.json(singleDeck);
}