/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.05%)
 * Likes:    16037
 * Dislikes: 414
 * Total Accepted:    2.4M
 * Total Submissions: 4.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
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

function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return true;

	function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
		if (!t1 && !t2) return true;
		if (!t1 || !t2) return false;
		return (
			t1.val === t2.val &&
			isMirror(t1.left, t2.right) &&
			isMirror(t1.right, t2.left)
		);
	}

	return isMirror(root.left, root.right);
}
// @lc code=end
