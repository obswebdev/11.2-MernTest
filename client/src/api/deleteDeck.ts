import { API_URL } from "./config";

export async function deleteDeck(deckId: string){
    const response = await fetch(`${API_URL}/decks/${deckId}`,
        {
            method: "DELETE",
        }
    );
    return response.json();
}