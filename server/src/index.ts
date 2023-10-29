import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import Deck from "./models/Deck";

const PORT = 5000;

const app = express();

// allows json post requests
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    // res.send("hello world !!!");
    console.log(req.body);
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});
 

// app.get("/", (req: Request, res: Response) => {
//     res.send("hello world")
// });

// 8Vm29WGkvlSqBmm0

app.get("/hello", async (req: Request, res: Response) => {
    res.send("hello world !!!");
    console.log(req.body.title);
});

mongoose.connect(
    "mongodb+srv://ollyXX:xdcxx5kYmnjxmpH7@cluster0.ijd2qj8.mongodb.net/?retryWrites=true&w=majority"
).then(()=> {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});

