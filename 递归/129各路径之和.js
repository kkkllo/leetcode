/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
	let num = ""
	let res = []
	let sum = 0
	getNum(root, num, res)
	res.forEach(function(i) {
			sum += parseInt(i)
	})
	return sum
};
function getNum(root, num, res) {
	if(!root) return
	num += root.val
	if(!root.left && !root.right) {
			res.push(num)
			return 
	}
	getNum(root.left, num, res)
	getNum(root.right, num, res)
}