(function () {
	// start with strings, numbers and booleans
	// let age: number = 100;
	// let age2:number = age;
	// age = 200;
	// console.log(age, age2);

	let name: string = "Wes";
	let name2: string = name;
	//     name = 'wesley';
	// console.log(name, name2);

	// Let's say we have an array
	const players: string[] = ["Wes", "Sarah", "Ryan", "Poppy"];

	// and we want to make a copy of it.

	// You might think we can just do something like this:
	// const team = players;
	// team[3] = "Lux";
	// console.log(players, team);
	// however what happens when we update that array?

	// now here is the problem!

	// oh no - we have edited the original array too!

	// Why? It's because that is an array reference, not an array copy. They both point to the same array!

	// So, how do we fix this? We take a copy instead!

	// one way
	const team2 = players.slice();

	team2[3] = "ekjrlkjf";
	// console.log(team2, players);

	// or create a new array and concat the old one in
	const team3 = [].concat(players);

	// or use the new ES6 Spread
	const team4 = [...players];
	team4[3] = "heeee hawww";

	// another way
	const team5 = Array.from(players); // can convert obj to array this way also

	// with Objects
	interface Person {
		name: string;
		age: number;
		number?: number;
		social?: {
			twitter?: string;
			facebook?: string;
		};
	}

	const person: Person = {
		name: "Wes Bos",
		age: 80,
	};

	// and think we make a copy:
	// const captain = person;
	// captain.name ='a captain';
	// console.log(person, captain);
	// how do we take a copy instead?
	const person2 = Object.assign({}, person, { number: 2, age: 55 });
	console.log(person, person2);
	// We will hopefully soon see the object ...spread
	const cap3 = { ...person }; // for new js
	console.log(cap3);

	// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
	const wes = {
		name: "Wes",
		age: 100,
		social: {
			twitter: "@wesbos",
			facebook: {
				watsapp: "sdfdf",
				messnger: "dsdffff",
			},
		},
	};
	const dev = Object.assign({}, wes);
	// console.log(wes, dev);
	const dev2 = JSON.parse(JSON.stringify(wes));
	console.log(wes, dev, dev2);
})();
