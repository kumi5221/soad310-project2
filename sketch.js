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

function setup() {
  //frameRate(60);

  createCanvas(700, 640);

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
    drawIdeas();

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
  textSize(20);
  fill(0, 70);

  translate(width/2, height/2);
  rotate(angle);

  for (var i = 0; i<5; i++){
    symbol = symbols[0];
    push();
    rotate(i*TWO_PI/5);
    translate(0, 200);
    text(symbol, 0, 0);
    rotate(angle);

    for (var j=0; j<5; j++){
      symbol = symbols[1];
      push();
      rotate(j*TWO_PI/5);
      translate(0, 100);
      text(symbol, 0, 0);
      rotate(angle);
        
        for (var k=0; k<5; k++){
          symbol = symbols[2];
          push();
          rotate(k*TWO_PI/5);
          translate(0, 50);
          text(symbol, 0, 0);
          rotate(angle);

          for (var h=0; h<5; h++){
            symbol = symbols[3];
            push();
            rotate(h*TWO_PI/5);
            translate(0, 25);
            text(symbol, 0, 0);
            rotate(angle);

            for (var f=0; f<5; f++){
              symbol = symbols[4];
              push();
              rotate(f*TWO_PI/5);
              translate(0, 12);
              text(symbol, 0, 0);
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

function nestShapes(){
  var shape;

  translate(width/2, height/2);
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
  
  fill(0, 70);

  translate(width/2, height/2);
  rotate(angle);

  for (var i = 0; i<5; i++){
    idea = ideas[0];
    push();
    rotate(i*TWO_PI/5);
    translate(0, 200);
    var size = random(7, 20);
    textSize(size);
    text(idea, -5, 0);
    rotate(angle);

    for (var j=0; j<5; j++){
      idea = ideas[1];
      push();
      rotate(j*TWO_PI/5);
      translate(0, 100);
      var size = random(7, 20);
      textSize(size);
      text(idea, -5, 0);
      rotate(angle);
        
        for (var k=0; k<5; k++){
          idea = ideas[2];
          push();
          rotate(k*TWO_PI/5);
          translate(0, 50);
          var size = random(7, 20);
          textSize(size);
          text(idea, -5, 0);
          rotate(angle);

          for (var h=0; h<5; h++){
            idea = ideas[3];
            push();
            rotate(h*TWO_PI/5);
            translate(0, 25);
            var size = random(7, 20);
            textSize(size);
            text(idea, -5, 0);
            rotate(angle);

            for (var f=0; f<5; f++){
              idea = ideas[4];
              push();
              rotate(f*TWO_PI/5);
              translate(0, 12);
              var size = random(7, 20);
              textSize(size);
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


}
  
//slowing effect for idea speed?
//https://openprocessing.org/sketch/423621

