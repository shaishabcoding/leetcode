// @lc code=start
function checkPerfectNumber(num: number): boolean {
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) sum += i;
	}
	return sum === num;
}
// @lc code=end

console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(7)); // false
console.log(checkPerfectNumber(6)); // true
console.log(checkPerfectNumber(496)); // true
console.log(checkPerfectNumber(8128)); // true

/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 *
 * https://leetcode.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (44.55%)
 * Likes:    1164
 * Dislikes: 1263
 * Total Accepted:    266.9K
 * Total Submissions: 598.9K
 * Testcase Example:  '28'
 *
 * A perfect number is a positive integer that is equal to the sum of its
 * positive divisors, excluding the number itself. A divisor of an integer x is
 * an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return
 * false.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 28
 * Output: true
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, and 14 are all divisors of 28.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 7
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num <= 10^8
 *
 *
 */
