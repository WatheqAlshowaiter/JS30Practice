var panels = document.querySelectorAll(".panel");
function toggleOpen() {
    this.classList.toggle("open");
}
function toggleOpenActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}
panels.forEach(function (panel) { return panel.addEventListener("click", toggleOpen); });
panels.forEach(function (panel) {
    return panel.addEventListener("transitionend", toggleOpenActive);
});
