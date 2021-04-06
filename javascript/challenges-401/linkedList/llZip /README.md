# ZipList function
create a function work on linkList to  Zip two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. 
## Challenge
Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
## Approach & Efficiency
-creat zipList function with two parameter
list1 list2
-create a new list to add the value to it
-declare current1 current2,longer variable
-binary if do detect wich list is longer  thes save in longer
-for loob until reach longer as limit of counter
-each itration add the next  value of each list
-for edge case we have if to check there is a value or no 
-return ziplist
#### Big O
- time: O(n) 
- space: O(1)
## API
- space:
- insert() : function add a new nodes into the head of linked list.
- includes(value): function check if have the value in the linked list.
-  toString(): function will print all the values inside the linked list
- append(value):add a new  node with the given value to the end of the list
- insertBefor(value,newVal):which add a new node with the given newValue immediately before the value node
- insertAfter(value,new val):which add a new node with the given newValue immediately after the value node
- kthFromEnd(k) : Return the node’s value that is k from the end of the linked list

![Whitebord](../assets/CC06.PNG)

-

## Code Challenge 7 WB



-

![WB7](../assets/CC07.PNG)

