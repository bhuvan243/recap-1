// console.info("Connected js");

const func1 = () => {
	console.info("Clicked");
};

firstname = "Bhuvan";
lastname = "Esh";

// console.log(firstname.concat(" " + lastname));

// let a = {
// 	b: 123,
// 	c: "bsahd",
// };

let username = "bhuvan";
let dispName = username ?? "No name";

// console.log(dispName);


const favFoods = [
	"Chiken Curry",
	"Sambar Rice",
	"Roast with Groundnut Chutney",
	"Idly with Idly Sambar",
];

// favFoods.push("Palkova");
// favFoods.pop();
// favFoods.shift();
// favFoods.unshift("Rasagulla");
// const filtered = favFoods.slice(0, 2);
// console.log(filtered);
favFoods.splice(0, 0, "bb");

// console.log(favFoods);

for (let i = 0; i < 10; i++) {
	// console.log(`Value of i is ${i}`);
	// console.log(`Value of i is `, i);
}

for (let i of favFoods) {
	// console.log(i);
}
const obj = {
	name: "Bhuvan",
	age: 26,
	location: "Chennai",
	phoneNo: 8754224314,
};
for (let i in obj) {
	// console.log(`${i} : ${obj[i]}`);
}
// delete obj.name
// obj.a = "Hehe"
("age" in obj) ? console.log("Present") : console.log("No");

console.log(obj);
