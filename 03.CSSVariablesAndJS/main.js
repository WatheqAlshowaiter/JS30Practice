(function () {
    var inputs = document.querySelectorAll(".controls input");
    function handleUpdate() {
        var suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty("--" + this.name, this.value + suffix); // this is how to modify css variables
    }
    inputs.forEach(function (input) { return input.addEventListener("change", handleUpdate); });
    inputs.forEach(function (input) { return input.addEventListener("mousemove", handleUpdate); });
})();
