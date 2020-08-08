/**
 * @param {number[][]} grid
 * @return {number}
 */
// 采用动态规划的方式
var minPathSum = function (grid) {
	let m = grid.length
	if (m < 1) return 0
	let n = grid[0].length
	let memo = []
	for (let i = 0; i < m; i++) {
		memo[i] = new Array()
	}
	memo[0][0] = grid[0][0]
	// 上边缘
	for (let j = 1; j < n; j++) {
		memo[0][j] = memo[0][j - 1] + grid[0][j]
	}
	//左边缘
	for (let i = 1; i < m; i++) {
		memo[i][0] = memo[i - 1][0] + grid[i][0]
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j]
		}
	}
	return memo[m - 1][n - 1]
}

// // 递归 // 递归效率很低，采用记忆化搜索来优化
// var minPathSum = function(grid) {
//     let m = grid.length
//     if(m < 1) return 0
//     let n = grid[0].length
//     let memo = []
//     for(let i = 0; i < m; i++) {
//         memo[i] = new Array()
//     }
//     let res
//     res = getMinPath(0, 0)
//     return res
//     function getMinPath(startX,startY) {
//         let sum = 0
//         if(startX == m - 1 && startY == n - 1) return grid[startX][startY]
//         if(startX == m|| startY == n) return Number.POSITIVE_INFINITY
//         if(memo[startX][startY]) return memo[startX][startY]
//         sum = grid[startX][startY] + Math.min(getMinPath(startX + 1, startY),getMinPath(startX,startY + 1))
//         memo[startX][startY] = sum
//         return sum
//     }
// };