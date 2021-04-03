const canvas = document.querySelector("#draw") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing: boolean = false;
let lastX: number = 0;
let lastY: number = 0;
let hue: number = 0;
let direction: boolean = true;

function draw(e: MouseEvent): void {
	if (!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];

	if (ctx.lineWidth > 100 || ctx.lineWidth < 10) {
		direction = !direction;
	}
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
	console.log(ctx.lineWidth);
	if (hue >= 360) {
		hue = 0;
	}
	hue++;
}
canvas.addEventListener("mousedown", (e: MouseEvent): void => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
