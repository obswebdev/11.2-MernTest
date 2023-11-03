export async function deleteDeck(deckId: string){
    const response = await fetch(`http://localhost:5000/decks/${deckId}`,
        {
            method: "DELETE",
        }
    );
    return response.json();
}