var canvas = document.querySelector("#draw");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;
function draw(e) {
    var _a;
    if (!isDrawing)
        return;
    ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
    if (ctx.lineWidth > 100 || ctx.lineWidth < 10) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
    console.log(ctx.lineWidth);
    if (hue >= 360) {
        hue = 0;
    }
    hue++;
}
canvas.addEventListener("mousedown", function (e) {
    var _a;
    isDrawing = true;
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", function () { return (isDrawing = false); });
canvas.addEventListener("mouseout", function () { return (isDrawing = false); });
