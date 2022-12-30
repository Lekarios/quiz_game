//Timer varaiables
let timerElement = document.querySelector(".timer");
let timerCount =30;
let timer; 

//Elements that we use later for begin quiz button and for the h2 of right or wrong
let questionEl = document.querySelector(".questions"); 
let winEl = document.querySelector("#answerRight");
let wrongEl = document.querySelector("#answerWrong");

//variable lists that contains answers and questions
let listquestions = ["Which tag is used to link a JavaScript file to HTML files?","Where should your JavaScript file be linked in HTML?",
"How do you make comments in JavaScript?","What operator is used to assign a variable in JavaScript?",
"How do you create an array in JavaScript?"];
let answers0 = [' < script > ','< javascript >','< JS >','< style >'];
let answers1 = ["Inside the < head > element","Above the closing < / body > tag","After the closing </ html > tag","Between the closing </ head > and the opening < body > tags"];
let answers2 = ["# Comment","< !  Comment -- >","// Comment","/* Comment"];
let answers3 = ["=", "<", "==","!=","A",];
let answers4 = ["var fruit = apple, pear, banana","var fruit = [apple, pear, banana]", "var fruit = “apple”, “pear”, “banana”", "var fruit = [“apple”, “pear”, “banana”]"];
let answer= "";
const listObject = {question:"Which tag is used to link a JavaScript file to HTML files?", age:30, city:"New York"};

var questions = {
    "question":[
    {
        "ask":"Which tag is used to link a JavaScript file to HTML files?",
        "options":[" < script > ","< javascript >","< JS >","< style >"],
        "solution":" < script > "
    },
    {
        "ask":"Where should your JavaScript file be linked in HTML?",
        "options":["Inside the < head > element","Above the closing < / body > tag","After the closing </ html > tag","Between the closing </ head > and the opening < body > tags"],
        "solution":"Above the closing < / body > tag"
    },
    {
        "ask":"How do you make comments in JavaScript?",
        "options":["# Comment","< !  Comment -- >","// Comment","/* Comment"],
        "solution":"// Comment"
    },

    {
        "ask":"What operator is used to assign a variable in JavaScript?",
        "options":["=", "<", "==","!=","A"],
        "solution":"="
    },
    {
        "ask":"How do you create an array in JavaScript?",
        "options":["var fruit = apple, pear, banana","var fruit = [apple, pear, banana]", "var fruit = “apple”, “pear”, “banana”", "var fruit = [“apple”, “pear”, “banana”]"],
        "solution":"var fruit = [“apple”, “pear”, “banana”]"
    }]
}
//listObject.question[0];
//Buttons
let startQuiz = document.querySelector(".button");
let resetEl = document.querySelector("#resetId");
let choice0 = document.querySelector("#choice0");
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");

//var when you loose 1 questions
let isLoose ="";

//total games lost or win
let gamesLost=0;
let gamesWin =0;

//right questions in 1 game
let rightAnswers=0;
//wrong questions in 1 game
let wrongAnswers=0;
//number of question that we are asking
let numberquestion =0;

///score variables// The fisrt element on the list it is always the highest value
let Score = [3,2,1];     // deafult score lists
let Names = ["Default0", "Default1", "Default2"];     // Default name list
let newuser=["JJ",8];
///score


//This function is executed only when we win
//It'll ask you your name and if you score is higher that 1 of the top 3 it will put you on the list
function score(){
    let userScore = (rightAnswers*3)-(wrongAnswers*2);// calculating the points of the user
    let newuser="new";
    newuser = prompt("Inroduce your name");

    if (userScore> Score[0]){//First compare the user score with highest on the score board list
        Names[2] = Names[1]; 
        Score[2] = Score[1];    //Add new top score and bump down old scores
        Names[1] = Names[0];    //second position on list for the old first position
        Score[1] = Score[0];    //second position on list for the old first position
        Names[0] = newuser;     //first position on list for the new user
        Score[0] = userScore;   //first position on list for the new user

    }
    else if (userScore> Score[1]){//If the user score is not higher that the first, 
                                //we compared the user score with 2 highest on the score board list
        Names[2] = Names[1]; 
        Score[2] = Score[1];
        Names[1] = newuser;     //second position on list for the new user
        Score[1] = userScore;   //second position on list for the new user

    }
    else if (userScore> Score[2]){ ////we compared the user score with the last on the score board list
        Names[2] = newuser;     //last position on list for the new user
        Score[2] = userScore;   //last position on list for the new user

    }
    let scoreEl1 = document.querySelector("#ScoreTextID1");
    let scoreEl2 = document.querySelector("#ScoreTextID2");
    let scoreEl3 = document.querySelector("#ScoreTextID3");
    scoreEl1.textContent = Names[0]+" "+Score[0]; //Display 1st place on scoreboard
    scoreEl2.textContent = Names[1]+" "+Score[1]; //Display 2nd place on scoreboard
    scoreEl3.textContent = Names[2]+" "+Score[2]; //Display 3rd place on scoreboard
}

//we pass 2 arguments to this function, the number of question and the choice
//if the answer is right isLoose=false 
//if the answer is wrong isLoose=true
function checkAnswers(question, choice)
{
    let answerEl = document.querySelector("#answer");
    let answer="";

    if (question===0){
        if (choice===0){
            answer = "Correct";}
        else{
            answer =  "Wrong";}
    }
    else if (question ===1){
        if (choice===1){
            answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    else if (question ===2){
        if (choice===2){answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    else if (question ===3){
        if (choice===0){answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    else if (question ===4){
        if (choice===3){answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    answerEl.textContent = answer;
    if(answer==="Wrong"){
        wrongAnswers++;         //increase the number of wrong answers for this game
        wrongEl.textContent = "Wrong answers: "+wrongAnswers;
        isLoose = true;
    }
    else {
        rightAnswers++;         //increase the number of right answers for this game
        winEl.textContent = "Right answers: "+rightAnswers;
        isLoose = false;
    }
    numberquestion++;           //We increase this var so it can ask the next question
}

//this function it returns a specific  list of answers
function answersLists(x){

    if (x===0){
        return answers0;
    }
    else if (x===1) {
        return answers1;
    }
    else if (x===2) {
        return answers2;}
    else if (x===3) {
        return answers3;}
    else if (x===4) {
        return answers4;}
    else  {
        console.log("control");
    }
}

function questionandAnswer(){
    
    //Display question on screen
    questionEl.textContent = listquestions[numberquestion];
    //Make the begin quiz button dissapear
    document.getElementById("buttonID").style.display = 'none';
    for (var i=0; i<4; i++)
    {
        //Show the four buttons with the different options [0], [1], [2], [3]
        document.getElementsByClassName("choices")[i].style.display = 'block';
        //It change the text inside of the button
        // (answersLists(numberquestion))[0] gets the first element of the list of answers specific for this question
        document.getElementsByClassName("choices")[i].innerHTML = (answersLists(numberquestion))[i];
    }
}

//this function hides the choices buttons at the end of the game 
function hideChoicebuttons(){
    for (var i=0; i<4; i++)
    {
        document.getElementsByClassName("choices")[i].style.display = 'none';
    }
}

function winGame(){
    gamesWin++;  //Increases the # of times that you have won the game 
    //Make appear the button
    document.getElementById("buttonID").style.display = 'block';
    document.getElementsByClassName("buttonID").innerHTML ="Begin Quiz";
    questionEl.textContent = "";    //remove the question from the screen
    hideChoicebuttons();           //4 choice buttons hidden
    let answerEl = document.querySelector("#answer");
    answerEl.textContent = "You've Won!";

    let winEl = document.querySelector("#winId");
    winEl.textContent = "Wins: " + gamesWin; //show the number of time that you have won
    score();  
}

function loseGame(){

    gamesLost++;            //Increase the toatl time of game that you have lost
    hideChoicebuttons();    //4 choice button hidden
    document.getElementById("buttonID").style.display = 'block';            //make visible the button begin quiz
    document.getElementsByClassName("buttonID").innerHTML ="Begin Quiz";    //change text inside of the button begin quiz
    document.getElementById("buttonID").style.display = 'block';
    questionEl.textContent = "";
    let answerEl = document.querySelector("#answer");
    let answer="You've Lost";
    answerEl.textContent = answer;                      //It shows that you have lost
    let lostEl = document.querySelector("#loostId");
    lostEl.textContent = "Lost: "+gamesLost;            //It shows the total times that you have lost

}
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;          //Display seconds left on the screen
        if ((timerCount >= 0) && (numberquestion <5)) { //If timer is not expired and the questions are not finish 
        // Tests if win condition is met
            if (isLoose === true) {                     //If we have fail on 1 question decrease the timer 5 seconds
                // Clears interval and stops timer
                timerCount = timerCount -5;
                isLoose="";                             //Clean the variable to avoid being true and fall again in this condiction
                questionandAnswer();                    //It returns to the question and answer function
            }
            else if (isLoose === false){                //If we were right on the last question
                isLoose ="";                            //Clean the variable
                questionandAnswer();                    //It returns to the question and answer function
            }
        }
        if ((timerCount === 0) || (timerCount < 0)){   //If the timer is 0 or less than zero 
                                                        //(we decrease 5 second per mistake but there is a chance that it could go below 0)
            // Clears interval
            clearInterval(timer);
            timerElement.textContent = 0;               //It shows 0 on the screen timer
            loseGame();                                 //If the time goes zero you loose the game
        }
        if (numberquestion===5){                        //If the number of question is 5 the game is over
            clearInterval(timer);
            timerElement.textContent = 30;              //Put the text of the timer to 30
            if (rightAnswers>2){                        //If you have at least 3 answer rights you win
                winGame();
            }
            else{
                loseGame();
            }
        }
    }, 1000);// The units are miliseconds so after putting 1,000 we can work using seconds
}

//This function resets the winings and loosing scores 
function reset(){
    gamesLost=0;
    gamesWin =0;
    //Make appear the button for begin quiz
    document.getElementById("buttonID").style.display = 'block';
    hideChoicebuttons();        //Hide the choices buttons
    //Put all text show on screen to 0
    let winEl = document.querySelector("#winId");
    winEl.textContent = "Win: 0";
    let lostEl = document.querySelector("#loostId");
    lostEl.textContent = "Lost: 0";
  
}

//The first function to intialize
function init(){
    //debugger;
    rightAnswers=0;
    wrongAnswers=0;
    timerCount =30;
    numberquestion=0;
    wrongEl.textContent = "Wrong answers: " +wrongAnswers;
    winEl.textContent = "Right answers: " +rightAnswers;
    questionandAnswer();
    startTimer();
}

//Link "Begin Quiz" button with the function init
startQuiz.addEventListener("click", init);
//Link Reset button with the function reset
resetEl.addEventListener("click", reset);

//Link Choices buttons with checkAnswer function. We pass 2 arguments: the number of the question and the user choice
choice0.addEventListener("click", function(){
    checkAnswers(numberquestion,0)  //Because it's the first button it'll pass a 0 as an argument. 
                                    //This means the user selected the first choice 
});
choice1.addEventListener("click", function(){
    checkAnswers(numberquestion,1) 
});
choice2.addEventListener("click", function(){
    checkAnswers(numberquestion,2) 
});
choice3.addEventListener("click", function(){
    checkAnswers(numberquestion,3) 
});
