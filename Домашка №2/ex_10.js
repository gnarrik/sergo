const book = {
	name: 'War and peace',
	author: 'Tolstoy',
	year: 1861,
};

const json = JSON.stringify(book);
const jsonParsed = JSON.parse(json);

console.log(json);
console.log(jsonParsed);
