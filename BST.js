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
  delete(value) {
    let parent = null;
    let curr = this.root;

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
          if (value > parent.data) parent.right = null;
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
          let temp = getInorder(curr).data;
          let inOrder = getInorder(curr);
          inOrder.data = curr.data;
          curr.data = temp;
          this.delete(inOrder.data);
          return;
        }
      } // Loop control
      if (value < curr.data) {
        parent = curr;
        curr = curr.left;
      } else {
        parent = curr;
        curr = curr.right;
      }
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
let tree = new Tree([1, 2, 3, 4, 5, 6]);
// tree.delete(2);
tree.delete(5);

// console.log(prettyPrint(tree.root));
// console.log(tree.root);
console.log(prettyPrint(tree.root));

export { Tree };
