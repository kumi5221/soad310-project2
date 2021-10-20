let extraCanvas;
var num=100;
var x = Array.apply(null, Array(50)).map(function () {});
var y = Array.apply(null, Array(50)).map(function () {});
var z = Array.apply(null, Array(50)).map(function () {});

var a,b,c;
var fade = 3;
var r,rx,ry;
var easing = 0.3;

//buttons for compute state
var alpha;
var beta;
var delta;
var computeButton;
var symbols = [];
//buttons for creative state
var ellipseButton;
var rectButton;
var triangleButton;
var creativeButton;
var shapes = [];

//buttons for meaning state
var meaningButton;
var meaningInput;
var ideas = [];

//buttons for final question
var human;
var machine;

//states
var compute = true;
var creative = true;
var meaning = true;

//variables
//var r = 200;
var angle = 0;
var speed = 0.01;

//texts in 3D
var ideaIndex = 0;
var ideaText;
var alphaText;
var betaText;
var gammaText;
var deltaText;

function setup() {
  //frameRate(60);

  createCanvas(700, 640, WEBGL);
  extraCanvas = createGraphics(700, 640);

  /*
  ideaText = createWord3D(
    ideas[ideaIndex],
    0, //depth
    10, //size
    20 //resolution
  )

  alphaText = createWord3D(
    "α",
    0, //depth
    20, //size
    20 //resolution
  )

  betaText = createWord3D(
    "β",
    0, //depth
    20, //size
    20 //resolution
  )

  gammaText = createWord3D(
    "γ",
    0, //depth
    20, //size
    20 //resolution
  )

  deltaText = createWord3D(
    "δ",
    0, //depth
    20, //size
    20 //resolution
  )
  */


  symbols = [];
  shapes = [];
  ideas = [];

  alpha = createButton("α");
  beta = createButton("β");
  gamma = createButton("γ");
  delta = createButton("δ");
  computeButton = createButton("compute");

  ellipseButton = createButton("ellipse");
  rectButton = createButton("rect");
  triangleButton = createButton("triangle");
  creativeButton = createButton("creative");

  meaningInput = createInput("idea");
  meaningButton = createButton("meaning");

  human = createButton("human");
  machine = createButton("machine");

}
  
function draw() {
  background(255);


   if (compute) {
    alpha.show();
    beta.show();
    gamma.show();
    delta.show();
    computeButton.show();

    ellipseButton.hide();
    rectButton.hide();
    triangleButton.hide();
    creativeButton.hide();

    meaningInput.hide();
    meaningButton.hide();

    human.hide();
    machine.hide();

    alpha.mousePressed(function() {
      symbols.push("α");
      //console.log(symbols);
    });
    beta.mousePressed(function() {
      symbols.push("β");
    });
    gamma.mousePressed(function() {
      symbols.push("γ");
    });
    delta.mousePressed(function() {
      symbols.push("δ");
    });
    computeButton.mousePressed(function(){
      compute = false;
      //text("compute", 10, 100);
      //console.log("compute");

    });

  
    //textSize(20);
    //translate(width/2, height/2);
    drawsymbols();

   } else if (creative){
    alpha.hide();
    beta.hide();
    gamma.hide();
    delta.hide();
    computeButton.hide();

    ellipseButton.show();
    rectButton.show();
    triangleButton.show();
    creativeButton.show();

    ellipseButton.mousePressed(function() {
      shapes.push("ellipse");
    });
    rectButton.mousePressed(function() {
      shapes.push("rect");
    });
    triangleButton.mousePressed(function() {
      shapes.push("triangle");
    });
    creativeButton.mousePressed(function(){
      creative = false;
    });

    //console.log(shapes);
    //angle = 0;
    nestShapes();

   } else if (meaning) {
    ellipseButton.hide();
    rectButton.hide();
    triangleButton.hide();
    creativeButton.hide();

    meaningInput.show();
    meaningButton.show();

    meaningButton.mousePressed(function(){
      meaning = false;
    });

    //console.log(ideas);
    //angle = 0;
    //drawIdeas();
    drawIdeas2();

   } else {
    meaningInput.hide();
    meaningButton.hide();
    
    human.show();
    machine.show();
    textSize(50);
    fill(0);
    text("WHO ARE YOU?", 150, 250);

    human.mousePressed(function(){
      symbols = [];
      shapes = [];
      ideas = [];

      compute = true;
      creative = true;
      ideas = true;
    });

    machine.mousePressed(function(){
      symbols = [];
      shapes = [];
      ideas = [];

      compute = true;
      creative = true;
      meaning = true;
    });

   }
  
   //extraCanvas.background(255, 0, 0);
   //extraCanvas.textSize(50);
   //extraCanvas.text("test", 100, 100);
   //extraCanvas.ellipse(100, 100, 10, 10);
   //texture(extraCanvas);
   //translate(-100, -100);
   //plane(300, 200);

}

function keyPressed(){
  if (meaning === true){
    if (keyCode === RETURN){
      var input = meaningInput.value();
      ideas.push(input);
    }
  }
}

function drawsymbols(){
  var symbol;
  //extraCanvas.background(255, 0, 0);
  extraCanvas.textSize(20);
  extraCanvas.fill(0, 70);

  extraCanvas.translate(width/2, height/2);
  extraCanvas.rotate(angle);

  for (var i = 0; i<5; i++){
    symbol = symbols[0];

    extraCanvas.push();
    extraCanvas.rotate(i*TWO_PI/5);
    extraCanvas.translate(0, 200);
    extraCanvas.text(symbol, 0, 0);
    //drawSymbolsHelper(symbol);
    extraCanvas.rotate(angle);

    for (var j=0; j<5; j++){
      symbol = symbols[1];
      push();
      rotate(j*TWO_PI/5);
      translate(0, 100);
      text(symbol, 0, 0);
      //drawSymbolsHelper(symbol);
      rotate(angle);
        
        for (var k=0; k<5; k++){
          symbol = symbols[2];
          push();
          rotate(k*TWO_PI/5);
          translate(0, 50);
          text(symbol, 0, 0);
          //drawSymbolsHelper(symbol);
          rotate(angle);

          for (var h=0; h<5; h++){
            symbol = symbols[3];
            push();
            rotate(h*TWO_PI/5);
            translate(0, 25);
            text(symbol, 0, 0);
            //drawSymbolsHelper(symbol);
            rotate(angle);

            for (var f=0; f<5; f++){
              symbol = symbols[4];
              push();
              rotate(f*TWO_PI/5);
              translate(0, 12);
              text(symbol, 0, 0);
              //drawSymbolsHelper(symbol);
              rotate(angle);
              pop();
            }
            pop();
          }
          pop();
        }
        pop();
    }
    extraCanvas.pop();
  }

  angle += speed;
  texture(extraCanvas);
  //translate(-100, -100);
  plane(700, 640);
  //image(extraCanvas, 0, 0);
}

function drawSymbolsHelper(symbol){
  if (symbol = "alpha") {
    alphaText.show();
  } else if (symbol = "beta"){
    betaText.show();
  } else if (symbol = "gamma") {
    gammaText.show();
  } else if (symbol = "delta") {
    deltaText.show();
  }
}

function nestShapes(){
  var shape;

  translate(10, 30);
  rotate(angle);

  for (var i = 0; i<5; i++){
    shape = shapes[0];
    push();
    rotate(i*TWO_PI/5);
    translate(0, 200);
    drawShapes(shape);
    rotate(angle);

    for (var j=0; j<5; j++){
      shape = shapes[1];
      push();
      rotate(j*TWO_PI/5);
      translate(0, 100);
      drawShapes(shape);
      rotate(angle);
        
        for (var k=0; k<5; k++){
          shape = shapes[2];
          push();
          rotate(k*TWO_PI/5);
          translate(0, 50);
          drawShapes(shape);
          rotate(angle);

          for (var h=0; h<5; h++){
            shape = shapes[3];
            push();
            rotate(h*TWO_PI/5);
            translate(0, 25);
            drawShapes(shape);
            rotate(angle);

            for (var f=0; f<5; f++){
              shape = shapes[4];
              push();
              rotate(f*TWO_PI/5);
              translate(0, 12);
              drawShapes(shape);
              rotate(angle);
              pop();
            }
            pop();
          }
          pop();
        }
      pop();
    }
    pop();
  }

  angle += speed;
}

function drawShapes(shape){
  noStroke();
  var red = random(150, 250);
  var blue = random(150, 250);
  var green = random(150, 250);
  fill(red, blue, green);
  var xsize = random(10, 20);
  var ysize = random(10, 20);

  if (shape == "ellipse"){
    ellipse(0, 0, xsize, ysize);

  } else if (shape == "rect") {
    rect(0, 0, xsize, ysize);

  } else if (shape == "triangle") { 
    var x1pos = random(10, 20);
    var x2pos = random(-20, -10);
    var y1pos = random(-20, -10);
    var y2pos = random(-20, -10);

    triangle(0, 0, x1pos, y1pos, x2pos, y2pos);
  }
}

function drawIdeas(){
  var idea;
  textSize(10);
  fill(0, 70);

  translate(width/2, height/2);
  rotate(angle);

  for (var i = 0; i<5; i++){
    idea = ideas[0];
    push();
    rotate(i*TWO_PI/5);
    translate(0, 200);
    text(idea, -5, 0);
    rotate(angle);

    for (var j=0; j<5; j++){
      idea = ideas[1];
      push();
      rotate(j*TWO_PI/5);
      translate(0, 100);
      text(idea, -5, 0);
      rotate(angle);
        
        for (var k=0; k<5; k++){
          idea = ideas[2];
          push();
          rotate(k*TWO_PI/5);
          translate(0, 50);
          text(idea, -5, 0);
          rotate(angle);

          for (var h=0; h<5; h++){
            idea = ideas[3];
            push();
            rotate(h*TWO_PI/5);
            translate(0, 25);
            text(idea, -5, 0);
            rotate(angle);

            for (var f=0; f<5; f++){
              idea = ideas[4];
              push();
              rotate(f*TWO_PI/5);
              translate(0, 12);
              text(idea, -5, 0);
              rotate(angle);
              pop();
            }
            pop();
          }
          pop();
        }
      pop();
    }
    pop();
  }

  angle += speed;
}


function drawSymbols2(){

  if (symbols.length > 0){
    var symbol = symbols.shift();
    r /= 2;

    for (var i=0; i<5; i++){
      push();
      rotate(i*TWO_PI/5);
      translate(0, r);
      text(symbol, 0, 0);

      drawSymbols();

      pop();  
    }
  }
  
}


function drawIdeas2(){
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
    stroke(255-i*fade,255-i*fade,255-i*fade,255-i*fade);
    
    push();
    translate(x[i],y[i],z[i]);
    ideaIndex = random(0, 5);
    ideaText.show();
    box(10,10,10);
    pop();
  }
  
  for(var i=x.length-1; i>0; i--){  
    stroke(255-i*fade,255-i*fade,255-i*fade,255-i*fade);
    r=random(0,1.5);
    
  line(x[i],y[i],z[i],x[i-1],y[i-1],z[i-1]);
  }

}
  
//slowing effect for idea speed?
//https://openprocessing.org/sketch/423621

