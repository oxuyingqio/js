/**
 * Math
 * 
 * 数学计算
 * 
 * 对象扩展
 */

/**
 * 静态方法-减法
 * 
 * @param subtrahend
 *            减数
 * @param minuend
 *            被减数
 * @param precision
 *            结果精度
 * @returns {Number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	var a = parseFloat(subtrahend);
	var b = parseFloat(minuend);

	return (a - b).toFixed(precision);
};