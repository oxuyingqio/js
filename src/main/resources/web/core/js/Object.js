/**
 * Object
 * 
 * 超类
 * 
 * 对象扩展
 * 
 * 扩展Object.prototype,引入jQuery会产生未知错误
 * 因此仅扩展Object静态方法
 */

/**
 * 静态方法-克隆对象
 * 
 * 使用原型式继承,进行克隆的实现
 * 
 * @param object
 *            待复制的对象
 * @returns {Object}
 */
Object.clone = function(object) {

	// 一个空函数
	function Clone() {

	}
	// 函数原型指向本对象
	Clone.prototype = object;
	// 返回空函数的一个实例
	return new Clone();
};