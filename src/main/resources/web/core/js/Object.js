/**
 * Object
 * 
 * 超类
 * 
 * 对象扩展
 * 
 * 由于后续使用了jQuery,不能对Object的prototype进行扩展,否则会出现异常。
 * 只能增加一些静态方法.使用Object.XXX来进行调用
 */

/**
 * 静态方法-克隆对象
 * 
 * 使用原型式继承,进行克隆的实现
 * 
 * @param object
 *            待复制的对象
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