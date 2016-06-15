/*
Problem: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
*/

function removeNode(nodeToDelete, linkedListHead) { //this will return the value of the node you are 'deleting'
  var removedValue = nodeToDelete.value;
  //check if nodeToDelete is last node, i.e. if nodeToDelete.next is null
  if(nodeToDelete.next){
    nodeToDelete.value = nodeToDelete.next.value;
    nodeToDelete.next = nodeToDelete.next.next;
  }else{
    //if nodeToDelete is last node in list, there must be a reference to an upstream node in order to delete the second to last node's reference to the last node 
    var current = linkedListHead;
    //find the second to last node
    while(current.next.next){
      current = current.next;
    }
    current.next = null;
  }
  return removedValue;
}

