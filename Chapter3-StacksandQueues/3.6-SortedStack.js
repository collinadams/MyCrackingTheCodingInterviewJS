/*
Problem: Write a program to sort a stack in ascending order (with biggest items on top).
You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure (such as an array). 
The stack supports the following operations: push, pop, peek, and isEmpty 
*/

//this is the actual solution of the problem
Stack.prototype.sort = function() {

};

//the following is just an implementation of a Stack with the allowed methods so that I could test my solution
function Node(data) {
	this.data = data;
	this.next = null;
}

function Stack() {
	this.top = null;
}

Stack.prototype.push = function(value) {

};

Stack.prototype.pop = function() {

};

Stack.prototype.peek = function() {

};

Stack.prototype.isEmpty = function() {

};