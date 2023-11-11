import {  useEffect, useState } from 'react';
import { createCard } from './api/createCard';
import { useParams } from 'react-router-dom';
import './Deck.css';
import { TDeck } from './api/getDecks';
import { getSingleDeck } from './api/getSingleDeck';
import { deleteCard } from './api/deleteCard';



export default function DeckO() {
    const [deck, setSingleDeck] = useState<TDeck | undefined>();
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
    };


    useEffect(()=> { 
        async function fetchDeck(){
            if (!deckId) return;
            const newDeck = await getSingleDeck(deckId);
            setSingleDeck(newDeck);
            console.log(deck, 'This is the set deck');
            setCards(newDeck.cards);
        };
        fetchDeck();
    }, [deckId]);

    async function handleDeleteCard(index:number){  
        if (!deckId) return;
        const newDeck = await deleteCard(deckId, index);
        setCards(newDeck.cards);
    }

    return <div className="Deck">
        <h1>{deck?.title}</h1>
        <ul className="cards">
            {
                cards.map((card:string, index: number) => (
                <li key={index}>
                    <button onClick={() => handleDeleteCard(index)}>X</button>
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