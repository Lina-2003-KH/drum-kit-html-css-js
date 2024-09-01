let btn =document.querySelectorAll("button");

for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        let btnID=this.id;//refers to the clicked button

        playDrumSequence(btnID);

        animated(btnID);
    })
}
document.addEventListener("keydown",function(myEvent){
     playDrumSequence(myEvent.key);
     animated(myEvent.key);
})
function playDrumSequence(key){
    switch(key){
        case "w": let tom1= new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;
        case "a": let tom2= new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s": let tom3= new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
        case "d": let tom4= new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;
        case "j": let snare= new Audio('./sounds/snare.mp3');
        snare.play();
        break;
        case "k": let crash= new Audio('./sounds/crash.mp3');
        crash.play();
        break;
        case "l": let bass= new Audio('./sounds/kick-bass.mp3');
         bass.play();
        break;
        default:console.log("Invalid Key");
    }
}
function animated(current){
    let animatedbtn = document.getElementById(current); 

  if(animatedbtn){

    animatedbtn.classList.add("pressed");

    setTimeout(function(){

        animatedbtn.classList.remove("pressed");

    },100)
  }
}