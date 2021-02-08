
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
	GreenScreen= loadImage("chromakey.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(1050,180,30);
	mango4=new mango(950,200,30);
	mango5=new mango(1150,230,30);

	stoneObj= new Stone(210,325,20)

	//timestone=new stone(180,310,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	 mirinda=new Web(stoneObj.body,{x:230,y:385});


}

function draw() {

  background(GreenScreen);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();

  //timestone.display();


  groundObject.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

}

function mouseDragged(){
    //if(gameState==="PLAY"){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
    //}
}

function mouseReleased(){
    mirinda.fly()
   // gameState="reel"
}

function keyPressed(){
    if(keyCode===32){

        Matter.Body.setPosition(stoneObj.body,{x:120,y:120})
        mirinda.attach(stoneObj.body)
        stoneObj.rg=[]
    }
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}