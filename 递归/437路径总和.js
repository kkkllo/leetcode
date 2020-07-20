/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// 这道题和之前113路径之和的不同点在于，这道题是从任意一个点开始到任意一个点结束的
// 所以从这个点开始，从两种情况来讨论，一种是包含这个点，一种是不包含这个点
// 相当于是两个递归
var pathSum = function (root, sum) {
	if (!root) return 0
	let res = 0
	res = includeNode(root, sum)
	res += pathSum(root.left, sum)
	res += pathSum(root.right, sum)
	return res
};
function includeNode (root, sum) {
	let res = 0
	if (!root) return 0
	if (root.val === sum) res++
	res += includeNode(root.left, sum - root.val)
	res += includeNode(root.right, sum - root.val)
	return res
}
