export async function createDeck(title: string){
    const response = await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }

    });
    return response.json();
}