const game = ()=>{
    let pscore=0;
    let cscore=0;

    const startGame = ()=>{
        const playbtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playbtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn");

        });
    };
    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const computerOptions = ["rock","paper","scissors"];
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });

       

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3 );
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() =>{
                    compareHands(this.textContent,computerChoice);
                    playerHand.src = `./${this.textContent}.png`;
                    computerHand.src = `./${computerChoice}.png`;
    
                },1500);

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";

                

            });
        });
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
        
    };

    const compareHands = (playerChoice,computerChoice) =>{
        const winner = document.querySelector('.winner');
        
        if(playerChoice === computerChoice){
            winner.textContent = 'It is tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cscore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins';
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cscore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins';
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cscore++;
                updateScore();
                return;
            }
        }
    };





    startGame();
    playMatch();
};

game();