let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1,openDoor2,openDoor3;
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButtom = document.getElementById('start');
let currentPlaying = true;
const isBot = door => {
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
};
const isClicked = door => {
  if (door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }
};
const playDoor = door => {
  numClosedDoors--;
  if(numClosedDoors === 0){
  	gameOver('win');   
  }
	else if (isBot(door)){
    gameOver();
  }  
};
doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentPlaying){
      doorImage1.src = openDoor1;
 			playDoor(doorImage1);
  }

};
doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentPlaying){
      doorImage2.src = openDoor2;
 			playDoor(doorImage2);
  }

};
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentPlaying) {
    doorImage3.src = openDoor3;
  	playDoor(doorImage3);
  }
  
};
const startRound = () => {

    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButtom.innerHTML = 'Buena Suerte!';
    currentPlaying = true;
    randomChoreDoorGenerator();
  
  
};
startButtom.onclick = () => {
  startRound();
};

const gameOver = (status) => {
  if(status === 'win'){
    startButtom.innerHTML = 'Ganaste! Jugar de nuevo?';
  }
  else{
    startButtom.innerHTML = 'Game Over! Jugar de nuevo?';
  }
  currentPlaying = false;
};
 
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors)
  if(choreDoor === 1){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor ===2){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  else{
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
};
startRound();
