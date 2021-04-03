const checkboxes = document.querySelectorAll(
	'input[type="checkbox"]'
) as NodeListOf<HTMLInputElement>;

let lastChecked: HTMLInputElement;
let inBetween: Boolean = false;
function handleClick(this: HTMLInputElement, e: MouseEvent) {
	if (e.shiftKey && this.checked) {
		checkboxes.forEach((checkbox: HTMLInputElement): void => {
			// console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				// console.log(checkbox, "in between");
			}
			if (inBetween) {
				checkbox.checked;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener("click", handleClick)
);
