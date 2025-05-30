import { TreeNode } from "./utils";

// @lc code=start
function postorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	function traversal(node: TreeNode | null) {
		if (node === null) return;

		traversal(node.left);
		traversal(node.right);
		result.push(node.val);
	}

	traversal(root);
	return result;
}
// @lc code=end

console.log(postorderTraversal(TreeNode.fromArray([1, null, 2, 3]))); // [3,2,1]
console.log(postorderTraversal(TreeNode.fromArray([]))); // []
console.log(postorderTraversal(TreeNode.fromArray([1]))); // [1]
console.log(postorderTraversal(TreeNode.fromArray([1, 2]))); // [2,1]
console.log(postorderTraversal(TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]))); // [4,7,2,6,5,3,1]

/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (75.42%)
 * Likes:    7391
 * Dislikes: 215
 * Total Accepted:    1.6M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the postorder traversal of its
 * nodes' values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 *
 * Output: [3,2,1]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 *
 * Output: [4,6,7,5,2,9,8,3,1]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 *
 * Output: []
 *
 *
 * Example 4:
 *
 *
 * Input: root = [1]
 *
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
