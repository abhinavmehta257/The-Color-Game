window.onload = function()
{var color = [
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
    "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
]
var noOfTry = 3;
var mode = document.getElementById("mode");
 
 mode.addEventListener("click",changeMode);
 
 function changeMode(){
 if (mode.innerHTML == "Easy") {
     mode.innerHTML = "Hard";
     noOfTry = 1;
     guess.innerHTML = noOfTry; 
     
 }else if(mode.innerHTML == "Hard"){
     mode.innerHTML = "Easy";
     noOfTry = 3;
          guess.innerHTML = noOfTry; 

 }
    
 }
 

 var guess = document.getElementById("guesses");
  guess.innerHTML= noOfTry;
var square = document.querySelectorAll(".square"); 
var pickedColor = color[Math.floor(Math.random()*6)];
 for(i=0;i<square.length;i++){
    square[i].style.backgroundColor = color[i];
}
 var rgb = document.getElementsByTagName("span")[0];
 rgb.textContent = pickedColor;
 
 for(i=0;i<square.length;i++){
     square[i].addEventListener("click",selected);
 }
 function selected(){
     

      if(this.style.backgroundColor==pickedColor){
          win();
               result.innerHTML = "You Win";

      }else if(noOfTry == 0){
          alert("Out of guesses Restart Again");
          location.reload();
      }
     else{
         this.style.backgroundColor = "#232323";
         result.innerHTML = "Try again";
         noOfTry--;
          guess.innerHTML= noOfTry;

     }
 }
 var refresh = document.getElementById("new");
 refresh.addEventListener("click",function(){
     location.reload();
 })
 var top = document.getElementById("top");
 var result = document.getElementById("result");
 function win(){
     for(i=0;i<square.length;i++){
         square[i].style.backgroundColor = pickedColor ;
     }
     top.style.backgroundColor = pickedColor;
         
 }

                          
}