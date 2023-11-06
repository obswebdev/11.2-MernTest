import {  useState } from 'react';
import { createCard } from './api/createCard';
import { useParams } from 'react-router-dom';
import './App.css';
import { getDecks, TDeck } from './api/getDecks';
import { getSingleDeck } from './api/getSingleDeck';



export default function DeckO() {
    const [deck, setDeck] = useState<TDeck | undefined>();
    const [text, setText] = useState('');
    const {deckId} = useParams();
    const [cards, setCards] = useState<string[]>([]);

    async function handleCreateCard(e: React.FormEvent){
        e.preventDefault();
        const {cards: serverCards} = await createCard(deckId!, text)

        console.log(cards);
        console.log(serverCards);

        setCards(serverCards);
        setText("");
    }


    // useEffect(()=> { 
    //     async function fetchDeck(){
    //         if (!deckId) return;
    //         const newDeck = await getSingleDeck(deckId);
    //         setDeck(newDeck);
    //         setCards(newDeck.cards);
    //     };
    //     fetchDeck();
    // }, [deckId]);

    // async function handleDeleteDeck(deckID: string){  
    // await deleteDeck(deckID);
    // // refresh everything or update using available array
    // setDecks(decks.filter(deck => deck._id !== deckID));
    // }

    return <div className="App">
        <ul className="decks">
            {
                cards.map((card:string, index: number) => (
                <li key={index}>
                    {/* <button onClick={() => handleDeleteDeck(deck._id)}>X</button> */}
                    {index}
                    {card}
                </li>
                ))
            }
        </ul>
        <form onSubmit={handleCreateCard}>
            <label htmlFor="card-text">Card Title</label>
            <input 
            id="card-text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
            } 
                // TODO: save what they typed

            }
            />
            <button>Create Card</button>
        </form>
    </div>
}