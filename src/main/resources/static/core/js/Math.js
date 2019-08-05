/**
 * @name	Math
 * @package	core.js
 * @desc	数学计算
 * @type	对象扩展
 * 
 * @date	2016年8月20日 09:41:02
 */

/**
 * 减法-静态方法
 * 
 * @param subtrahend{number}
 *            减数
 * @param minuend{number}
 *            被减数
 * @param precision{number}
 *            结果精度
 * @returns {number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	// 减数
	var a = parseFloat(subtrahend);
	// 被减数
	var b = parseFloat(minuend);

	// 计算结果
	return (a - b).toFixed(precision);
};