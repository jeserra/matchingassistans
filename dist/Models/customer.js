"use strict";
class Customer {
    constructor(theName) {
        this.name = theName;
    }
}
exports.Customer = Customer;
class Tutor extends Customer {
    constructor(thisName) {
        super(thisName);
    }
}
exports.Tutor = Tutor;
