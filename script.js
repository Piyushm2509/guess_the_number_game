'use strict';

// console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message').textContent='Correct number 🎊';

// //  console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent  = 10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;

let score =20;

let highscore=0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number.parseInt(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    //  document.querySelector('.message').textContent='Correct number 🎊';

    if(!guess){
        //  document.querySelector('.message').textContent='No Number 😒';
        displayMessage('No Number 😒');
    }
    else if(guess===secretNumber)
    {
        // document.querySelector('.message').textContent='Correct number 🎊';
        displayMessage('Correct number 🎊');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess !=secretNumber)
    {
        if(score>1)
        {
            // document.querySelector('.message').textContent=(guess>secretNumber)?' To High📈':'To Low📉';
            displayMessage((guess>secretNumber)?' To High📈':'To Low📉')
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            // document.querySelector('.message').textContent="💣 You loss the GAME"
            displayMessage("💣 You loss the GAME");
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor='#FF0000';


        }
    }

    // else if(guess>secretNumber )
    // {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent=' To High📈';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent="💣 You loss the GAME"
    //         document.querySelector('.score').textContent=0;

    //     }

    // }
    // else if(guess<secretNumber)
    // {
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent=' To Low📉';
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else
    //     {
    //         document.querySelector('.message').textContent="💣 You loss the GAME";
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click',function(){
score = 20;
secretNumber =Math.trunc(Math.random()*20)+1;

// document.querySelector('.message').textContent='Start guessing...';
displayMessage('Start guessing...');
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';

document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='10rem';
});
