declare var cornify_add: any;
let secretKey = "watheq";
let pressedKey = [];
window.addEventListener("keyup", (e) => {
	pressedKey.push(e.key);
	pressedKey.splice(
		-secretKey.length - 1,
		pressedKey.length - secretKey.length
	);
	if (pressedKey.join("").includes(secretKey)) {
		console.log("DING DING!");
		cornify_add();
	}
});
