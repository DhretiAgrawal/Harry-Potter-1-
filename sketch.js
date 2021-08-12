var wall1 , wall2, wall3, wall4 , wall5, wall6, wall7 , wall8 , wall9 , wall10 , wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30 , wall31, wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46 ;  
var player , wallG , giantG , deatheaterG; 
var giant1, giant2, giant3, giant4, giant5,giant6;
var deatheater1, deatheater2, deatheater3,deatheater4,deatheater5;
function setup() {
  createCanvas(1250,600);

  
  player = new Player (60,50,20,20);

  wallG = new Group();
  createWalls();

  giantG = new Group();
  createGiants();

  deatheaterG = new Group();
  createDeathEaters();
}

function draw() {
  background(255);  
  player.move();
  player.harry.collide(wallG);

  moveGiants();
  moveDeathEaters();
  console.log(mouseX,mouseY);
  drawSprites();
}

/*

*/