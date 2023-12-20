// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = "bob".toUpperCase();
    return customerName;
}

function setBestCustomer(){
    var bestCustomer;
    bestCustomer = 'not bob';
    return bestCustomer;
}
// the above function seems to be correct, but does not pass npm test

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer;
}

const leastFavoriteCustomer =  "joe";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not joe";
    return leastFavoriteCustomer;
}