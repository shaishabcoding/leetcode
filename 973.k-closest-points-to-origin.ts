// @lc code=start
function kClosest(points: number[][], k: number): number[][] {
	const distances = points.map((point) => {
		return {
			point,
			distance: point[0] ** 2 + point[1] ** 2,
		};
	});

	distances.sort((a, b) => a.distance - b.distance);

	return distances.slice(0, k).map(({ point }) => point);
}
// @lc code=end

console.log(
	kClosest(
		[
			[1, 3],
			[-2, 2],
		],
		1
	)
); // [[-2,2]]
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		2
	)
); // [[3,3],[-2,4]]
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		1
	)
); // [[-2,4]]
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		2
	)
); // [[3,3],[-2,4]]
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		3
	)
); // [[3,3],[-2,4],[5,-1]]

/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 *
 * https://leetcode.com/problems/k-closest-points-to-origin/description/
 *
 * algorithms
 * Medium (67.81%)
 * Likes:    8749
 * Dislikes: 329
 * Total Accepted:    1.5M
 * Total Submissions: 2.2M
 * Testcase Example:  '[[1,3],[-2,2]]\n1'
 *
 * Given an array of points where points[i] = [xi, yi] represents a point on
 * the X-Y plane and an integer k, return the k closest points to the origin
 * (0, 0).
 *
 * The distance between two points on the X-Y plane is the Euclidean distance
 * (i.e., √(x1 - x2)^2 + (y1 - y2)^2).
 *
 * You may return the answer in any order. The answer is guaranteed to be
 * unique (except for the order that it is in).
 *
 *
 * Example 1:
 *
 *
 * Input: points = [[1,3],[-2,2]], k = 1
 * Output: [[-2,2]]
 * Explanation:
 * The distance between (1, 3) and the origin is sqrt(10).
 * The distance between (-2, 2) and the origin is sqrt(8).
 * Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
 * We only want the closest k = 1 points from the origin, so the answer is just
 * [[-2,2]].
 *
 *
 * Example 2:
 *
 *
 * Input: points = [[3,3],[5,-1],[-2,4]], k = 2
 * Output: [[3,3],[-2,4]]
 * Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= points.length <= 10^4
 * -10^4 <= xi, yi <= 10^4
 *
 *
 */
