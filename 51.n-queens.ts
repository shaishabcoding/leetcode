// @lc code=start
function solveNQueens(n: number): string[][] {
	const result: string[][] = [];
	const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));

	function isSafe(row: number, col: number): boolean {
		// Check the column above
		for (let i = 0; i < row; i++) if (board[i][col] === "Q") return false;

		// Check upper left diagonal
		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
			if (board[i][j] === "Q") return false;

		// Check upper right diagonal
		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
			if (board[i][j] === "Q") return false;

		return true;
	}

	function backtrack(row: number): void {
		if (row === n) result.push(board.map((rowArr) => rowArr.join("")));
		else
			for (let col = 0; col < n; col++)
				if (isSafe(row, col)) {
					board[row][col] = "Q";
					backtrack(row + 1);
					board[row][col] = "."; // backtrack
				}
	}

	backtrack(0);

	return result;
}
// @lc code=end

console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (72.38%)
 * Likes:    13348
 * Dislikes: 321
 * Total Accepted:    999.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space,
 * respectively.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: [["Q"]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 9
 *
 *
 */
