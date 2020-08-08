/**
 * @param {number} n
 * @return {number}
 */
// 动态规划的方式
var integerBreak = function (n) {
	let memo = []
	memo[1] = 1
	// 计算Memo[i]的值
	for (let i = 2; i <= n; i++) {
		memo[i] = -1
		// memo[i] = max(i * (n - i), i * memo[n-i]) 1*(i - 1), 2*(i - 2).....
		for (let j = 1; j < i; j++) {
			memo[i] = Math.max(memo[i], j * (i - j))
			memo[i] = Math.max(memo[i], j * memo[i - j])
		}
	}
	return memo[n]
}

// 记忆化搜索的方式
// var integerBreak = function(n) {
//     let res = -1
//     let sum = []
//     if(n < 2) return 
//     return breakIntegetBreak(n)
//     function breakIntegetBreak(n) {
//         if(n == 1) return 1
//         if(sum[n]) return sum[n]
//         for(let i = 1; i < n; i++) {
//             res = Math.max(res, Math.max(i * (n - i), i * breakIntegetBreak(n - i)))
//         }
//         sum[n] = res
//         return sum[n]
//     }
// };