// 基础类-接口对象

/**
 * 接口
 * 
 * @param name
 *            名称
 * @param methods
 *            方法组
 */
var Interface = function(name, methods) {
	// 判断构造参数个数
	if (arguments["length"] != 2) {
		throw "core.lang.Interface:构造参数异常.参数个数必须为2个,得到" + arguments["length"] + "个";
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0, length = methods["length"]; i < length; i++) {
		if (typeof (methods[i]) != "string") {
			throw "core.lang.Interface:构造参数异常.接口方法名必须为字符串";
		}

		this.methods.push(methods[i]);
	}
}

/**
 * 静态方法-接口方法检查
 * 
 * 检查实现接口的对象是否已实现对应接口的方法
 * 
 * @param object
 *            实现接口的对象
 */
Interface.ensureImplements = function(object) {
	// 判断参数个数
	if (arguments["length"] < 2) {
		throw "core.lang.Interface.ensureImplements:参数异常.参数个数至少大于等于2.首参数为实现接口的对象,后续参数为实现的接口对象";
	}

	// 遍历实现的接口对象
	for (var i = 1, length = arguments["length"]; i < length; i++) {
		// 获取实现的接口对象
		var interface = arguments[i];

		// 检查接口对象是否继承Interface对象
		if (interface.constructor != Interface) {
			throw "core.lang.Interface.ensureImplements:参数异常.传入的接口对象必须继承Interface";
		}

		// 遍历接口方法
		for (var j = 0, jLength = interface["methods"]["length"]; j < jLength; j++) {
			// 获取接口方法
			var method = interface["methods"][j];

			// 接口方法不存在,或类型不为方法
			if (!object[method] || typeof (object[method]) != "function") {
				throw "core.lang.Interface.ensureImplements:对象异常.接口" + interface.name + "(" + method + ")方法未实现";
			}
		}
	}
}