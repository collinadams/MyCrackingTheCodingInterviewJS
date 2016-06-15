/*
Write code to remove duplicates from an unsorted linked list.
*/

function removeDuplicates(firstElement) { //assumes input is the head of the LinkedList (and that it is a singly linked list)
	//first element is not a duplicate
  var values = [firstElement.value];
  var current = firstElement.next;
  var previous = firstElement;

  while(current){
    if(values.indexOf(current.value) >= 0){
      previous.next = current.next;
    }else{
      values.push(current.value);
      previous = current;
    }
    current = current.next;
  }

  return firstElement;
}

/*
Example:
1 -> 5 -> 2 -> 1 -> 2 -> 3
values = [1] prev = 1  curr = 5
values = [1,5] prev = 5 curr = 2
values = [1,5,2] prev = 2 curr = 1
values = [1,5,2] prev.next=2 (1 -> 5 -> 2 -> 1 -> 2 -> 3 becomes 1 -> 5 -> 2 -> 2 -> 3)  prev = 2 (1st 2) curr = 2 (2nd 2)
values = [1,5,2] prev.next = 3   prev= 2 (does not change)  curr = 3
values = [1,5,2,3] prev =3 curr = null
*/


