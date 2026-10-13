import { Queue } from "./Queue.js";
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
    let curr = this.root;
    while (curr != null) {
      if (value == curr.data) return true;
      if (value < curr.data) curr = curr.left;
      else curr = curr.right;
    }
    return false;
  }

  //  inserts(value) function
  insert(value) {
    let curr = this.root;
    while (curr.data != value) {
      if (value < curr.data) {
        if (curr.left == null) {
          let newNode = new Node(value);
          curr.setLeft(newNode);
          return;
        } else {
          curr = curr.left;
        }
      } else if (curr.right == null) {
        let newNode = new Node(value);
        curr.setRight(newNode);
        return;
      } else {
        curr = curr.right;
      }
    }
    return;
  }
  // delete(value) function
  delete(value, parent = null, root = this.root) {
    let curr = root;
    while (curr != null) {
      if (curr.data == value) {
        // #Case 1: Target has no children
        // If the target was a single node tree
        if (parent == null && curr.right == null && curr.left == null) {
          this.root = null;
          return;
        }
        // Otherwise
        if (curr.left == null && curr.right == null) {
          if (value >= parent.data) parent.right = null;
          else parent.left = null;
          return;
        }
        // #Case 2: Target has one child
        else if (curr.left == null || curr.right == null) {
          if (curr.right == null && value < parent.data) {
            parent.left = curr.left;
          } else if (curr.left == null && value < parent.data) {
            parent.left = curr.right;
          } else if (curr.right == null && value > parent.data) {
            parent.right = curr.left;
          } else parent.right = curr.right;
          return;
        }

        // #Case 3: Target has two children
        if (curr.right && curr.left) {
          let inOrder = getInorder(curr).data;
          // let inOrder = getInorder(this.root);
          // inOrder.data = curr.data;
          curr.data = inOrder;
          this.delete(inOrder, curr, curr.right);
          return;
        }
      }
      // Loop control
      if (value < curr.data) {
        parent = curr;
        curr = curr.left;
      } else {
        parent = curr;
        curr = curr.right;
      }
    }
  }

  // levelOrderForEach(callback)
  levelOrderForEachIteration(callback) {
    if (typeof callback !== "function")
      throw new Error("Parameter must be a callback!");
    let Q = new Queue();
    Q.push(this.root);
    while (Q.items.length != 0 && Q.front() != null) {
      let curr = Q.front();
      callback(curr.data);
      if (curr.left != null) Q.push(curr.left);
      if (curr.right != null) Q.push(curr.right);
      Q.pop();
    }
  }
  levelOrderRec(root, level, resArr) {
    // Base case
    if (root === null) return;

    // Add a new level if needed (Only if the number of levels is lower or equal than the current level)
    if (resArr.length <= level) resArr.push([]);

    // Push current's root's data into it's corresponding level
    resArr[level].push(root.data);

    // Do the same with children
    this.levelOrderRec(root.left, level + 1, resArr);
    this.levelOrderRec(root.right, level + 1, resArr);
  }
  levelOrderForEachRec(callback) {
    if (typeof callback !== "function")
      throw new Error("Parameter must be a callback!");
    let level = 0;
    let resArr = [];
    this.levelOrderRec(this.root, level, resArr);
    resArr.forEach((level) => {
      level.forEach((item) => callback(item));
    });
  }
  inOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Parameter must be a callback!");
    if (root === null) return;
    this.inOrderForEach(callback, root.left);
    callback(root.data);

    this.inOrderForEach(callback, root.right);
  }
  preOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Parameter must be a callback!");
    if (root === null) return;
    callback(root.data);
    this.preOrderForEach(callback, root.left);
    this.preOrderForEach(callback, root.right);
  }
  postOrderForEach(callback, root = this.root) {
    if (typeof callback !== "function")
      throw new Error("Parameter must be a callback!");
    if (root === null) return;
    this.postOrderForEach(callback, root.left);
    this.postOrderForEach(callback, root.right);
    callback(root.data);
  }
  #findNode(value) {
    let curr = this.root;
    while (curr != null) {
      if (curr.data == value) return curr;
      if (value < curr.data) curr = curr.left;
      else curr = curr.right;
    }
    return null;
  }
  #height(root, steps = 0) {
    //Base case:
    if (root == null || (root.left == null && root.right == null)) return steps;

    // Recursively find hight of each child
    let leftPath = this.#height(root.left, steps + 1);
    let rightPath = this.#height(root.right, steps + 1);

    // Return the longer path
    if (leftPath >= rightPath) return leftPath;
    return rightPath;
  }
  height(value) {
    // Find the node of the value in the tree
    let node = this.#findNode(value);

    // Return the height of the node
    if (node === null) return undefined;
    else return this.#height(node);
  }
  depth(value) {
    let curr = this.root;
    let depth = 0;
    while (curr !== null) {
      if (curr.data === value) return depth;
      if (value < curr.data) {
        curr = curr.left;
      } else curr = curr.right;
      depth++;
    }
  }
}
function getInorder(node) {
  let curr = node.right;
  while (curr.left != null) {
    curr = curr.left;
  }
  return curr;
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
// let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// let tree = new Tree([1, 2, 3, 4, 5]);
// let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
let tree = new Tree([1, 2, 3]);
console.log(tree.depth(4));

export { Node, Tree };
