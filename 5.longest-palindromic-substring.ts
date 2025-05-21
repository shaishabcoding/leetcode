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
function longestPalindrome(s: string): string {
	let result = "";

	for (let i = 0; i < s.length; i++) {
		[i, i + 1].forEach((j) => {
			let left = i;
			let right = j;
			while (left >= 0 && right < s.length && s[left] === s[right]) {
				if (right - left + 1 > result.length) {
					result = s.slice(left, right + 1);
				}
				left--;
				right++;
			}
		});
	}

	return result;
}
// @lc code=end
