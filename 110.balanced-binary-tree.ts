/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (55.07%)
 * Likes:    11328
 * Dislikes: 764
 * Total Accepted:    1.9M
 * Total Submissions: 3.5M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
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

function isBalanced(root: TreeNode | null): boolean {
	if (root === null) return true;

	function getHeight(node: TreeNode | null): number {
		if (node === null) return 0;

		return 1 + Math.max(getHeight(node.left), getHeight(node.right));
	}

	return (
		Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
		isBalanced(root.left) &&
		isBalanced(root.right)
	);
}
// @lc code=end
