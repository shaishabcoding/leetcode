/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (35.65%)
 * Likes:    30734
 * Dislikes: 1895
 * Total Accepted:    3.8M
 * Total Submissions: 10.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
function longestPalindrome(str: string): string {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		for (const j of [i, i + 1]) {
			let left = i;
			let right = j;

			while (str[left] && str[left] === str[right]) {
				left--;
				right++;
			}

			if (right - left - 1 > result.length) result = str.slice(left + 1, right);
		}
	}

	return result;
}
// @lc code=end
