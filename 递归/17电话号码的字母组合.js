/**
 * @param {string} digits
 * @return {string[]}
 */
// 查找某个问题的解，用回溯
// 采用递归的方式来解
// res = letter(0) + digits(1,n)
//     = letter(0) + letter(1) + digits(2,n)
var letterCombinations = function(digits) {
	let num = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
	let result = []
	let res = ""
	if(!digits) return []
	addStr(digits, 0, res, num, result)
	return result
};
function addStr(digits, index, res, num, result) {
	if(index == digits.length) {
			result.push(res)
			return 
	}
	let relindex = digits[index] - 2
	let str = num[relindex]
	for(let i = 0; i < str.length; i++) {
			addStr(digits, index + 1, res + str[i],num, result)
	}
}