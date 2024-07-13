var play = confirm("shell we play rock paper scissor ?");
if (play) {
  let playerchose = prompt("pls enter rock paper scissor");
  if (playerchose) {
    let playes = playerchose.toLowerCase().trim();
    if (playes === "rock" || playes === "paper" || playes === "scissor") {
      let computerchose = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerchose === 1
          ? "rack"
          : computerchose === 2
          ? "paper"
          : "scissor";
      let result =
        playes === computer
          ? "tie game !"
          : playes === "rock" && computer === "paper"
          ? "Computer Wins!"
          : playes === "paper" && computer === "scissor"
          ? "Computer Wins!"
          : playes === "scissor" && computer === "rock"
          ? "Computer Wins! "
          : "Player Wins :) ";
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
