
const rpsChoices = ["rock", "paper", "scissors"];
const rpslsChoices = ["rock", "paper", "scissors", "lizard", "spock"];

// Export `rps` functions
export default {

    rpsChoices: rpsChoices,
    rpslsChoices: rpslsChoices,

    rpsDefault: function () {

        return (
            { player: randomItem(rpsChoices) }
        );
    },

    rps: function (playerChoice) {

        const opponentChoice = randomItem(rpsChoices);

        return (
            {
                player: playerChoice,
                opponent: opponentChoice,
                result: determineIfWinner(playerChoice, opponentChoice)
            }
        );
    },

    rpslsDefault: function () {

        return (
            { player: randomItem(rpslsChoices) }
        );
    },

    rpsls: function (playerChoice) {

        const opponentChoice = randomItem(rpslsChoices);

        return (
            {
                player: playerChoice,
                opponent: opponentChoice,
                result: determineIfWinner(playerChoice, opponentChoice)
            }
        );
    },

}

// Helper functions

function randomItem(ar) {
    return ar[(Math.random() * ar.length) | 0];
}

function determineIfWinner(player, opponent) {

    if (player === "rock") {
        if (opponent === "rock") return "lose";
        if (opponent === "paper") return "lose";
        if (opponent === "scissors") return "win";
        if (opponent === "lizzard") return "win";
        if (opponent === "spock") return "lose";
    }
    if (player === "paper") {
        if (opponent === "rock") return "win";
        if (opponent === "paper") return "lose";
        if (opponent === "scissors") return "lose";
        if (opponent === "lizzard") return "lose";
        if (opponent === "spock") return "win";
    }
    if (player === "scissors") {
        if (opponent === "rock") return "lose";
        if (opponent === "paper") return "win";
        if (opponent === "scissors") return "lose";
        if (opponent === "lizzard") return "win";
        if (opponent === "spock") return "lose";
    }
    if (player === "lizzard") {
        if (opponent === "rock") return "lose";
        if (opponent === "paper") return "win";
        if (opponent === "scissors") return "lose";
        if (opponent === "lizzard") return "lose";
        if (opponent === "spock") return "win";
    }
    if (player === "spock") {
        if (opponent === "rock") return "win";
        if (opponent === "paper") return "lose";
        if (opponent === "scissors") return "win";
        if (opponent === "lizzard") return "lose";
        if (opponent === "spock") return "lose";
    }

    return "lose";
}