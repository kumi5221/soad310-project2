var num=100;
var x = Array.apply(null, Array(50)).map(function () {});
var y = Array.apply(null, Array(50)).map(function () {});
var z = Array.apply(null, Array(50)).map(function () {});

var a,b,c;
var fade = 3;
var r,rx,ry;
var easing = 0.3;

function setup(){
  createCanvas(700, 640, WEBGL);
  frameRate(60);
}

function draw(){
  background(0);
  
  /*
  var zoomValue = 0;
  if (keyIsPressed) {
    if(keyCode==UP_ARROW){
      cameraZoom += zoomValue;
    }else if(keyCode==DOWN_ARROW) {
      cameraZoom -= zoomValue;
    }
  }
  */
  translate(10,30);
  //translate(width/2,height/2,10);

  rx =map(mouseY,0,height,0,-PI);
  ry =map(mouseX,0,width,0,PI);
  rotateX(rx);
  rotateZ(ry);
  rx=frameCount*0.005;
  ry=frameCount*0.01;
  rotateX(rx);
  rotateY(ry);

  /*
  if(mouseIsPressed){
    var r=random(1.7,1.8);
  }else{
    var r=random(0,1.5);
  }
  */

  
  stroke('rgb(255,0,0,255)');
  sphere(r*20);
  stroke('rgb(0,0,200,200)');
  sphere(r*40);
  stroke('rgb(0,150,0,150)');
  sphere(r*80);
  //stroke('rgb(255,100)');
  //sphere(r*120);
  

  for(var i=x.length-1; i>0; i--){
    x[i]=x[i-1];
    y[i]=y[i-1];
    z[i]=z[i-1];
  }
  
  /*
  if(mouseIsPressed){ 
    a=int(random(-600,600));
    b=int(random(-600,600));
    c=int(random(0,0)); 
  }else{}
  */
  a=int(random(-250,250));
  b=int(random(-250,250));
  c=int(random(-250,250));

  x[0]=a;
  y[0]=b;
  z[0]=c;
  
  for(var i=0; i<x.length; i++){
    noFill();
    if(mouseIsPressed){
      stroke(255-i*fade,0,0,255-i*fade);      
    }else{
      stroke(255-i*fade,255-i*fade,255-i*fade,255-i*fade);
    }
    push();
    translate(x[i],y[i],z[i]);
    box(10,10,10);
    pop();
  }
  
  for(var i=x.length-1; i>0; i--){  
    if(mouseIsPressed){
      x[i]+=(a-x[i])*easing;
      y[i]+=(b-y[i])*easing;
      z[i]+=(c-z[i])*easing;
      stroke(255-i*fade,0,0,255-i*fade);
      r=random(1,1.5);
    }else{
      stroke(255-i*fade,255-i*fade,255-i*fade,255-i*fade);
      r=random(0,1.5);
    }
  line(x[i],y[i],z[i],x[i-1],y[i-1],z[i-1]);
  }
}