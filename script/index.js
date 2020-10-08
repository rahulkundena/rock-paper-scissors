count = 0;
document.getElementById('count').innerHTML = count;

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var score;
score = count;
function paper(){
    document.getElementById('you-pick').style.border = '20px solid hsl(230, 89%, 62%)';
    document.getElementById('you-pick').src = 'images/icon-paper.svg';
    document.getElementById('bot-pick').display = 'none'
    document.getElementById('menu').style.display = 'none';
    document.getElementById('pick').style.display = 'block';
    game(0);
}
function scissors(){
    document.getElementById('you-pick').style.border = '20px solid hsl(40, 84%, 53%)';
    document.getElementById('you-pick').src = 'images/icon-scissors.svg';
    document.getElementById('bot-pick').display = 'none'
    document.getElementById('menu').style.display = 'none';
    document.getElementById('pick').style.display = 'block';
    game(2);
}
function rock(){
    document.getElementById('you-pick').style.border = '20px solid hsl(349, 71%, 52%)';
    document.getElementById('you-pick').src = 'images/icon-rock.svg';
    document.getElementById('bot-pick').display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('pick').style.display = 'block';
    game(1);
}
function bot(rand){
    if (rand==0){
        document.getElementById('bot-pick').style.display = document.getElementById('you-pick').style.display;
        document.getElementById('bg').style.display = 'none';
    }
    else if (rand==1){
        document.getElementById('bg').style.display = 'none';
        document.getElementById('bot-pick').style.display = document.getElementById('you-pick').style.display;
        document.getElementById('bot-pick').src = 'images/icon-rock.svg';
        document.getElementById('bot-pick').style.border = '20px solid hsl(349, 71%, 52%)';
    }
    else{
        document.getElementById('bg').style.display = 'none';
        document.getElementById('bot-pick').style.display = document.getElementById('you-pick').style.display;
        document.getElementById('bot-pick').src = 'images/icon-scissors.svg';
        document.getElementById('bot-pick').style.border = '20px solid hsl(40, 84%, 53%)';
    }
}
var card = ['paper','rock', 'scissors'];
function game(num){
    var rand  = Math.floor(Math.random() * 3);
    bot(rand);
    if(num==rand){
        document.getElementById('demo').innerHTML = 'DRAW';
    }
    else if(num==0){
        if(rand==2){
        document.getElementById('demo').innerHTML = 'YOU LOSE';
        }
        else{
            document.getElementById('demo').innerHTML = 'YOU WIN';
            score = score + 1;
            document.getElementById('count').innerHTML = score;

        }
    }
    else if (num==1){
        if (rand==0){
            document.getElementById('demo').innerHTML = 'YOU LOSE';
        }
        else{
            document.getElementById('demo').innerHTML = 'YOU WIN'; 
            score = score + 1;
            document.getElementById('count').innerHTML = score;
        }
    }
    else{
        if(rand==0){
            document.getElementById('demo').innerHTML = 'YOU WIN';
            score = score + 1;
            document.getElementById('count').innerHTML = score;
        }
        else{
            document.getElementById('demo').innerHTML = 'YOU LOSE';
        }
    }

}
function playAgain(){
    document.getElementById('pick').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}













