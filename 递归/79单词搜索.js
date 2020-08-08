/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 二维平面使用回溯算法来找解
var exist = function (board, word) {
	let width = board.length
	let height = board[0].length
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			if (searchWord(0, i, j)) {
				return true
			}
		}
	}
	return false
	function searchWord (index, startX, startY) {
		let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]] // 用数组来表示下一步可能到的方向
		// 终止条件
		if (index === word.length - 1) {
			return board[startX][startY] === word[index]
		}
		if (board[startX][startY] == word[index]) {
			let cur = board[startX][startY]
			board[startX][startY] = 0
			for (let i = 0; i < 4; i++) {
				var newi = startX + dir[i][0]
				var newj = startY + dir[i][1]
				if (newi >= 0 && newi < width && newj >= 0 && newj < height && board[newi][newj]) {
					if (searchWord(index + 1, newi, newj)) {
						return true
					}
				}
			}
			board[startX][startY] = cur
		}
		return false
	}
};