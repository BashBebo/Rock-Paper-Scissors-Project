let RockButton_ = document.getElementById("RockButton")
let ScissorsButton_ = document.getElementById("ScissorsButton")
let PaperButton_ = document.getElementById("PaperButton")
let DisplayResult_ = document.getElementById("DisplayResult")
let CPUDescions_ = ["Rock", "Scissors", "Paper"]
let DisplayWinnings_ = document.getElementById("DisplayWinnings")
let playerchoice = null

RockButton_.addEventListener("click", function()  {
     playerchoice = "Rock"
     console.log(playerchoice)
     GameEvaluation();
     return playerchoice;
});

ScissorsButton_.addEventListener("click", function()  {
     playerchoice = "Scissors"
     console.log(playerchoice)
     GameEvaluation();
     return playerchoice;
});

PaperButton_.addEventListener("click", function()  {
     playerchoice = "Paper"
     console.log(playerchoice)
     GameEvaluation();
     return playerchoice;

});

function GameEvaluation() {
    let RandomChoice = CPUDescions_[Math.floor(Math.random() * CPUDescions_.length)];
    DisplayResult_.textContent=RandomChoice
    console.log(RandomChoice);
    if (playerchoice === RandomChoice) {
        DisplayWinnings_.textContent="TIE";
    } else if (playerchoice==("Rock") && RandomChoice==CPUDescions_[1]) {
        DisplayWinnings_.textContent="User Wins"
    } else if (playerchoice==("Rock") && RandomChoice==CPUDescions_[2]) {
        DisplayWinnings_.textContent="CPU Wins"
    } else if (playerchoice==("Scissors") && RandomChoice==CPUDescions_[0]) {
        DisplayWinnings_.textContent="CPU Wins"
    } else if (playerchoice==("Scissors") && RandomChoice==CPUDescions_[2]) {
        DisplayWinnings_.textContent="User Wins"
    } else if (playerchoice==("Paper") && RandomChoice==CPUDescions_[1]) {
        DisplayWinnings_.textContent="CPU Wins"
    } else if (playerchoice==("Paper") && RandomChoice==CPUDescions_[0]) {
        DisplayWinnings_.textContent="User Wins"
    };
};