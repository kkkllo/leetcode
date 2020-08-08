/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 利用回溯法解决排列问题

var permute = function (nums) {
	var result = []
	if (nums.length <= 1) return [nums]
	var p = []
	getResult(nums, p, result)
	return result
};
function getResult (nums, p, result) {
	let length = nums.length
	if (p.length == length) {
		result.push([...p])
		return
	}
	for (let i = 0; i < length; i++) {
		if (p.indexOf(nums[i]) < 0) { // 如果这个数还没使用过
			p.push(nums[i])
			getResult(nums, p, result)
			// 如果每个数之间的使用是有冲突的，使用完之后，要恢复这个数的状态
			p.pop()
		}
	}
	return
}