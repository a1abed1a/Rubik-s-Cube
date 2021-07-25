var name = prompt("What should i call you.");
var answer;
var tt;
var b = false;
function prom() {
    answer = prompt("Welcome "+name+", what stage do you want to learn, or type all to view all the stages.")
   stages();
}
function stages() {
  while(b){}
   if (answer == 1){
   tt ="<div id='d'><h4>Stage 1</h4> <img src='https://i.pinimg.com/564x/ab/3b/13/ab3b1391ddfd0fa6e3cf8ed7b3916167.jpg' alt='Stage1' width='468' height='655'></div>"
   b = true;
   }
    else if (answer == 2){
    tt ="<div id='d'><h4>Stage 2</h4> <img src='https://i.pinimg.com/564x/3b/9b/cd/3b9bcd4db8847787fada2565ef63ce04.jpg' alt='Stage2' width='468' height='655'></div>"
    b = true;
    }
    else if (answer == 3){
    tt ="<div id='d'><h4>Stage 3</h4> <img src='https://i.pinimg.com/564x/b3/1f/99/b31f99a63cc84b752890da02d688ec90.jpg' alt='Stage3' width='468' height='655'></div>"
    b = true;
    }
    else if (answer == 4){
    tt ="<div id='d'><h4>Stage 4</h4> <img  src='https://i.pinimg.com/564x/05/7b/75/057b753b20dd51acb9d986d3cd8d9593.jpg' alt='Stage4' width='468' height='655'></div>"
    b = true;
    }
    else if (answer == 5){
    tt ="<div id='d'><h4>Stage 5</h4> <img src='https://i.pinimg.com/564x/c0/1c/7a/c01c7a25b0ef13b4df7fcb7e360aa0fa.jpg' alt='Stage5' width='468' height='655'></div>"
    b = true;
    }
    else if (answer == 6){
    tt ="<div id='d'><h4>Stage 6</h4> <img src='https://i.pinimg.com/564x/6d/ec/43/6dec433d7afe9c75c764ab63aae733d3.jpg' alt='Stage6' width='468' height='655'></div>"
    b = true;
    }
    else if (answer == "all"){
    tt ="<div id='d'><h4>Stage 1</h4> <img src='https://i.pinimg.com/564x/ab/3b/13/ab3b1391ddfd0fa6e3cf8ed7b3916167.jpg' alt='Stage1' width='468' height='655'></div> <div id='d'><h4>Stage 2</h4> <img src='https://i.pinimg.com/564x/3b/9b/cd/3b9bcd4db8847787fada2565ef63ce04.jpg' alt='Stage2' width='468' height='655'></div> <div id='d'><h4>Stage 3</h4> <img src='https://i.pinimg.com/564x/b3/1f/99/b31f99a63cc84b752890da02d688ec90.jpg' alt='Stage3' width='468' height='655'></div> <div id='d'><h4>Stage 4</h4> <img src='https://i.pinimg.com/564x/05/7b/75/057b753b20dd51acb9d986d3cd8d9593.jpg' alt='Stage4' width='468' height='655'></div> <div id='d'><h4>Stage 5</h4> <img src='https://i.pinimg.com/564x/c0/1c/7a/c01c7a25b0ef13b4df7fcb7e360aa0fa.jpg' alt='Stage5' width='468' height='655'></div> <div id='d'><h4>Stage 6</h4> <img src='https://i.pinimg.com/564x/6d/ec/43/6dec433d7afe9c75c764ab63aae733d3.jpg' alt='Stage6' width='468' height='655'></div>"
    b = true;
    }
    else{
      alert("We dont have that stage, we only have from 1 to 6.");
      prom();
    }
    document.getElementById("lol").innerHTML = tt;
}