// Object对象扩展

/**
 * 克隆本对象
 * 
 * 使用原型式继承,进行克隆的实现
 * 
 * @returns {Clone}
 */
Object.prototype.clone = function() {
	// 一个空函数
	function Clone() {
	}
	// 函数原型指向本对象
	Clone.prototype = this;
	// 返回空函数的一个实例
	return new Clone();
}