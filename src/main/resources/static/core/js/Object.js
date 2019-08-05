/**
 * @name	Object
 * @package	core.js
 * @desc	超类
 * @type	类扩展
 * 
 * @attention	1.若扩展Object.prototype,引入jQuery时会产生未知错误.
 * 
 * @date	2016年8月20日 09:15:16
 */

/**
 * 克隆对象(原型式继承)-静态方法
 * 
 * @param object{object}
 *            待克隆的对象
 * @returns {object} 克隆后的对象
 */
Object.clone = function(object) {

	// 一个空函数
	var Clone = function() {

	};
	// 空函数原型指向待克隆对象
	Clone.prototype = object;

	// 返回空函数的一个实例
	return new Clone();
};