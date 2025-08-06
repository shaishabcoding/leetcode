#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    vector<string> generateParenthesis(int n)
    {
        vector<string> result;

        helper(result, n, "", 0, 0);

        return result;
    }

    void helper(vector<string> &result, int &n, string current, int open, int close)
    {
        if (current.size() == n * 2)
        {
            result.push_back(current);
            return;
        }

        if (open < n)
            helper(result, n, current + "(", open + 1, close);
        if (close < open)
            helper(result, n, current + ")", open, close + 1);
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=22 lang=cpp
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.30%)
 * Likes:    22456
 * Dislikes: 1044
 * Total Accepted:    2.5M
 * Total Submissions: 3.2M
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 8
 *
 *
 */
