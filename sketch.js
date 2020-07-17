//Create variables here
var dog, happyDog, dogImg, happyDogImg, database, foodS, foodStock; 

function preload()
{
  //load images here
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
dog = createSprite(250,250,20,20);
dog.addImage("doggy",dogImg);
dog.scale = 0.1;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readstock);
}


function draw() {  
  background(46,139,87);
  //add styles here
  textSize(15);
  stroke(20);
  text("Pres UP_ARROW Key To Feed Drago Milk",100,100);
  fill("Green")
if(keyWentDown(UP_ARROW)){
  dog.addImage("happydoggy",happyDogImg);
  writeStock(foodS);
 dog.addImage("happydoggy",happyDogImg);
}
drawSprites();
}
function readstock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}