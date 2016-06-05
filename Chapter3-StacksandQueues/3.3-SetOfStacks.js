/*
Problem:  Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 

SetOfStacks.push() and SetOfStacks.pop () should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack).
*/

function Node(value) {
	this.value = value;
}

function Stack() {
	this.top = null;
	this.length = 0;
}

Stack.prototype.push = function(value) {

};

Stack.prototype.pop = function() {

};

Stack.prototype.peek = function() {

};

function setOfStacks(maxValue) {

}

setOfStacks.prototype.push = function(value) {

};

setOfStacks.prototype.pop = function() {

};

setOfStacks.prototype.peek = function() {

};