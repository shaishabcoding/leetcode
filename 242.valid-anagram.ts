/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (66.48%)
 * Likes:    13009
 * Dislikes: 430
 * Total Accepted:    4.7M
 * Total Submissions: 7.1M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 *
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 *
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const freq1 = {};
	const freq2 = {};

	for (let i = 0; i < s.length; i++) {
		if (freq1[s[i]]) freq1[s[i]]++;
		else freq1[s[i]] = 1;
	}

	for (let i = 0; i < t.length; i++) {
		if (freq2[t[i]]) freq2[t[i]]++;
		else freq2[t[i]] = 1;
	}

	for (let key in freq1) {
		if (freq1[key] !== freq2[key]) return false;
	}

	return true;
}
// @lc code=end
