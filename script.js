// Array to store participants' names
let participants = [];

// Function to add participant to the list
function addParticipant() {
    const participantName = document.getElementById("participantName").value.trim();
    if (participantName !== "") {
        participants.push(participantName);
        displayParticipants();
        document.getElementById("participantName").value = ""; // Clear input field
    }
}

// Function to display participants' names
function displayParticipants() {
    const participantsList = document.getElementById("participants");
    participantsList.innerHTML = "";
    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = participant;
        participantsList.appendChild(li);
    });
}

// Function to randomly select and display winner
function drawWinner() {
    const winnerDisplay = document.getElementById("winner");
    if (participants.length > 0) {
        const winnerIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[winnerIndex];
        winnerDisplay.innerHTML = `<p>${winner} wins!</p><p>🎂🎉</p>`; // Display winner and emojis
    } else {
        winnerDisplay.textContent = "No participants entered.";
    }
}

// Function to reset the Raffle
function resetRaffle () {
    const participantsList = document.getElementById('participants');
    const winnerDisplay = document.getElementById('winner');

    participants.length = 0;
    participantsList.innerHTML = "";
    winnerDisplay.innerHTML = "";
}