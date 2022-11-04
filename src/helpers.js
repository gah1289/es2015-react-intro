// src/helpers.js
// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

function choice(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
	if (items.includes(item)) {
		items = items.filter(function(i) {
			return i !== item;
		});

		return items;
	}
	else {
		return undefined;
	}
}

let arr = [
	1,
	2,
	3,
	4,
	5
];

// let one = choice(arr);
// console.log(one);
// let two = remove(arr, 4);
// console.log(two);
// console.log(remove(arr, 6));
export { choice, remove };
