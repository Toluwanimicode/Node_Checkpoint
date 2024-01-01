const generator = require('generate-password');
const password =  generator.generate({
	length: 10,
	numbers: true
});

console.log("password", password);
