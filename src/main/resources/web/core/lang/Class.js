// 基础类-类对象

/**
 * 类
 */
var Class = function() {

};

/**
 * 类继承
 * 
 * @param subClass
 * @param superClass
 */
Class.extend = function(subClass, superClass) {
	// 中间链接空函数
	var Middleware = function() {
	}
	// 中间函数指向父类
	Middleware.prototype = superClass.prototype;
	// 子类函数指向中间函数
	subClass.prototype = new Middleware();
	
	// 子类函数构造不变
	subClass.prototype.constructor = subClass;
	// 子类添加superClass静态属性
	subClass.superClass = superClass.prototype;
	if (superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
};