/**
 * @param {number} n
 * @return {number}
 */
// 斐波那契原理
// 将跳到n阶拆分成一个个小问题，跳到n-1阶，跳到n-2阶
// 动态规划，自上而下的解决问题
var climbStairs = function (n) {
	var memo = []
	memo[0] = 1
	memo[1] = 1
	for (let i = 2; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2]
	}
	return memo[n]
}

// // 记忆化搜索 自下而上的解决问题
// var climbStairs = function(n) {
//     var memo = []
//     function fib (n) {
//         if(n == 0 || n == 1) return 1
//         if(!memo[n]) {
//             memo[n] = fib(n - 1) + fib(n - 2)
//         }
//         return memo[n]
//     }
//    return fib(n)
// };