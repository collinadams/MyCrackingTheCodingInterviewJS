/*
Problem: Implement an algorithm to find the kth to last element of a singly linked list.
*/

//input is the head of the LinkedList (as a node) and an integer k (the kth element from the end will be returned; k=1 returns the last element)
function kthLastElement(head, k) { 
  //empty linked list or invalid input for k
  if(!head || k <= 0){
    return null;
  }
  var delayed = head;
  var immediate = head;
  var i = 0;
  while(immediate){
    if(i > k){
      delayed = delayed.next;
    }
    i++;
    immediate = immidiate.next;
  }
  return delayed;
}



/*
1 -> 5 -> 6 -> 8 -> 9 -> 2 -> 4 k=3 (should return node w/ 9)
curr = 1, kth = 8
       5        9
       6        2
       8        4
       9      null
*/