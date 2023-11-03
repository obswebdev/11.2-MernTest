export async function getDecks(){
    const response = await fetch('http://localhost:5000/decks');
    return response.json();
}