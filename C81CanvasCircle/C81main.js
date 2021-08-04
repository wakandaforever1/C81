canvas = document.getElementById("myCanvas");
color ="blue"
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(300 ,200 ,40 ,0 ,2 * Math.PI)
ctx.stroke();
color ="black"
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(400,200 ,40 ,0 ,2 * Math.PI)
ctx.stroke();
color ="red"
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(500,200 ,40 ,0 ,2 * Math.PI)
ctx.stroke();

color ="green"
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(450,250 ,40 ,0 ,2 * Math.PI)
ctx.stroke();

color ="yellow"
ctx=canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(350,250 ,40 ,0 ,2 * Math.PI)
ctx.stroke();







canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
  
    console.log(color);
    mouse_x =e.clientX - canvas.offsetLeft
    mouse_y =e.clientY - canvas.offsetTop
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
circle(mouse_x,mouse_y)

}



function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 6;
ctx.arc(mouse_x,mouse_y,40 ,0 ,2 * Math.PI)
ctx.stroke();
}