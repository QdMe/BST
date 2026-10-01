class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  setLeft(root) {
    this.left = root;
  }
  setRight(root) {
    this.right = root;
  }
}
class Tree {
  constructor(array) {
    this.array = removeDuplicates(array.sort((a, b) => a - b));
    this.root = this.#buildTree(this.array, 0, this.array.length - 1); // passing default values for starting and ending indices
  }
  #buildTree(array, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);
    root.setLeft(this.#buildTree(array, start, mid - 1));
    root.setRight(this.#buildTree(array, mid + 1, end));
    return root;
  }
  // includes(value) function
  includes(value) {
    let currentNode = this.root;
    while (currentNode != null) {
      if (value == currentNode.data) return true;
      if (value < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }
}

// Function for removing duplicate values
const removeDuplicates = (array) => {
  let newArray = [];
  loop1: for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= newArray.length; j++) {
      if (array[i] == newArray[j]) continue loop1;
    }
    newArray.push(array[i]);
  }
  return newArray;
};

// Function for visualizing the BST
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }
  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

// Quick testing section
let tree = new Tree([1, 2, 3, 4]);
console.log(tree.includes(6));
// console.log(prettyPrint(tree.root));

export { Tree };
