/*
Problem: How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.
*/

MinStack.prototype = new Stack(); //inheritance
MinStack.prototype.constructor = MinStack;

function MinStack() {
    this.minStack = new Stack();
}

MinStack.prototype.push = function(val) {

};

MinStack.prototype.pop = function() {

};

MinStack.prototype.min = function() {

};

function Stack() {

}

Stack.prototype.push = function(val) {

};

Stack.prototype.pop = function() {

};

Stack.prototype.peek = function() {

};

function Node(val,next) {

}
