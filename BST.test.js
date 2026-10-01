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
  describe("Manipulation functions", () => {
    describe("includes(value) function", () => {
      let tree = new Tree([1, 2, 3, 4, 5]);
      test("Should return true for a given value that exists in the tree", () => {
        expect(tree.includes(1)).toBe(true);
      });
      test("Should return true for a given value that exists in the tree", () => {
        expect(tree.includes(2)).toBe(true);
      });
      test("Should return false for a given value that does not exist in the tree", () => {
        expect(tree.includes(6)).toBe(false);
      });
    });
  });
});
