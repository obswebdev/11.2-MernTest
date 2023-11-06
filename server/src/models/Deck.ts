import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
    title: String,
    cards: [String],
});

const DeckModelX = mongoose.model("Deck", DeckSchema);

export default DeckModelX;

