var endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var cities = [];
fetch(endpoint)
    .then(function (blob) { return blob.json(); })
    .then(function (data) { return cities.push.apply(cities, data); });
function findMatches(wordToMatch, cities) {
    return cities.filter(function (place) {
        var regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayMatches() {
    var _this = this;
    var matchesArray = findMatches(this.value, cities);
    var html = matchesArray
        .map(function (place) {
        var regex = new RegExp(_this.value, "gi");
        var cityName = place.city.replace(regex, "<span class=\"hl\">" + _this.value + "</span>");
        var stateName = place.state.replace(regex, "<span class=\"hl\">" + _this.value + "</span>");
        return "<li>\n            <span class=\"name\">" + cityName + ", " + stateName + "</span>\n            <span class=\"population\">" + numberWithCommas(place.population) + "</span>\n            </li>";
    })
        .join("");
    suggestionsInput.innerHTML = html;
}
var searchInput = document.querySelector(".search");
var suggestionsInput = document.querySelector(".suggestions");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
