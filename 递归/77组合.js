// 回溯法解决组合问题
var combine = function (n, k) {
	var result = []
	if (n <= 0 || k <= 0) return [[]]
	var p = []
	getResult(1, result, p, k, n)
	return result
};
function getResult (start, result, p, k, n) {
	if (p.length == k) {
		result.push([...p])
		return
	}
	// for (let i = start; i <= n; i++) {
	// 在这个问题中还有一个剪枝优化，选择过后剩余的数，如果不满足后面需求的个数，就直接把后面的可能减掉
	// // 还需要 k - p.length个数 // 即需要在[i,n]中找到k - p.length个数 // n - i + 1 >= k - p.length => i <= n - k + p.length + 1
	for (let i = start; i <= n - k + p.length + 1; i++) {
		p.push(i)
		getResult(i + 1, result, p, k, n)
		p.pop()
	}
	return
}