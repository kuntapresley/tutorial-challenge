// challenge 1 ageindays
function ageInDays(){
    var birthyear=prompt('what year where you born...my good friend?');
    var AgeInDayss=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are'+AgeInDayss+'years old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexboxresult').appendChild(h1);
}
function reset() {
    document.getElementById("flexboxresult").remove();
}
/// challenge 2 cat-gen
function generatecat(){
    var image=document.createElement('img');
    div=document.getElementById('cat-gen');
    image.src="images/download.jpg";
    div.appendChild(image);
}
// challenge 3: rock ,paper,scissors
function rpsGame(yourChoice){
//     console.log(yourChoice);
    var humanChoice,botChoice; 
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());
    // console.log('computerChoice;',botChoice);
    let results=decideWinner(humanChoice,botChoice);
    console.log(results);//[0,1]human lost bot won
    message=finalMessage(results);//('message':'you won',color:'green')
    console.log(message);
    rpsFrontEnd(yourChoice.id ,botChoice,message);
}
function randToRpsInt(){
    Math.floor(Math.random()* 3);
}
function numberToChoice(number){
 return['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,ComputerChoice){
    var rpsDataBase={
        'rock':{'scissors':1,'rock':0.5,paper:0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
}
var yourScore=rpsDataBase[yourChoice][ComputerChoice];
var computerScore=rpsDataBase[ComputerChoice][yourChoice];
return [yourScore ,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if (yourScore===0){
        return{'message':'you lost!','color':'red'}
    }
    else if(yourScore===0.5){
        return{'message':'you tied!','color':'yellow'}
    }
    else{
        return{'message':'you won','color':'green'}
    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
   var ImageDatabase={
       
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
     
    var humanDIV=document.createElement('div');
    var botDIV=document.createElement('div');
    var messageDIV=document.createElement('div');

    humanDIV.innerHTML="< img src='"+ImageDatabase(humanImageChoice)+"'height=150px width=150px style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDIV.innerHTML="<h1 style'color:"+finalMessage['color']+":font-size:60px padding:30px'>"+finalMessage["message"]+"</h1>"
    botDIV.innerHTML="< img src='"+ImageDatabase(botImageChoice)+"'height=150px width=150px style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDIV);
    document.getElementById('flex-box-rps-div').appendChild(messageDIV);
    document.getElementById('flex-box-rps-div').appendChild(botDIV);
}
//// challenge 4:change color of all buttons
var all_buttons= document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttoncolorchange(buttonthingy){
    if(buttonthingy.value==='red'){
        buttonRed();
    }
    else if(buttonthingy.value==='green'){
        buttonGreen();
    }
    else if(buttonthingy.value ==='reset'){
        buttonsColorReset();
    }
    else if(buttonthingy==='random'){
        randomcolors();
    }
}
function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonsColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
}
}
function randomcolors(){
    let choices=['btn-primary','btn-danger','btn-success','btn-warning']
    for(let i=0;i< all_buttons.length;i++){
        let randomNumber= Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);vfv++
    }
}
//challenge 5 ,blackjack game
var blackjackGame={
    'you':{'scorespan':'your-blackjack-result','div':'your-box','score':0},
    'dealer':{'scorespan':'dealer-blackjack-result','div':'dealer-box','score':0},
}
const YOU=blackjackGame['you']
const DEALER=blackjackGame['dealer']
// const hitsound= new Audio('static/sounds/swish.m4a');
document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackhit);
function blackjackhit(){
    let cardImage=document.createElement('img');
    cardImage.src="gstatic/images/Q.png";
    document.querySelector(YOU['div']).appendChild(cardImage);
    // hitsound.play();
}