/**
 * @name Interface
 * @package core.lang
 * @desc 接口
 * @type 类
 * 
 * @date 2016年8月20日 09:10:06
 */

/**
 * 构造函数
 * 
 * @param name{String}
 *            接口名称
 * @param methods{Array
 *            <String>} 接口方法集合
 */
core.lang.Interface = function(name, methods) {

	// 判断参数个数
	if (arguments.length !== 2) {
		throw "core.lang.Interface:参数异常.参数个数必须为2个,得到" + arguments.length + "个";
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0, length = methods.length; i < length; i++) {

		if (typeof (methods[i]) !== "string") {
			throw "core.lang.Interface:参数异常.接口方法名必须为字符串";
		} else {
			this.methods.push(methods[i]);
		}
	}
};

/**
 * 接口方法检查-静态方法
 * 
 * 检查对象是否实现对应接口的方法
 * 
 * @param object{Object}
 *            对象
 * @returns
 */
core.lang.Interface.ensureImplements = function(object) {

	// 判断参数个数
	if (arguments.length < 2) {
		throw "core.lang.Interface.ensureImplements:参数异常.参数个数>=2.首参数为实现接口的对象,后续参数为实现的接口对象";
	}

	// 遍历实现的接口对象
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 获取实现的接口对象
		var _interface = arguments[i];

		// 接口对象是否存在
		if (_interface) {
			// 存在,则检查接口对象是否为core.lang.Interface类
			if (_interface.constructor !== core.lang.Interface) {
				throw "core.lang.Interface.ensureImplements:参数异常.传入的接口对象必须是core.lang.Interface类";
			}
		} else {
			throw "core.lang.Interface.ensureImplements:参数异常.传入的接口对象不存在";
		}

		// 遍历接口方法
		for (var j = 0, jLength = _interface.methods.length; j < jLength; j++) {

			// 获取接口方法
			var method = _interface.methods[j];

			// 接口方法不存在,或类型不为方法
			if (!object[method] || typeof (object[method]) !== "function") {
				throw "core.lang.Interface.ensureImplements:对象异常.接口" + _interface.name + "(" + method + ")方法未实现";
			}
		}
	}
};