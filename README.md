# BST (Binary Search Tree):

In this project, I will create the JavaScript implementation of a binary search tree (BST)

## Functions to be included:

**1. BuildTree(array):** 
  It takes an array of numbers (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed
**2. Includes():**
  It accepts a value and returns true if the given value is in the tree. If the value isn’t in the tree, it should return false.
**3. Insert(value):**
  It accepts a value and inserts a new node with that value into the tree.
**4. DeleteItem(value):**
  It accepts a value and removes it from the tree.
**5. LevelOrderForEach(callback):**
  It accepts a callback function as its parameter. levelOrderForEach() should traverse the tree in breadth-first level order and call the callback on each value as it traverses, passing each value (not the nodes) as an argument, similarly to how Array.prototype.forEach() might work for arrays.
**6. inOrderForEach(callback), preOrderForEach(callback), and postOrderForEach(callback):**
  They also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each value to the provided callback.
**7. height(value):**
  It returns the height of the node containing the given value.
**8. depth(value):**
  It returns the depth of the node containing the given value.
**9. isBalanced():**
  It checks if the tree is balanced. A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.
**10. rebalance():**
  It rebalances an unbalanced tree. You’ll want to use a traversal method to provide a new array to the buildTree() function.
