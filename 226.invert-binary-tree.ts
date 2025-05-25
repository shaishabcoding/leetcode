/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
 *
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (78.88%)
 * Likes:    14579
 * Dislikes: 242
 * Total Accepted:    2.6M
 * Total Submissions: 3.3M
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 */

/**
 * Definition for a binary tree node.
 */

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// @lc code=start
function invertTree(root: TreeNode | null): TreeNode | null {
	if (!root) return null;

	const temp = root.left;
	root.left = invertTree(root.right);
	root.right = invertTree(temp);

	return root;
}
// @lc code=end
