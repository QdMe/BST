import { Tree } from "./BST";

describe("BST class", () => {
  describe("buildTree() method", () => {
    let tree = new Tree([1, 2, 3, 4, 5]);
    test("Should create a BST for a given sorted array and return its root node", () => {
      expect(tree.root).toEqual({
        data: 3,
        left: {
          data: 1,
          left: null,
          right: { data: 2, left: null, right: null },
        },
        right: {
          data: 4,
          left: null,
          right: { data: 5, left: null, right: null },
        },
      });
    });
    test("Should create a BST for a given unsorted array and return its root node", () => {
      let tree = new Tree([2, 4, 3, 5, 1]);
      expect(tree.root).toEqual({
        data: 3,
        left: {
          data: 1,
          left: null,
          right: { data: 2, left: null, right: null },
        },
        right: {
          data: 4,
          left: null,
          right: { data: 5, left: null, right: null },
        },
      });
    });
    test("Should create a BST for a given sorted array that has duplicate values and return its root node after removing the duplicates", () => {
      let tree = new Tree([1, 1, 2, 3, 3, 4, 5]);
      expect(tree.root).toEqual({
        data: 3,
        left: {
          data: 1,
          left: null,
          right: { data: 2, left: null, right: null },
        },
        right: {
          data: 4,
          left: null,
          right: { data: 5, left: null, right: null },
        },
      });
    });
    test("Should return null for an empty array", () => {
      let tree = new Tree([]);
      expect(tree.root).toEqual(null);
    });
  });
  describe("Manipulation", () => {
    let tree = new Tree([1, 3, 5, 7]);
    describe("includes(value) function", () => {
      test("Should return true for a given value that exists in the tree", () => {
        expect(tree.includes(1)).toBe(true);
      });
      test("Should return true for a given value that exists in the tree", () => {
        expect(tree.includes(7)).toBe(true);
      });
      test("Should return false for a given value that does not exist in the tree", () => {
        expect(tree.includes(6)).toBe(false);
      });
    });
    describe("insert(value)", () => {
      let tree = new Tree([1, 3, 5, 7]);
      test("Should insert a new node with the given value in the tree in the correct place", () => {
        tree.insert(6);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: null,
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: { data: 6, left: null, right: null },
              right: null,
            },
          },
        });
      });
      test("Should insert a new node with the given value in the tree in the correct place", () => {
        let tree = new Tree([1, 3, 5, 7]);
        tree.insert(2);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        });
      });
      test("Should do nothing when inserting a value that already exists in the tree", () => {
        let tree = new Tree([1, 3, 5, 7]);
        tree.insert(5);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: null,
          },
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        });
      });
    });
    describe("delete(value)", () => {
      test("Should delete a left leaf node with the given value from the tree", () => {
        let tree = new Tree([1, 3, 5, 7]);
        tree.delete(1);
        expect(tree.root).toEqual({
          data: 3,
          left: null,
          right: {
            data: 5,
            left: null,
            right: {
              data: 7,
              left: null,
              right: null,
            },
          },
        });
      });
      test("Should delete a right leaf node with the given value from the tree", () => {
        let tree = new Tree([1, 3, 5, 7]);
        tree.delete(7);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: null,
          },
          right: {
            data: 5,
            left: null,
            right: null,
          },
        });
      });
      test("Should delete the only node in a single node tree", () => {
        let tree = new Tree([5]);
        tree.delete(5);
        expect(tree.root).toEqual(null);
      });
      test("Should delete a node that has a single child", () => {
        let tree = new Tree([1, 2, 3, 4, 5]);
        tree.delete(2);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: null,
          },
          right: {
            data: 4,
            left: null,
            right: { data: 5, left: null, right: null },
          },
        });
      });
      test("Should delete a node that has two children", () => {
        let tree = new Tree([1, 2, 3, 4, 5, 6]);
        tree.delete(5);
        expect(tree.root).toEqual({
          data: 3,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: {
            data: 6,
            left: { data: 4, left: null, right: null },
            right: null,
          },
        });
      });
      test("Should delete a root node with two child nodes", () => {
        let tree = new Tree([2, 3, 4, 5, 6, 7, 8]);
        tree.delete(5);
        expect(tree.root).toEqual({
          data: 6,
          left: {
            data: 3,
            left: { data: 2, left: null, right: null },
            right: { data: 4, left: null, right: null },
          },
          right: {
            data: 7,
            left: null,
            right: { data: 8, left: null, right: null },
          },
        });
      });
      test("Should delete a root node with two child nodes", () => {
        let tree = new Tree([1, 2, 3, 4, 5, 6]);
        tree.delete(3);
        expect(tree.root).toEqual({
          data: 4,
          left: {
            data: 1,
            left: null,
            right: { data: 2, left: null, right: null },
          },
          right: {
            data: 5,
            left: null,
            right: { data: 6, left: null, right: null },
          },
        });
      });
    });
    describe("levelOrderForEachIteration(callback)", () => {
      test("Should call the callback passed on every node in level order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3]);
        tree.levelOrderForEachIteration(calcSum);
        expect(sum).toBe(6);
      });
      test("Should call the callback passed on every node in level order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.levelOrderForEachIteration(calcSum);
        expect(sum).toBe(55);
      });
      test("Should call the callback passed on every node in level order manner", () => {
        let levelOrder = [];
        function printInLevelOrder(item) {
          levelOrder.push(item);
        }
        let tree = new Tree([1, 2, 3]);
        tree.levelOrderForEachIteration(printInLevelOrder);
        expect(levelOrder).toStrictEqual([2, 1, 3]);
      });
      test("Should throw an Error if no callback is provided", () => {
        let tree = new Tree([1, 2, 3]);
        expect(() => {
          tree.levelOrderForEachIteration();
        }).toThrow(new Error("Parameter must be a callback!"));
      });
    });

    describe("levelOrderForEachRec(callback)", () => {
      test("Should call the callback passed on every node in level order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3]);
        tree.levelOrderForEachIteration(calcSum);
        expect(sum).toBe(6);
      });
      test("Should call the callback passed on every node in level order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.levelOrderForEachRec(calcSum);
        expect(sum).toBe(55);
      });
      test("Should call the callback passed on every node in level order manner", () => {
        let levelOrder = [];
        function printInLevelOrder(item) {
          levelOrder.push(item);
        }
        let tree = new Tree([1, 2, 3]);
        tree.levelOrderForEachRec(printInLevelOrder);
        expect(levelOrder).toStrictEqual([2, 1, 3]);
      });
      test("Should throw an Error if no callback is provided", () => {
        let tree = new Tree([1, 2, 3]);
        expect(() => {
          tree.levelOrderForEachRec();
        }).toThrow();
      });
    });
    describe("inOrderForEach(callback)", () => {
      test("Should call the callback passed on every node in in-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3]);
        tree.inOrderForEach(calcSum);
        expect(sum).toBe(6);
      });
      test("Should call the callback passed on every node in in-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.inOrderForEach(calcSum);
        expect(sum).toBe(55);
      });
      test("Should call the callback passed on every node in in-order manner", () => {
        let preOrder = [];
        function printInPreOrder(item) {
          preOrder.push(item);
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.inOrderForEach(printInPreOrder);
        expect(preOrder).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      });
      test("Should throw an Error if no callback is provided", () => {
        let tree = new Tree([1, 2, 3]);
        expect(() => {
          tree.inOrderForEach();
        }).toThrow(new Error("Parameter must be a callback!"));
      });
    });
    describe("preOrderForEach(callback)", () => {
      test("Should call the callback passed on every node pre-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3]);
        tree.preOrderForEach(calcSum);
        expect(sum).toBe(6);
      });
      test("Should call the callback passed on every node in pre-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.preOrderForEach(calcSum);
        expect(sum).toBe(55);
      });
      test("Should call the callback passed on every node in pre-order manner", () => {
        let preOrder = [];
        function printInPreOrder(item) {
          preOrder.push(item);
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.preOrderForEach(printInPreOrder);
        expect(preOrder).toStrictEqual([5, 2, 1, 3, 4, 8, 6, 7, 9, 10]);
      });
      test("Should throw an Error if no callback is provided", () => {
        let tree = new Tree([1, 2, 3]);
        expect(() => {
          tree.preOrderForEach();
        }).toThrow();
      });
    });
    describe("postOrderForEach(callback)", () => {
      test("Should call the callback passed on every node post-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3]);
        tree.postOrderForEach(calcSum);
        expect(sum).toBe(6);
      });
      test("Should call the callback passed on every node in post-order manner", () => {
        let sum = 0;
        function calcSum(num) {
          sum += num;
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.postOrderForEach(calcSum);
        expect(sum).toBe(55);
      });
      test("Should call the callback passed on every node in post-order manner", () => {
        let postOrder = [];
        function printPostOrder(item) {
          postOrder.push(item);
        }
        let tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        tree.postOrderForEach(printPostOrder);
        expect(postOrder).toStrictEqual([1, 4, 3, 2, 7, 6, 10, 9, 8, 5]);
      });
      test("Should throw an Error if no callback is provided", () => {
        let tree = new Tree([1, 2, 3]);
        expect(() => {
          tree.postOrderForEach();
        }).toThrow();
      });
    });
  });
});
