/**
 * Class
 * 
 * 类
 */

/**
 * 构造方法
 */
core.lang.Class = function() {
};

/**
 * 静态方法-类继承
 * 
 * @param subClass
 *            子类
 * @param superClass
 *            父类
 */
core.lang.Class.extend = function(subClass, superClass) {
	// 判断构造参数个数
	if (arguments.length !== 2) {
		throw "core.lang.Class:参数异常.参数个数必须为2个,得到" + arguments.length + "个";
	}

	// 中间函数
	var Middleware = function() {
	}
	// 中间函数指向父类
	Middleware.prototype = superClass.prototype;
	// 子类指向中间函数
	subClass.prototype = new Middleware();

	// 子类构造不变
	subClass.prototype.constructor = subClass;
	// 子类添加superClass静态属性
	subClass.superClass = superClass.prototype;
	if (superClass.prototype.constructor === Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
};