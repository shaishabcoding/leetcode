/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (52.80%)
 * Likes:    10174
 * Dislikes: 1175
 * Total Accepted:    1.8M
 * Total Submissions: 3.4M
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 * Explanation: There are two root-to-leaf paths in the tree:
 * (1 --> 2): The sum is 3.
 * (1 --> 3): The sum is 4.
 * There is no root-to-leaf path with sum = 5.
 *
 *
 * Example 3:
 *
 *
 * Input: root = [], targetSum = 0
 * Output: false
 * Explanation: Since the tree is empty, there are no root-to-leaf paths.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */

// class TreeNode {
// 	val: number;
// 	left: TreeNode | null;
// 	right: TreeNode | null;
// 	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.left = left === undefined ? null : left;
// 		this.right = right === undefined ? null : right;
// 	}
// }

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) return false;

	function hasPath(node: TreeNode, remainingSum: number): boolean {
		if (node.left === null && node.right === null) {
			return remainingSum === node.val;
		}

		if (node.left !== null && hasPath(node.left, remainingSum - node.val)) {
			return true;
		}

		if (node.right !== null && hasPath(node.right, remainingSum - node.val)) {
			return true;
		}

		return false;
	}

	return hasPath(root, targetSum);
}
// @lc code=end
