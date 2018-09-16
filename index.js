// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	a = n.toString().split('').reverse().join('');

	return (b = parseInt(a) * Math.sign(n));
}

function reverseInt(n) {
	a = n.toString().split('').reverse().join('');

	if (n < 0) {
		return parseInt(a) * -1;
	}
	return parseInt(a);
}

module.exports = reverseInt;
