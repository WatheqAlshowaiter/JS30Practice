var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var lastChecked;
var inBetween = false;
function handleClick(e) {
    var _this = this;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(function (checkbox) {
            // console.log(checkbox);
            if (checkbox === _this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log(checkbox, "in bett");
            }
            if (inBetween) {
                checkbox.checked;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener("click", handleClick);
});
