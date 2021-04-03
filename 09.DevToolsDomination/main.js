var dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];
function makeGreen() {
    var p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}
// Regular
console.log("hi everyone");
// Interpolated
console.log("hi, I am a %s in console .log", (5 * 5).toString());
console.log("hi, I am a " + 5 * 5 + " in console .log"); // backtick ``
// Styled
// console.log("%c I am a beatiful styled log message",'font-size: 20px; color:blue');
// warning!
console.warn("I warn you");
// Error :|
console.error("woooow it is an error");
// Info
console.info("nice info");
// Testing
var p = document.querySelector("p");
// console.assert(p.classList.contains("ouch"), "it is wrong!"); // if the value is false, it will log the message
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(function (dog) {
    console.groupCollapsed("" + dog.name);
    console.log("This is " + dog.name);
    console.log(dog.name + " is " + dog.age + " years old");
    console.groupEnd();
});
// counting
console.count("somename");
console.count("anotherName");
console.count("somename");
console.count("anotherName");
console.count("somename");
console.count("anotherName");
console.count("anotherName");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then(function (blob) { return blob.json(); })
    .then(function (data) {
    console.timeEnd("fetching data");
    console.log(data);
});
