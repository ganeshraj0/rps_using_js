var play = confirm ("shell we play rock paper scissor ?");
if (play) {
  let playerchose = prompt("pls enter 'rock' or 'paper' or 'scissor'");
  if (playerchose) {
    let playes = playerchose.toLowerCase().trim();
    if (playes === "rock" || playes === "paper" || playes === "scissor") {
      let computerchose = Math.floor(Math.random() * 3 );
      let computer = computerchose === 0
          ? "rock"
          : computerchose === 1
          ? "paper"
          : "scissor";
      let result =
        playes === computer ?`player: ${playes}\ncomputer:${computer}\n tie game !`
          : playes === "rock" && computer === "paper"
          ? `player: ${playes}\ncomputer:${computer}\nComputer Wins!`
          : playes === "paper" && computer === "scissor"
          ? `player: ${playes}\ncomputer:${computer}\nComputer Wins!`
          : playes === "scissor" && computer === "rock"
          ? `player: ${playes}\ncomputer:${computer}\nComputer Wins!`
          : `player: ${playes}\ncomputer:${computer}\nPlayer Wins :) `
      alert(result);
      let playAgain = confirm("Play Again? ");
      playAgain ? location.reload() : alert("Ok, thanks for playing ");
    } else {
      alert("You didn't enterrock paper or scissor");
    }
  } else {
    alert("Ok, maybe next time.");
  }
}
