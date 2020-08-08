// 动态规划
// 他的基础子问题是memo[n - 1]
// 最后的解是memo[0]
var rob = function (nums) {
	let length = nums.length
	let memo = []
	if (length < 1) return 0
	memo[length - 1] = nums[length - 1]
	// 计算memo[0],memo[1]....memo[length -1]
	for (let i = length - 2; i >= 0; i--) {
		memo[i] = 0
		for (let j = i; j < length; j++) {
			memo[i] = Math.max(memo[i], nums[j] + (j + 2 >= length ? 0 : memo[j + 2]))
		}
	}
	return memo[0]
}



// 记忆化搜索
// var rob = function(nums) {
//     let result
//     let index = 0
//     let length = nums.length
//     let memo = []
//     result = tryrob(index)
//     return result
//     function tryrob(index){
//         let res = 0
//         if(index >= length) return 0
//         if(memo[index]) return memo[index]
//         for(let i = index; i < length; i++) {
//             res = Math.max(res, nums[i] + tryrob(i + 2))
//         }
//         memo[index] = res
//         return res
//     }
//  //最后的解是这个res
// };