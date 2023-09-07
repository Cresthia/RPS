const scores =
{
    wins: 0,
    loses: 0,
    ties: 0
}
let tries = 0;

function rpsTurn()
{
    let turn = Math.floor(Math.random() * 3)
    tries += 1;

    if (turn == 0)
    {
        scores.loses += 1;
        document.getElementById("status-id").innerText = "Lost!";
        document.getElementById("scores-id").innerText = "Wins = " + scores.wins + " Losses = " 
        + scores.loses + " Ties = " + scores.ties;
        document.getElementById("attempts-id").innerText = "Attempts = " + tries;
        document.getElementById("status-id").style = "    color:rgb(255, 27, 27);"
        if (scores.loses == 10)
        {
            window.location.href = "lose.html";
        }
    }
    if (turn == 1)
    {
        scores.wins += 1;
        document.getElementById("status-id").innerText = "Won!";
        document.getElementById("scores-id").innerText = "Wins = " + scores.wins + " Losses = " 
        + scores.loses + " Ties = " + scores.ties;
        document.getElementById("attempts-id").innerText = "Attempts = " + tries;
        document.getElementById("status-id").style = "color:rgb(27, 255, 35);"
        if (scores.wins == 10)
        {
            window.location.href = "win.html";
        }
    }
    if (turn == 2)
    {
        scores.ties += 1;
        document.getElementById("status-id").innerText = "Tie!";
        document.getElementById("scores-id").innerText = "Wins = " + scores.wins + " Losses = " + scores.loses 
        + " Ties = " + scores.ties;
        document.getElementById("attempts-id").innerText = "Attempts = " + tries;
        document.getElementById("status-id").style = "color:rgb(255, 208, 0);"
    }
}
function replay()
{
    window.location.href = "index.html";
}