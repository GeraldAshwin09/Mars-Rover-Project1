canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var roverX=10;
var roverY=10;
var rover_height="100px";
var rover_width="100px";
var rimg="rover.png";
var bgimg="Mars_landscape.jpg";
function add()
{
    bgID=new Image();
    bgID.onload=bguploadimg;
    bgID.src=bgimg;

    rID=new Image();
    rID.onload=ruploadimg;
    rID.src=rimg;
}
function bguploadimg()
{
    ctx.drawImage(bgID,0,0,canvas.width,canvas.height);
}

function ruploadimg()
{
    ctx.drawImage(rID,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",mk);
function mk(e)
{
keypressed=e.keyCode;

if(keypressed=='37')
{
    console.log("left");
  left();
}

if(keypressed=='38')
{
    console.log("up");
 up();
}

if(keypressed=='39')
{
    console.log("right");
right();
}

if(keypressed=='40')
{
    console.log("down");
  down();
}
}
function up()
{
  if(roverY>=0)
  {
    roverY=roverY-10;
    bguploadimg();
    ruploadimg();
  }
}


function down()
{
  if(roverX<=500)
  {
    roverY=roverY+10;
    bguploadimg();
    ruploadimg();
  }
}


function left()
{
  if(roverX>=0)
  {
    roverY=roverY-10;
    bguploadimg();
    ruploadimg();
  }
}

function right()
{
  if(roverX<=700)
  {
    roverY=roverY+10;
    bguploadimg();
    ruploadimg();
  }
}