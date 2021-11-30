canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = "100";
rover_height = "90";

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = "10";
rover_y = "10";

function add()
{
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground();
    background_ImgTag.src = background_image;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadRover();
    rover_ImgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_ImgTag, 0 , 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if (keyPressed == '38')
{
    up();
    console.log("up");
}

if (keyPressed == '39')
{
    up();
    console.log("down");
}

if (keyPressed == '40')
{
    up();
    console.log("left");
}

if (keyPressed == '41')
{
    up();
    console.log("right");
}

}


function up()
{
if (rover_y >=0)
{
    rover_y = rover_y - 10;
    console.log("when up arrow is pressed="+ rover_x + " | y =" +rover_y);
    uploadBackground();
    uploadRover(); 


}

}
function down()
{
if (rover_y <=500)
{
    rover_y = rover_y + 10;
    console.log("when up arrow is pressed="+ rover_x + " | y =" +rover_y);
    uploadBackground();
    uploadRover(); 
    
}
}

function left()
{
if (rover_x >=0)
{
    rover_x = rover_x - 10;
    console.log("when up arrow is pressed="+ rover_x + "| y =" +rover_y);
    uploadBackground();
    uploadRover(); 
}
}

function right()
{
if (rover_x <=700)
{
    rover_x = rover_x + 10;
    console.log("when up arrow is pressed="+ rover_x + "| y =" +rover_y);
    uploadBackground();
    uploadRover(); 
}

}



