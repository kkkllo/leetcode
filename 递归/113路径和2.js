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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
	let res = []
	let path = []
	getPath(root, sum, res, path)
	return res
};
function getPath (root, sum, res, path) {
	if (!root) return
	// path.push(root.val)
	path = [...path, root.val]
	// 为什么使用深拷贝的原因，避免每条路径之间相互影响
	if (!root.left && !root.right && root.val === sum) {
		res.push(path)
		return
	}
	if (root.left) {
		getPath(root.left, sum - root.val, res, path)
	}
	if (root.right) {
		getPath(root.right, sum - root.val, res, path)
	}
}