/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 分析二叉搜索树递归到叶子节点结束
// 不仅要和父节点比较，还要和父节点的父节点比较 (x)  //这是我开始解题的思路
// 开始的想法只是单纯的比父节点和祖父节点，但是二叉树的特点是左子树中的所有元素都要比根节点小
// 所以要保留上下界
// 递归的方法
var isValidBST = function (root) {
	let low = Number.NEGATIVE_INFINITY, hight = Number.POSITIVE_INFINITY
	return includePar(root, low, hight)
}
function includePar (root, low, hight) {
	if (!root) return true
	// 判断在不在范围内
	if (root.val <= low) {
		return false
	}
	if (root.val >= hight) {
		return false
	}
	// 递归左右子树，更新边界
	let flag1 = includePar(root.left, low, root.val)
	let flag2 = includePar(root.right, root.val, hight)
	if (flag1 && flag2) {
		return true
	}
	return false
}




// var isValidBST = function(root) {
//     if(!root) return true
//     if(!root.left && !root.right) {
//         return true
//     }
//     // 如果左子节点比根节点小，递归验证左子树
//     if(root.left){
//         if( root.left.val < root.val){
//             if(root.left.right) {
	// 不能只是这样单纯的比子节点与父节点和祖父节点的大小，有可能孙子节点的儿子也比祖父节点的大，这个比较不全面
//                 if(root.left.right.val < root.val) {
//                     let flag = isValidBST(root.left)
//                     if(!flag) return false
//                 } else {
//                     return false
//                 }
//             } 
//         } else {
//                 return false
//         }
//     }      
//     // 如果右子节点比根节点大，递归验证右子树
//     if(root.right) {  
//         if(root.right.val > root.val ) {
//             if(root.right.left) {
//                 if(root.right.left.val > root.val) {
//                     let flag = isValidBST(root.right)
//                     if(!flag) return false
//                 } else {
//                     return false 
//                 }
//             }
//         } else {
//             return false
//         }
//     }
//     return true
// };