// 递归
var binaryTreePaths = function (root) {
	// 当这个点是空节点的时候，递归结束
	if (!root) return []
	if (!root.left && !root.right) return [`${root.val}`]
	let res = []
	let leftroad, rightroad
	if (root.left) {
		leftroad = binaryTreePaths(root.left)
	}
	if (root.right) {
		rightroad = binaryTreePaths(root.right)
	}
	if (leftroad) {
		leftroad.forEach(function (el, i) {
			res.push(`${root.val}->${el}`)
		})
	}
	if (rightroad) {
		rightroad.forEach(function (el, i) {
			res.push(`${root.val}->${el}`)
		})
	}
	// 返回值是这个根节点的左右子树的路径
	return res
};