function Calculator() {
}
 
Calculator.prototype.AddNumbers = function (p1, p2) {
        return (p1 + p2);
}

// This exports the module so we can 'see' it from the test
// and links to the require().Calculator line in the test class
module.exports.Calculator = Calculator; 