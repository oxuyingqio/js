/**
 * @name	Class
 * @package	core.lang
 * @desc	类
 * @type	类
 * 
 * @constructor	core.lang.Class()
 * 
 * @method	static void	extend(function SubClass, function SuperClass)	类继承-静态方法
 * 
 * @date	2016年8月20日 09:32:06
 */

/**
 * 构造函数
 */
core.lang.Class = function() {

};

/**
 * 类继承-静态方法
 * 
 * @param SubClass{function}
 *            子类
 * @param SuperClass{function}
 *            父类
 * @returns
 */
core.lang.Class.extend = function(SubClass, SuperClass) {

	// 判断参数个数
	if (arguments.length !== 2) {

		new core.lang.Exception(arguments, "core.lang.Class.extend", "方法参数异常", "参数个数必须为2个,实际得到" + arguments.length
				+ "个");
	}

	// 中间函数
	var Middleware = function() {

	};
	// 中间函数原型指向父类
	Middleware.prototype = SuperClass.prototype;
	// 子类原型指向中间函数
	SubClass.prototype = new Middleware();

	// 保持子类构造不变
	SubClass.prototype.constructor = SubClass;
	// 子类添加superClass属性,指向父类原型
	SubClass.superClass = SuperClass.prototype;
	if (SuperClass.prototype.constructor === Object.prototype.constructor) {

		SuperClass.prototype.constructor = SuperClass;
	}
};