var s,si
var f,f1,f2,f3,f4,fg
var m,mi,mg
var gs="p"
var score=0
var gameover

function preload(){
  si = loadImage("sword.png");
  f1 = loadImage("fruit1.png")
  f2 = loadImage("fruit2.png")
  f3 = loadImage("fruit3.png")
  f4 = loadImage("fruit4.png")
  mi = loadAnimation("alien1.png","alien2.png")
  gameover = loadImage("gameover.png")
}

function setup(){
  createCanvas(600,600)
  s = createSprite(40,200,20,20)
  s.addImage(si)
  s.scale=0.7
  
  fg = new Group()
  mg = new Group()
}

function draw(){
  background("lightblue")
  if(gs==="p"){
    
    
  s.x=World.mouseX
  s.y=World.mouseY
  fruits()
  monsters()
    if(fg.isTouching(s)){
      fg.destroyEach()
      score=score+2
    }
    if(s.isTouching(mg)){
    gs="end"
    }
    if(gs==="end"){
      mg.destroyEach()
      fg.destroyEach()
      s.x = 300
      s.y = 300
      s.addImage(gameover)
    }
  }
  drawSprites()
}

function fruits(){
  if(frameCount%80===0){
    f = createSprite(600,200,20,20)
    f.y=random(50,350)
    f.velocityX=-7
    var z=Math.round(random(1,4))
    switch(z){
      case 1:f.addImage(f1)
        break
        case 2:f.addImage(f2)
        break
        case 3:f.addImage(f3)
        break
        case 4:f.addImage(f4)
        break
        default: break
    }
        f.scale=0.2
        f.lifetime=300
        fg.add(f)
  }
}

  function monsters(){
  if(frameCount%200===0){
    m = createSprite(600,200,20,20)
    m.y=random(50,350)
    m.velocityX=-7
    m.addAnimation("moving",mi)
    m.lifetime=300
    mg.add(m)
  }
  }