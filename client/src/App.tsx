import { useEffect, useState } from 'react';
import './App.css';
import {Outlet, Link} from "react-router-dom";

type TDeck = {
  title:string;
  _id:string; 
}

function App() {
  
  const [title, setTitle] = useState('');
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent){
    e.preventDefault();
    const response = await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }

    });
    const deck = await response.json();

    // the thing below takes the original array and adds a new element to the end of the array - this means adds become automatic on the UI

    setDecks([...decks, deck]);
    setTitle("");

  }

  useEffect(()=> {
    async function fetchDecks(){
      const response = await fetch("http://localhost:5000/decks");
      const newDecks = await response.json();
      setDecks(newDecks);
    };
    fetchDecks();
  }, [])

  async function handleDeleteDeck(deckID: string){
    await fetch(`http://localhost:5000/decks/${deckID}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },

    });
    // refresh everything or update using available array
    setDecks(decks.filter(deck => deck._id !== deckID));
  }

  return <div className="App">
    <ul className="decks">
      {
        decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
            {deck.title}
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))
      }
    </ul>
    <form onSubmit={handleCreateDeck}>
      <label htmlFor="deck-title">Deck Title</label>
      <input 
        id="deck-title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        } 
          // TODO: save what they typed

        }
      />
      <button>Create Deck</button>
    </form>
  </div>
  
}

export default App
