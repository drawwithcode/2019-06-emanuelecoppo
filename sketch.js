function setup() {
  noCanvas();

  text = createElement("span", "Move the slider to change Pokéball.<br>Click on <b>ADD</b> to drop another one.");
  text.style("color:white; position:absolute; top:2vw; left:2vw; font-size:1.7vw;");

  bg = createElement("img");
  bg.attribute("src","bg2.png");
  bg.style("width:100vw; position:absolute; bottom:0;");

  click = createButton("ADD");
  click.style("position:absolute; right:18vw; bottom:3vw; padding:1vw 3.5vw; font-size:1.9vw;");

  clear = createButton("CLEAR");
  clear.style("position:absolute; right:3vw; bottom:3vw; padding:1vw 3.5vw; font-size:1.9vw;");

  slider = createSlider(1,5,1,1);
  slider.style("position:absolute; left:3vw; bottom:3vw; width:15vw;");

  wrap = createElement("div");
  wrap.style("width:100vw; height:56.25vw; overflow:hidden; position:relative;")
  wrap.child(bg);
  wrap.child(click);
  wrap.child(clear);
  wrap.child(slider);
  wrap.child(text);
}

function draw() {
  val = slider.value();
  click.mousePressed(newBall);
  clear.mousePressed(clearBalls);
}

function newBall() {
  ball = createElement("img")
  ball.attribute("src","ball"+val+".png")
  ball.style("width:2.4vw; position:absolute; top:-15%; left:"+random(5,95)+"vw")
  ball.style("transform: rotate("+random(-180,180)+"deg)")
  ball.style("animation: ball "+random(1,1.5)+"s ease-in forwards")
  ball.addClass("ball");
  ball.parent(wrap);
}

function clearBalls() {
  selectAll(".ball").forEach(function(eachBall) {
    eachBall.remove();
  })
}
