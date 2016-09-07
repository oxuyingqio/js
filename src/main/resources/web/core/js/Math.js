/**
 * @name	Math
 * @package	core.js
 * @desc	数学计算
 * @type	对象扩展
 * 
 * @method	static Number	subtract(Number subtrahend, Number minuend, Number precision)	减法
 * 
 * @date	2016年8月20日 09:41:02
 */

/**
 * 减法-静态方法
 * 
 * @param subtrahend{Number}
 *            减数
 * @param minuend{Number}
 *            被减数
 * @param precision{Number}
 *            结果精度
 * @returns {Number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	// 减数
	var a = parseFloat(subtrahend);
	// 被减数
	var b = parseFloat(minuend);

	// 计算结果
	return (a - b).toFixed(precision);
};