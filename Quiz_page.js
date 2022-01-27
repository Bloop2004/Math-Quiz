var name_getter1 = localStorage.getItem("Name of player1");
name_getter2 = localStorage.getItem("Name of player2");
player1_scoreGetter = 0;
player2_scoreGetter = 0;

document.getElementById("player_1name").innerHTML = name_getter1+" : ";
document.getElementById("player_2name").innerHTML = name_getter2+" : ";
document.getElementById("player_1score").innerHTML = player1_scoreGetter;
document.getElementById("player_2score").innerHTML = player2_scoreGetter;
document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";

function send_numbers(){
    number1 = document.getElementById("Number_taker1").value;
    number2 = document.getElementById("Number_taker2").value;
    equation = number1 + "x" + number2;
    answer = number1*number2;
    display_question = "<h4>Solve the equation- "+equation+"</h4>";
    inputer = "<input id='answerer' type='number' placeholder='Write the answer here.'>";
    buttony = "<button class='btn btn-primary' onclick='Submit_number()'>Submit</button>";
    combinator = display_question+inputer+buttony;
    document.getElementById("question_displayer").innerHTML = combinator;
    document.getElementById("Number_taker1").value = "";
    document.getElementById("Number_taker2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function Submit_number(){
    guessed_answer = document.getElementById("answerer").value;
    if(guessed_answer == answer){
        if(answer_turn == "player2"){
            player2_scoreGetter = player2_scoreGetter+1;
            document.getElementById("player_2score").innerHTML = player2_scoreGetter;
            question_turn = "player2";
            answer_turn = "player1";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter2+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter1+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was correct,a point will be awarded to "+name_getter2;
        }
        else{
            player1_scoreGetter = player1_scoreGetter+1;
            document.getElementById("player_1score").innerHTML = player1_scoreGetter;
            question_turn = "player1";
            answer_turn = "player2";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was correct,a point will be awarded to "+name_getter1;
        }
    }
    else{
        if(question_turn == "player2"){
            player2_scoreGetter = player2_scoreGetter+1;
            document.getElementById("player_2score").innerHTML = player2_scoreGetter;
            question_turn = "player1";
            answer_turn = "player2";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter1+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter2+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was wrong,a point will be awarded to "+name_getter2;
        }
        else{
            player1_scoreGetter = player1_scoreGetter+1;
            document.getElementById("player_1score").innerHTML = player1_scoreGetter;
            question_turn = "player2";
            answer_turn = "player1";
            document.getElementById("playerQuestion_turn").innerHTML = "It is "+name_getter2+" turn to ask.";
            document.getElementById("playerAnswer_turn").innerHTML = "It is "+name_getter1+" turn to answer.";
            document.getElementById("yaay_or_wrong_displayer").innerHTML = "Your answer was wrong,a point will be awarded to "+name_getter1;
        }
    }
    document.getElementById("question_displayer").innerHTML= ""; 
}