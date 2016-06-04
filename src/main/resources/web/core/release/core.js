/**
 * Array
 * 
 * 数组
 * 
 * 对象扩展
 */

/**
 * 清空数组
 * 
 * @returns
 */
Array.prototype.clear = function() {

	this.length > 0 && this.splice(0, this.length);
};

/**
 * 判断是否存在指定对象
 * 
 * @param obj
 *            对象
 * @returns {Boolean}
 */
Array.prototype.contains = function(obj) {

	var index = this.indexOf(obj);
	return (index >= 0);
};

/**
 * 获取指定对象下标值
 * 
 * @param obj
 *            对象
 * @returns {Number}
 */
Array.prototype.indexOf = function(obj) {

	var length = this.length;

	if (length != 0) {
		for (var index = 0; index < length; index++) {

			if (this[index] === obj) {
				return index;
			}
		}
	}

	return -1;
};

/**
 * 指定下标值插入对象
 * 
 * @param index
 *            下标索引
 * @param obj
 *            对象
 * @returns
 */
Array.prototype.insert = function(index, obj) {

	this.splice(index, 0, obj);
};

/**
 * 删除指定对象
 * 
 * @param obj
 *            对象
 * @returns
 */
Array.prototype.remove = function(obj) {

	var index = this.indexOf(obj);
	index >= 0 && this.splice(index, 1);
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index
 *            下标索引
 * @returns
 */
Array.prototype.removeAt = function(index) {

	this.splice(index, 1);
};

/**
 * Date
 * 
 * 日期
 * 
 * 对象扩展
 */

/**
 * 格式化日期
 * 
 * @param fmt
 *            格式 yyyy-MM-dd HH:mm:ss
 * @returns {String}
 */
Date.prototype.format = function(fmt) {

	var obj = {

		// 月份
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 小时
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 小时
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for ( var el in obj) {

		if (new RegExp("(" + el + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[el]) : (("00" + obj[el])
					.substr(("" + obj[el]).length)));
		}
	}

	return fmt;
};
/**
 * Math
 * 
 * 数学计算
 * 
 * 对象扩展
 */

/**
 * 静态方法-减法
 * 
 * @param subtrahend
 *            减数
 * @param minuend
 *            被减数
 * @param precision
 *            结果精度
 * @returns {Number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	var a = parseFloat(subtrahend);
	var b = parseFloat(minuend);

	return (a - b).toFixed(precision);
};
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
/**
 * String
 * 
 * 字符串
 * 
 * 对象扩展
 */

/**
 * 替换所有字符串
 * 
 * @param target
 *            目标字符
 * @param result
 *            替换字符
 * @returns {String}
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 字符串转2进制
 * 
 * @returns {String}
 */
String.prototype.toBinaryString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历每一个字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的2进制
		var bs = this.charCodeAt(i).toString(2);

		// 不足8位的补0
		for (var j = bs.length; j < 8; j++) {

			rtnStr.push(0);
		}

		rtnStr.push(bs);
	}

	// 返回
	return rtnStr.join("");
};

/**
 * 字符串转16进制
 * 
 * @returns {String}
 */
String.prototype.toHexString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历每一个字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的16进制
		var hs = this.charCodeAt(i).toString(16);

		// 不足2位的补0
		for (var j = hs.length; j < 2; j++) {

			rtnStr.push(0);
		}

		rtnStr.push(hs);
	}

	// 返回
	return rtnStr.join("");
};
/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// 核心包
	core = {
		// 示例包
		example : {},

		// HTML 包
		html : {
			// 常量包
			constant : {},

			// 元素包
			element : {
				// 控制包
				controller : {},
				// 模型包
				model : {},
				// 展示实现包
				viewer : {
					// 按钮实现包
					button : {
						// EasyUI按钮实现包
						easyui : {}
					},
					// 输入框实现包
					input : {
						// EasyUI输入框实现包
						easyui : {}
					}
				}
			},

			// 事件包
			event : {
				// document事件包
				document : {},
				// window事件包
				window : {}
			},

			// 工具包
			util : {}
		},

		// 基础包
		lang : {},

		// 日志包
		log : {
			// 控制包
			controller : {
				// 输出者实现包
				outputor : {}
			},
			// 模型包
			model : {}
		},

		// 工具包
		util : {}
	};
})();

/**
 * Class
 * 
 * 类
 * 
 * 类
 */

/**
 * 构造函数
 */
core.lang.Class = function() {

};

/**
 * 静态方法-类继承
 * 
 * @param SubClass
 *            子类
 * @param SuperClass
 *            父类
 * @returns
 */
core.lang.Class.extend = function(SubClass, SuperClass) {

	// 判断参数个数
	if (arguments.length !== 2) {
		throw "core.lang.Class:参数异常.参数个数必须为2个,得到" + arguments.length + "个";
	}

	// 中间函数
	var Middleware = function() {

	};
	// 中间函数指向父类
	Middleware.prototype = SuperClass.prototype;
	// 子类指向中间函数
	SubClass.prototype = new Middleware();

	// 子类构造不变
	SubClass.prototype.constructor = SubClass;
	// 子类添加superClass静态属性
	SubClass.superClass = SuperClass.prototype;
	if (SuperClass.prototype.constructor === Object.prototype.constructor) {
		SuperClass.prototype.constructor = SuperClass;
	}
};
/**
 * Interface
 * 
 * 接口
 * 
 * 类
 */

/**
 * 构造函数
 * 
 * @param name
 *            名称
 * @param methods
 *            方法组
 */
core.lang.Interface = function(name, methods) {

	// 判断构造参数个数
	if (arguments.length !== 2) {
		throw "core.lang.Interface:构造参数异常.参数个数必须为2个,得到" + arguments.length + "个";
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0, length = methods.length; i < length; i++) {

		if (typeof (methods[i]) !== "string") {
			throw "core.lang.Interface:构造参数异常.接口方法名必须为字符串";
		}

		this.methods.push(methods[i]);
	}
};

/**
 * 静态方法-接口方法检查
 * 
 * 检查实现接口的对象是否已实现对应接口的方法
 * 
 * @param object
 *            实现接口的对象
 * @returns
 */
core.lang.Interface.ensureImplements = function(object) {

	// 判断参数个数
	if (arguments.length < 2) {
		throw "core.lang.Interface.ensureImplements:参数异常.参数个数至少大于等于2.首参数为实现接口的对象,后续参数为实现的接口对象";
	}

	// 遍历实现的接口对象
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 获取实现的接口对象
		var _interface = arguments[i];

		if (_interface) {
			// 检查接口对象是否继承Interface对象
			if (_interface.constructor !== core.lang.Interface) {
				throw "core.lang.Interface.ensureImplements:参数异常.传入的接口对象必须继承Interface";
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
/**
 * Map
 * 
 * 集合
 * 
 * 类
 */

core.util.Map = function() {

	// 条目
	var elements = {};
	// 条目数
	var length = 0;

	/**
	 * 返回此映射中的键-值映射关系数
	 * 
	 * @returns {Number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 如果此映射未包含键-值映射关系，则返回 true。
	 * 
	 * @returns {Boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 如果此映射包含指定键的映射关系，则返回 true。
	 * 
	 * @param key
	 *            键
	 * @returns {Boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 如果此映射将一个或多个键映射到指定值，则返回 true。
	 * 
	 * @param value
	 *            值
	 * @returns {Boolean}
	 */
	this.containsValue = function(value) {

		for (key in elements) {

			if (elements[key] === value) {
				return true;
			}
		}

		return false;
	};

	/**
	 * 返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回 null。
	 * 
	 * @param key
	 *            键
	 * @returns {Object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定的值与此映射中的指定键关联（可选操作）。
	 * 
	 * @param key
	 *            键
	 * @param value
	 *            值
	 * @returns
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;

		elements[key] = value;
	};

	/**
	 * 如果存在一个键的映射关系，则将其从此映射中移除（可选操作）。
	 * 
	 * @param key
	 *            键
	 * @returns
	 */
	this.remove = function(key) {

		delete elements[key];
	};

	/**
	 * 从此映射中移除所有映射关系
	 * 
	 * @returns
	 */
	this.clear = function() {

		elements = {};
	};
};
/**
 * Logger
 * 
 * 日志管理者
 * 
 * 对象
 */

core.log.Logger = (function() {

	// 日志管理者
	var logger;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 输出级别
		this.level = core.log.model.Level.debug;
		// 输出模式
		this.mode = core.log.model.Mode.console;
		// 输出格式化参数
		this.format = "[" + core.log.model.Format.level + "] " + core.log.model.Format.msg;
	};

	/**
	 * 输出Error级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.error = function(msg) {

		if (this.level <= core.log.model.Level.error) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "ERROR", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Warn级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.warn = function(msg) {

		if (this.level <= core.log.model.Level.warn) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "WARN", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Info级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.info = function(msg) {

		if (this.level <= core.log.model.Level.info) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "INFO", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Debug级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.debug = function(msg) {

		if (this.level <= core.log.model.Level.debug) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "DEBUG", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	return {

		/**
		 * 获取日志管理者 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.Logger}
		 */
		getLogger : function() {

			// 不存在,则创建
			if (!logger) {
				logger = new Constructor();
			}

			return logger;
		}
	};
})();
/**
 * FormatConvertor
 * 
 * 格式化转换器
 * 
 * 对象
 */

core.log.controller.FormatConvertor = (function() {

	// 转换器
	var convertor;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 格式转换
	 * 
	 * @param msg
	 *            信息
	 * @param level
	 *            级别信息
	 * @param format
	 *            格式化信息
	 * @returns {String}
	 */
	Constructor.prototype.convert = function(msg, level, format) {

		// 替换消息
		format = format.replaceAll(core.log.model.Format.msg, msg);
		// 替换输出级别
		format = format.replaceAll(core.log.model.Format.level, level);
		// 替换日期??如何支持自定义format
		format = format.replaceAll(core.log.model.Format.date, (new Date()).format("yyyy-MM-dd HH:mm:ss"));
		// 替换换行
		format = format.replaceAll(core.log.model.Format.enter, "\n");

		return format;
	};

	return {

		/**
		 * 获取转换器 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.controller.FormatConvertor}
		 */
		getConvertor : function() {

			// 不存在,则创建
			if (!convertor) {
				convertor = new Constructor();
			}

			return convertor;
		}
	};
})();
/**
 * OutputorCreator
 * 
 * 输出者创建者
 * 
 * 对象
 */

core.log.controller.OutputorCreator = {

	/**
	 * 获取输出者
	 * 
	 * @param mode
	 *            模式
	 * @returns {core.log.model.Outputor}
	 */
	getOutputor : function(mode) {

		// 输出者
		var outputor;

		switch (mode) {
		case core.log.model.Mode.console:
			// 获取控制台输出者实例
			outputor = new core.log.controller.outputor.Console.getOutputor();
			break;
		case core.log.model.Mode.popup:
			// 获取弹出框输出者实例
			outputor = new core.log.controller.outputor.Popup.getOutputor();
			break;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(outputor, core.log.model.Outputor);
		// 返回实例
		return outputor;
	}
};
/**
 * Console
 * 
 * 控制台输出者
 * 
 * 对象
 */

core.log.controller.outputor.Console = (function() {

	// 输出者
	var outputor;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 输出消息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		console.log(msg);
	};

	return {

		/**
		 * 获取输出者 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.model.Outputor}
		 */
		getOutputor : function() {

			// 不存在,则创建
			if (!outputor) {
				outputor = new Constructor();
			}

			return outputor;
		}
	};
})();
/**
 * Pop-up
 * 
 * 弹出框输出者
 * 
 * 对象
 */

core.log.controller.outputor.Popup = (function() {

	// 输出者
	var outputor;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 输出消息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		alert(msg);
	};

	return {

		/**
		 * 获取输出者 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.model.Outputor}
		 */
		getOutputor : function() {

			// 不存在,则创建
			if (!outputor) {
				outputor = new Constructor();
			}

			return outputor;
		}
	};
})();
/**
 * Format
 * 
 * 格式化参数
 * 
 * 枚举
 */

core.log.model.Format = {

	// 信息
	msg : "%m",
	// 级别
	level : "%p",
	// 位置
	location : "%l",
	// 日期
	date : "%d",
	// 换行
	enter : "%n"
};
/**
 * Level
 * 
 * 输出级别
 * 
 * 枚举
 */

core.log.model.Level = {

	// 错误
	error : 4,
	// 警告
	warn : 3,
	// 信息
	info : 2,
	// 调试
	debug : 1
};
/**
 * Mode
 * 
 * 输出模式
 * 
 * 枚举
 */

core.log.model.Mode = {

	// 控制台
	console : "console",
	// 弹出框
	popup : "popup"
};
/**
 * Outputor
 * 
 * 输出者
 * 
 * 接口
 */

/**
 * @method output 输出信息
 */
core.log.model.Outputor = new core.lang.Interface("core.log.model.Outputor", [ "output" ]);
/**
 * KeyCode
 * 
 * 键盘Code值
 * 
 * 枚举
 */

core.html.constant.KeyCode = {

	F1 : "112",
	F2 : "113",
	F3 : "114",
	F4 : "115",
	F5 : "116",
	F6 : "117",
	F7 : "118",
	F8 : "119",
	F9 : "120",
	F10 : "121",
	F11 : "122",
	F12 : "123",

	N0 : "48",
	N1 : "49",
	N2 : "50",
	N3 : "51",
	N4 : "52",
	N5 : "53",
	N6 : "54",
	N7 : "55",
	N8 : "56",
	N9 : "57",

	a : "65",
	b : "66",
	c : "67",
	d : "68",
	e : "69",
	f : "70",
	g : "71",
	h : "72",
	i : "73",
	j : "74",
	k : "75",
	l : "76",
	m : "77",
	n : "78",
	o : "79",
	p : "80",
	q : "81",
	r : "82",
	s : "83",
	t : "84",
	u : "85",
	v : "86",
	w : "87",
	x : "88",
	y : "89",
	z : "90",

	A : "65",
	B : "66",
	C : "67",
	D : "68",
	E : "69",
	F : "70",
	G : "71",
	H : "72",
	I : "73",
	J : "74",
	K : "75",
	L : "76",
	M : "77",
	N : "78",
	O : "79",
	P : "80",
	Q : "81",
	R : "82",
	S : "83",
	T : "84",
	U : "85",
	V : "86",
	W : "87",
	X : "88",
	Y : "89",
	Z : "90",

	Esc : "27",
	Delete : "46",
	Backspace : "8",
	Enter : "13",
	Shift : "16",
	Space : "32",
	Ctrl : "17",
	Alt : "18",

	Left : "37",
	Up : "38",
	Right : "39",
	Down : "40"
};
/**
 * Element
 * 
 * 元素
 * 
 * 接口
 */

/**
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method add 添加子元素
 * @method remove 移除子元素
 * @method find 检索子元素集合,包含子元素的子元素
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "show", "hide", "destroy", "add",
		"remove", "find" ]);
/**
 * ButtonCreator
 * 
 * 按钮创建者
 * 
 * 对象
 */

core.html.element.controller.ButtonCreator = {

	/**
	 * 获取按钮
	 * 
	 * @param type
	 *            类型
	 * @return {core.html.element.model.Button}
	 */
	getButton : function(type) {

		// 按钮
		var button;

		switch (type) {
		case core.html.element.model.ButtonType.button:
			// 基础Button按钮
			button = core.html.element.viewer.button.Button.getButton();
			break;
		case core.html.element.model.ButtonType.easyui.linkbutton:
			// EasyUI Linkbutton按钮
			button = core.html.element.viewer.button.easyui.Linkbutton.getButton();
			break;
		default:
			return undefined;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(button, core.html.element.model.Button);
		// 返回实例
		return button;
	}
};
/**
 * InputCreator
 * 
 * 输入框创建者
 * 
 * 对象
 */

core.html.element.controller.InputCreator = {

	/**
	 * 获取输入框
	 * 
	 * @param type
	 *            类型
	 * @return {core.html.element.model.Input}
	 */
	getInput : function(type) {

		// 输入框
		var input;

		switch (type) {
		case core.html.element.model.InputType.text:
			// 基础Text输入框
			input = core.html.element.viewer.input.Text.getInput();
			break;
		case core.html.element.model.InputType.easyui.combobox:
			// EasyUI Combobox输入框
			input = core.html.element.viewer.input.easyui.Combobox.getInput();
			break;
		case core.html.element.model.InputType.easyui.datebox:
			// EasyUI Datebox输入框
			input = core.html.element.viewer.input.easyui.Datebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.datetimebox:
			// EasyUI Datetimebox输入框
			input = core.html.element.viewer.input.easyui.Datetimebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.filebox:
			// EasyUI Filebox输入框
			input = core.html.element.viewer.input.easyui.Filebox.getInput();
			break;
		case core.html.element.model.InputType.easyui.numberbox:
			// EasyUI Numberbox输入框
			input = core.html.element.viewer.input.easyui.Numberbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.numberspinner:
			// EasyUI Numberspinner输入框
			input = core.html.element.viewer.input.easyui.Numberspinner.getInput();
			break;
		case core.html.element.model.InputType.easyui.searchbox:
			// EasyUI Searchbox输入框
			input = core.html.element.viewer.input.easyui.Searchbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.slider:
			// EasyUI Slider输入框
			input = core.html.element.viewer.input.easyui.Slider.getInput();
			break;
		case core.html.element.model.InputType.easyui.textbox:
			// EasyUI Textbox输入框
			input = core.html.element.viewer.input.easyui.Textbox.getInput();
			break;
		case core.html.element.model.InputType.easyui.timespinner:
			// EasyUI Timespinner输入框
			input = core.html.element.viewer.input.easyui.Timespinner.getInput();
			break;
		default:
			return undefined;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(input, core.html.element.model.Input);
		// 返回实例
		return input;
	}
};
/**
 * Button
 * 
 * 按钮对象
 * 
 * 接口
 */

/**
 * @method exist 元素是否存在
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 */
core.html.element.model.Button = new core.lang.Interface("core.html.element.model.Button", [ "exist", "show", "hide",
		"destroy", "convertHtml", "dealHtml" ]);
/**
 * ButtonType
 * 
 * 按钮类型
 * 
 * 枚举
 */

core.html.element.model.ButtonType = {

	button : "button",

	easyui : {
		linkbutton : "easyui.linkbutton"
	}
};
/**
 * ElementProcess
 * 
 * 元素处理
 * 
 * 接口
 */

/**
 * @method getId 获取元素ID
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 * @method getChildren 获取子元素集合
 */
core.html.element.model.ElementProcess = new core.lang.Interface("core.html.element.model.ElementProcess", [ "getId",
		"convertHtml", "dealHtml", "getChildren" ]);
/**
 * Input
 * 
 * 输入框对象
 * 
 * 接口
 */

/**
 * @method exist 元素是否存在
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 */
core.html.element.model.Input = new core.lang.Interface("core.html.element.model.Input", [ "exist", "show", "hide",
		"destroy", "convertHtml", "dealHtml" ]);
/**
 * InputType
 * 
 * 输入框类型
 * 
 * 枚举
 */

core.html.element.model.InputType = {

	text : "text",

	easyui : {
		combobox : "easyui.combobox",
		datebox : "easyui.datebox",
		datetimebox : "easyui.datetimebox",
		filebox : "easyui.filebox",
		numberbox : "easyui.numberbox",
		numberspinner : "easyui.numberspinner",
		searchbox : "easyui.searchbox",
		slider : "easyui.slider",
		textbox : "easyui.textbox",
		timespinner : "eaysui.timespinner"
	}
};
/**
 * Button
 * 
 * 按钮
 * 
 * 类
 */

core.html.element.viewer.Button = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param type
	 *            按钮类型
	 */
	var Constructor = function(_id, _type) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerButton" + count;
		// 类型
		var type = _type || core.html.element.model.ButtonType.button;
		// 配置项
		var config = {};

		// 按钮
		var button = core.html.element.controller.ButtonCreator.getButton(type);
		if (button === undefined) {
			throw "core.html.element.viewer.Button:构造参数异常.类型(" + type + ")暂不支持";
		}

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getType = function() {
			return type;
		};

		this.setType = function(_type) {
			type = _type;
		};

		this.getConfig = function() {
			return config;
		};

		this.setConfig = function(_config) {
			config = _config;
		};

		this.getButton = function() {
			return button;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		// 不存在则添加,存在则展示
		if (button.exist(id, config)) {
			button.show(id, config);
		} else {
			$("body").append(this.convertHtml());
			this.dealHtml();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.hide(id, config);
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.destroy(id, config);
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Button.add:方法异常.按钮不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
	};

	/**
	 * 检索子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		return button.convertHtml(id, config);
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.dealHtml(id, config);
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	return Constructor;
})();
/**
 * Div
 * 
 * 区域
 * 
 * 类
 */

core.html.element.viewer.Div = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerDiv" + count;

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $div = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($div.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$div.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $div = $("#" + this.getId());
		$div.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $div = $("#" + this.getId());
		$div.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<div id='");
		html.push(this.getId());
		html.push("'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</div>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Fieldset
 * 
 * 控件组
 * 
 * 类
 */

core.html.element.viewer.Fieldset = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param legend
	 *            legend
	 */
	var Constructor = function(_id, _legend) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerFieldset" + count;
		// legend
		var legend = _legend || "";

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getLegend = function() {
			return legend;
		};

		this.setLegend = function(_legend) {
			legend = _legend;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $fieldset = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($fieldset.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$fieldset.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $fieldset = $("#" + this.getId());
		$fieldset.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $fieldset = $("#" + this.getId());
		$fieldset.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转换为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<fieldset id='");
		html.push(this.getId());
		html.push("'>");
		html.push("<legend>");
		html.push(this.getLegend());
		html.push("</legend>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</fieldset>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Form
 * 
 * 表单
 * 
 * 类
 */

core.html.element.viewer.Form = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param method
	 *            method
	 * @param action
	 *            action
	 */
	var Constructor = function(_id, _method, _action) {

		// ID
		var id = _id;
		// method
		var method = _method || "post";
		// action
		var action = _action || "";

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getMethod = function() {
			return method;
		};

		this.setMethod = function(_method) {
			method = _method;
		};

		this.getAction = function() {
			return action;
		};

		this.setAction = function(_action) {
			action = _action;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $form = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($form.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$form.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $form = $("#" + this.getId());
		$form.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $form = $("#" + this.getId());
		$form.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转换为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<form id='");
		html.push(this.getId());
		html.push("' method='");
		html.push(this.getMethod());
		html.push("' action='");
		html.push(this.getAction());
		html.push("' enctype='multipart/form-data'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</form>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Frameset
 * 
 * 框架集
 * 
 * 类
 */

core.html.element.viewer.Frameset = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerFrameset" + count;
		// cols
		var cols = "";
		// rows
		var rows = "";

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getCols = function() {
			return cols;
		};

		this.setCols = function(_cols) {
			cols = _cols;
		};

		this.getRows = function() {
			return rows;
		};

		this.setRows = function(_rows) {
			rows = _rows;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $frameset = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($frameset.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$frameset.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $frameset = $("#" + this.getId());
		$frameset.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $frameset = $("#" + this.getId());
		$frameset.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转换为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<frameset  id='");
		html.push(this.getId());
		html.push("' cols='");
		html.push(this.getCols());
		html.push("' rows='");
		html.push(this.getRows());
		html.push("'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</frameset >");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Input
 * 
 * 输入框
 * 
 * 类
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            输入框ID
	 * @param type
	 *            输入框类型
	 */
	var Constructor = function(_id, _type) {

		// ID
		var id = _id;
		// 类型
		var type = _type || core.html.element.model.InputType.text;
		// 配置项
		var config = {};

		// 输入框
		var input = core.html.element.controller.InputCreator.getInput(type);
		if (input === undefined) {
			throw "core.html.element.viewer.Input:构造参数异常.类型(" + type + ")暂不支持";
		}

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getType = function() {
			return type;
		};

		this.setType = function(_type) {
			type = _type;
		};

		this.getConfig = function() {
			return config;
		};

		this.setConfig = function(_config) {
			config = _config;
		};

		this.getInput = function() {
			return input;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		// 不存在则添加,存在则展示
		if (input.exist(id, config)) {
			input.show(id, config);
		} else {
			$("body").append(this.convertHtml());
			this.dealHtml();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.hide(id, config);
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.destroy(id, config);
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Input.add:方法异常.输入框不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
	};

	/**
	 * 检索子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		return input.convertHtml(id, config);
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取输入框
		var input = this.getInput();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		input.dealHtml(id, config);
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	return Constructor;
})();
/**
 * Label
 * 
 * 标签
 * 
 * 类
 */

core.html.element.viewer.Label = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param text
	 *            标签的文本信息
	 */
	var Constructor = function(_id, _text) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerLabel" + count;
		// 文本
		var text = _text;
		// for
		var forr;
		// form
		var form;

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getText = function() {
			return text;
		};

		this.setText = function(_text) {
			text = _text;
		};

		this.getFor = function() {
			return forr;
		};

		this.setFor = function(_forr) {
			forr = _forr
		};

		this.getForm = function() {
			return form;
		};

		this.setForm = function(_form) {
			form = _form;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($label.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$label.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());
		$label.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());
		$label.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Label.add:方法异常.标签不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
	};

	/**
	 * 检索子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<label id='");
		html.push(this.getId());
		html.push("' for='");
		html.push(this.getFor());
		html.push("' form='");
		html.push(this.getForm());
		html.push("'>");
		html.push(this.getText());
		html.push("</label>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	return Constructor;
})();
/**
 * Table
 * 
 * 表格
 * 
 * 类
 */

core.html.element.viewer.Table = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerTable" + count;

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $table = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($table.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$table.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $table = $("#" + this.getId());
		$table.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $table = $("#" + this.getId());
		$table.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 若为Tr,则直接添加.否则创建一个Tr,放入Tr再添加
			if (child.constructor === core.html.element.viewer.Tr) {
				// 添加子元素
				this.getElements().push(child);
			} else {
				var tr = new core.html.element.viewer.Tr();
				tr.add(child);
				this.add(tr);
			}
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<table>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</table>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Td
 * 
 * 表格列
 * 
 * 类
 */

core.html.element.viewer.Td = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerTd" + count;
		// 列数
		var colspan = 1;

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getColspan = function() {
			return colspan;
		};

		this.setColspan = function(_colspan) {
			colspan = _colspan;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $td = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($td.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$td.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $td = $("#" + this.getId());
		$td.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $td = $("#" + this.getId());
		$td.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<td id='");
		html.push(this.getId());
		html.push("' colspan='");
		html.push(this.getColspan());
		html.push("'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</td>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Tr
 * 
 * 表格行
 * 
 * 类
 */

core.html.element.viewer.Tr = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerTr" + count;

		// 子元素
		var elements = [];

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $tr = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($tr.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$tr.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $tr = $("#" + this.getId());
		$tr.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $tr = $("#" + this.getId());
		$tr.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 若为Td,则直接添加.否则创建一个Td,放入Td再添加
			if (child.constructor === core.html.element.viewer.Td) {
				// 添加子元素
				this.getElements().push(child);
			} else {
				var td = new core.html.element.viewer.Td();
				td.add(child);
				this.add(td);
			}
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<tr>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</tr>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();
/**
 * Button
 * 
 * 基础Button按钮
 * 
 * 对象
 */

core.html.element.viewer.button.Button = (function() {

	// 按钮
	var button;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $button = $("#" + id);
		return ($button.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $button = $("#" + id);
		$button.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $button = $("#" + id);
		$button.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $button = $("#" + id);
		$button.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 按钮描述
		var text = config.text || "";

		// HTML元素
		var html = [];
		html.push("<button id='");
		html.push(id);
		html.push("'>");
		html.push(text);
		html.push("</button>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

	};

	return {

		/**
		 * 获取按钮 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Button}
		 */
		getButton : function() {

			// 不存在,则创建
			if (!button) {
				button = new Constructor();
			}

			return button;
		}
	};
})();
/**
 * Linkbutton
 * 
 * EasyUI Linkbutton按钮
 * 
 * 对象
 */

core.html.element.viewer.button.easyui.Linkbutton = (function() {

	// 按钮
	var button;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $button = $("#" + id);
		return ($button.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $button = $("#" + id);
		$button.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $button = $("#" + id);
		$button.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $button = $("#" + id);
		$button.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// HTML元素
		var html = [];
		html.push("<a id='");
		html.push(id);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $button = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$button.linkbutton(easyui);
	};

	return {

		/**
		 * 获取按钮 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Button}
		 */
		getButton : function() {

			// 不存在,则创建
			if (!button) {
				button = new Constructor();
			}

			return button;
		}
	};
})();
/**
 * Text
 * 
 * 基础Text输入框
 * 
 * 对象
 */

core.html.element.viewer.input.Text = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		core.log.Logger.getLogger().info("处理了输入框" + id);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Combobox
 * 
 * EasyUI Combobox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Combobox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.combobox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Datebox
 * 
 * EasyUI Datebox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Datebox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.datebox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Datetimebox
 * 
 * EasyUI Datetimebox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Datetimebox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.datetimebox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Filebox
 * 
 * EasyUI Filebox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Filebox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.filebox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Numberbox
 * 
 * EasyUI Numberbox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Numberbox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.numberbox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Numberspinner
 * 
 * EasyUI Numberspinner输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Numberspinner = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.numberspinner(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Searchbox
 * 
 * EasyUI Searchbox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Searchbox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.searchbox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Slider
 * 
 * EasyUI Slider输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Slider = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.slider(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Textbox
 * 
 * EasyUI Textbox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Textbox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.textbox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Timespinner
 * 
 * EasyUI Timespinner输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Timespinner = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $input = $("#" + id);
		return ($input.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $input = $("#" + id);
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $input = $("#" + id);
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $input = $("#" + id);
		$input.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $input = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$input.timespinner(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();
/**
 * Keydown
 * 
 * 键盘事件
 * 
 * 数组<函数>
 */

core.html.event.document.Keydown = [];

document.onkeydown = function(event) {

	for (var i = 0, length = core.html.event.document.Keydown.length; i < length; i++) {

		var keydown = core.html.event.document.Keydown[i];
		typeof (keydown) === "function" && keydown(event);
	}
};
/**
 * Resize
 * 
 * 窗口改变事件
 * 
 * 数组<函数>
 */

core.html.event.window.Resize = [];

window.onresize = function() {

	for (var i = 0, length = core.html.event.window.Resize.length; i < length; i++) {

		var resize = core.html.event.window.Resize[i];
		typeof (resize) === "function" && resize();
	}
};

/**
 * Cookie
 * 
 * Cookie操作
 * 
 * 对象
 */

core.html.util.Cookie = (function() {

	// cookie操作者
	var cookie;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 获取cookie
	 * 
	 * @param name
	 *            cookie名称
	 * @returns {Object}
	 */
	Constructor.prototype.get = function(name) {

		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if (arr = document.cookie.match(reg)) {
			return (arr[2]);
		} else {
			return null;
		}
	};

	/**
	 * 设置cookie
	 * 
	 * @param name
	 *            名称
	 * @param value
	 *            值
	 * @param expiredays
	 *            过期天数
	 * @returns
	 */
	Constructor.prototype.set = function(name, value, expiredays) {

		// 过期天数不存在,则默认7天
		var day = expiredays === undefined ? 7 : expiredays;
		// 当前时间
		var exp = new Date();
		// 设置过期时间
		exp.setDate(exp.getDate() + day * 24 * 60 * 60 * 1000);
		// 设置cookie
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	};

	/**
	 * 删除cookie
	 * 
	 * @param name
	 *            名称
	 * @returns
	 */
	Constructor.prototype.del = function(name) {

		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval !== null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
	};

	return {

		/**
		 * 获取cookie操作者 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.util.Cookie}
		 */
		getCookie : function() {

			// 不存在,则创建
			if (!cookie) {
				cookie = new Constructor();
			}

			return cookie;
		}
	};
})();
