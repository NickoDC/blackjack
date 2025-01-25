// Deck setup
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1]; // Ace is 1 for now

// Function to draw a card
function drawCard(currentHandTotal) {
    const card = deck[Math.floor(Math.random() * deck.length)]; // Randomly pick a card
    if (card === 1) { // It's an Ace
        // Decide its value: 11 if it won't bust, otherwise 1
        return currentHandTotal + 11 <= 21 ? 11 : 1;
    }
    return card; // For all other cards, return the value directly
}

// Example game simulation
function playGame() {
    let hand = [];
    let currentTotal = 0;

    // Draw 3 cards as an example
    for (let i = 0; i < 3; i++) {
        const card = drawCard(currentTotal);
        hand.push(card);
        currentTotal += card;
        console.log(`Card drawn: ${card}, Hand total: ${currentTotal}`);
    }

    console.log(`Final hand: ${hand}, Final total: ${currentTotal}`);
}

// Run the game
playGame();
