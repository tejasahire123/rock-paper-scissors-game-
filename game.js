let user_point=0;
let computer_point=0;

const act_from = document.querySelectorAll(".images");
var msg=document.querySelector(".message");
var user_score=document.querySelector("#player-score");
var computer_sc=document.querySelector("#computer-score");

const drawgame=() =>{
    console.log("Game is draw")
    msg.innerText="Game is Draw 😓 Play Again"
    msg.style.backgroundColor="white"
    msg.style.color="black"
    // msg.style.fontSize="2rem"
    
}


//third----------------------------------------------
const genrate_compuete_turn = () =>{
    var option=["rock","paper","Scissor"];
    var ran=Math.floor(Math.random() *  3);
 return option[ran];
    
}


//Secound-------------------------------------------------------------
var play_game = (user)=>{
console.log("user = ", user);
const  computer_turn=genrate_compuete_turn();
console.log("computer choice = ",computer_turn);

if(user==computer_turn){
    drawgame();
}
else{
    let user_win_or_not=true;
    
   

     if(user=="rock"){
 //scersor ,paper
 user_win_or_not = computer_turn==="paper" ? false:true;
     }
     else if(user==="paper"){
        //rock,sciere
       user_win_or_not = computer_turn === "scissor" ? false:true;
        
     }
     else {
        //rock,paper
        user_win_or_not=computer_turn ==="paper"?false:true;
    }
    show_winner(user_win_or_not,user,computer_turn)


}
}

//four
const show_winner=(user_win_or_not,user,computer_score)=>{
    if(user_win_or_not){
        // user_point++;
        user_score.innerText = user_point++;
        // console.log("You Win the game");
        msg.innerText=`You win 😁from  ${computer_score} `
        msg.style.backgroundColor="yellow"
        msg.style.color="black"
        // msg.style.fontSize="2rem"
    }
    else{
// computer_point++;
        computer_sc.innerText = computer_point++;
        // console.log("Computer Win the game")
        msg.innerText=`Computer Win 🤣 from ${user}`
        msg.style.backgroundColor="red"
        msg.style.color="black"
        // msg.style.fontSize="2rem"


    }
}

//first
act_from.forEach((activity) =>{
    // console.log(activity);
    activity.addEventListener("click",() => {
        const user=activity.getAttribute("Id");
        // console.log("image selected",user);
play_game(user);
    });
});