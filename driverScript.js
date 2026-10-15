import { Node, Tree, prettyPrint } from "./BST.js";
// Create a binary search tree from an array of random numbers with each element having a value less than 100.
// You can create a function that returns an array of random numbers every time you call it if you wish.

function generateRandomNumFrom1To99() {
  return Math.floor(Math.random() * 100) + 1;
}
function populateArray(array) {
  for (let i = 0; i <= 10; i++) {
    array.push(generateRandomNumFrom1To99());
  }
}
let levelOrder = [];
let inOrder = [];
let preOrder = [];
let postOrder = [];

function createLevelOrderArr(num) {
  levelOrder.push(num);
}
function createInlOrderArr(num) {
  inOrder.push(num);
}
function createPreOrderArr(num) {
  preOrder.push(num);
}
function createPostOrderArr(num) {
  postOrder.push(num);
}
let randomArr = [];
populateArray(randomArr);

// Create a BST from randomArr
let bst = new Tree(randomArr);

// Confirm that the tree is balanced by calling isBalanced().
console.log(prettyPrint(bst.root));
console.log("Tree is balanced?");
console.log(bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
console.log("Level-order traversal:");
bst.levelOrderForEachIteration(createLevelOrderArr);
console.log(levelOrder);

console.log("In-order traversal:");
console.log(bst.inOrderForEach(createInlOrderArr));
console.log(inOrder);

console.log("Pre-order traversal:");
console.log(bst.preOrderForEach(createPreOrderArr));
console.log(preOrder);

console.log("Post-order traversal:");
console.log(bst.postOrderForEach(createPostOrderArr));
console.log(postOrder);

// Unbalance the tree by adding several numbers whose value is more than 100.
bst.insert(101);
bst.insert(102);
bst.insert(103);

// Confirm that the tree is unbalanced by calling isBalanced().
console.log("Tree is balanced after unbalancing?");
console.log(bst.isBalanced());

// Balance the tree by calling rebalance().
bst.reBalance();

// Confirm that the tree is balanced by calling isBalanced().
console.log("Tree is balanced after rebalancing?");
console.log(bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
console.log(prettyPrint(bst.root));

levelOrder = [];
inOrder = [];
preOrder = [];
postOrder = [];

console.log("Level-order traversal:");
bst.levelOrderForEachIteration(createLevelOrderArr);
console.log(levelOrder);

console.log("in-order traversal:");
console.log(bst.inOrderForEach(createInlOrderArr));
console.log(inOrder);

console.log("Pre-order traversal:");
console.log(bst.preOrderForEach(createPreOrderArr));
console.log(preOrder);

console.log("Post-order traversal:");
console.log(bst.postOrderForEach(createPostOrderArr));
console.log(postOrder);
