var Canvas1 = document.getElementById("Canvas");
var Cpx = Canvas.getContext("2d");
var Color = "black"; 
var RoyKeane = 4;
var Radius = 40; 
var Neer = ""; 
var X,Y; 

Canvas.addEventListener("mousedown", Donny);

function Donny(e) {
  Neer = "mousedown"; 
  Color = document.getElementById("Bamba").value;
RoyKeane = document.getElementById("number").value;
  Radius = document.getElementById("Man").value; 
}

Canvas.addEventListener("mouseup", Dingaan); 

function Dingaan(e) {
  Neer = "mouseup"; 
}

Canvas.addEventListener("mouseleave", De);

function De(e) {
  Neer = "mouseleave"; 
}

Canvas.addEventListener("mousemove", Mangathela)

function Mangathela(e) {
  var y = e.clientY - Canvas.offsetTop;
  var x = e.clientX - Canvas.offsetLeft;
  if(Neer=="mousedown") {
    Cpx.beginPath();
Cpx.strokeStyle = Color;
Cpx.lineWidth = RoyKeane;
Cpx.arc(X, Y, Radius, 0, 360); 
//ctx.arc(x-coordinate, y- coordinate, Radius, Start-Angle, End-Angle)
Cpx.stroke();
  }
  X = x; 
  Y = y; 
}

function Clearance() {
  Cpx.clearRect(0, 0, Canvas.width, Canvas.height);
}