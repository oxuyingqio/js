/**
 * Array
 * 
 * 数组
 * 
 * 类扩展
 */

/**
 * 清空数组
 * 
 * @returns
 */
Array.prototype.clear = function() {

	// 长度>0,则清空
	this.length > 0 && this.splice(0, this.length);
};

/**
 * 是否存在指定对象
 * 
 * @param object{Object}
 *            对象
 * @returns {Boolean}
 */
Array.prototype.contains = function(object) {

	// 获取对象下标值
	var index = this.indexOf(object);
	// 依据下标值判断是否存在该对象
	return (index >= 0);
};

/**
 * 获取指定对象下标值
 * 
 * @param object{Object}
 *            对象
 * @returns {Number}
 */
Array.prototype.indexOf = function(object) {

	// 遍历数组
	for (var index = 0, length = this.length; index < length; index++) {

		if (this[index] === obj) {
			return index;
		}
	}

	return -1;
};

/**
 * 在指定下标位置插入对象
 * 
 * @param index{Number}
 *            下标值
 * @param object{Object}
 *            对象
 * @returns
 */
Array.prototype.insert = function(index, object) {

	this.splice(index, 0, object);
};

/**
 * 删除指定对象
 * 
 * @param object{Object}
 *            对象
 * @returns
 */
Array.prototype.remove = function(object) {

	// 获取对应下标值
	var index = this.indexOf(object);
	// 存在则删除
	index >= 0 && this.splice(index, 1);
};

/**
 * 删除指定下标位置的对象
 * 
 * @param index{Number}
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
 * 类扩展
 */

/**
 * 格式化日期
 * 
 * @param format{String}
 *            格式化参数
 * @returns {String}
 */
Date.prototype.format = function(format) {

	// 日期数据
	var data = {

		// 月份
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 小时,12进制
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 小时,24进制
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	// 处理年份
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	// 处理月 日 时 分 秒 毫秒
	for ( var el in data) {

		if (new RegExp("(" + el + ")").test(format)) {
			format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (data[el]) : (("00" + data[el])
					.substr(("" + data[el]).length)));
		}
	}

	return format;
};
/**
 * Math
 * 
 * 数学计算
 * 
 * 对象扩展
 */

/**
 * 减法-静态方法
 * 
 * @param subtrahend{Number}
 *            减数
 * @param minuend{Number}
 *            被减数
 * @param precision{Number}
 *            结果精度
 * @returns {Number}
 */
Math.subtract = function(subtrahend, minuend, precision) {

	// 减数
	var a = parseFloat(subtrahend);
	// 被减数
	var b = parseFloat(minuend);

	return (a - b).toFixed(precision);
};
/**
 * Object
 * 
 * 超类
 * 
 * 类扩展
 */

/**
 * 注:
 * 		1.若扩展Object.prototype,则引入jQuery时会产生未知错误.
 */

/**
 * 克隆对象(原型式继承)-静态方法
 * 
 * @param object{Object}
 *            待克隆的对象
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
 * 类扩展
 */

/**
 * 替换所有字符串
 * 
 * @param target{String}
 *            目标字符串
 * @param result{String}
 *            待替换的字符串
 * @returns {String}
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 转为2进制字符串
 * 
 * @returns {String}
 */
String.prototype.toBinaryString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的2进制字符串
		var bs = this.charCodeAt(i).toString(2);
		// 不足8位,则在前面补0
		for (var j = bs.length; j < 8; j++) {

			rtnStr.push(0);
		}

		rtnStr.push(bs);
	}

	// 返回
	return rtnStr.join("");
};

/**
 * 转为16进制字符串
 * 
 * @returns {String}
 */
String.prototype.toHexString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的16进制字符串
		var hs = this.charCodeAt(i).toString(16);
		// 不足2位,则在前面补0
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
	} else {

		// 核心包
		core = {

			// HTML 包
			html : {

				// 常量包
				constant : {},

				// 元素包
				element : {

					// 模型包
					model : {},

					// 展示包
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
	}
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
		throw "core.lang.Class.extend:参数异常.参数个数必须为2个,得到" + arguments.length + "个";
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
 * @param name{String}
 *            名称
 * @param methods{Array
 *            <String>} 方法组
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
/**
 * Map
 * 
 * 映射
 * 
 * 类
 */

core.util.Map = function() {

	// 元素
	var elements = {};
	// 元素个数
	var length = 0;

	/**
	 * 返回映射个数
	 * 
	 * @returns {Number}
	 */
	this.size = function() {

		return length;
	};

	/**
	 * 映射是否包含键-值映射关系,未包含则返回 true。
	 * 
	 * @returns {Boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 映射是否包含指定键的映射关系,包含则返回 true。
	 * 
	 * @param key{Object}
	 *            键
	 * @returns {Boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 映射是否包含指定值的映射关系,包含则返回 true。
	 * 
	 * @param value{Object}
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
	 * 返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
	 * 
	 * @param key{Object}
	 *            键
	 * @returns {Object}
	 */
	this.get = function(key) {

		return elements[key];
	};

	/**
	 * 将指定键-值映射保存;若存在键,则更新对应映射的值.
	 * 
	 * @param key{Object}
	 *            键
	 * @param value{Object}
	 *            值
	 * @returns
	 */
	this.put = function(key, value) {

		!this.containsKey(key) && length++;
		elements[key] = value;
	};

	/**
	 * 若存在指定键的映射关系,则将其删除.
	 * 
	 * @param key{Object}
	 *            键
	 * @returns
	 */
	this.remove = function(key) {

		this.containsKey(key) && length--;
		delete elements[key];
	};

	/**
	 * 清除映射中所有映射关系
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
 * 日志记录者
 * 
 * 类
 */

core.log.Logger = (function() {

	// 日志记录者
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
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.error = function(msg) {

		// 级别是否低于Error级别
		if (this.level <= core.log.model.Level.error) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "ERROR", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Warn级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.warn = function(msg) {

		// 级别是否低于Warn级别
		if (this.level <= core.log.model.Level.warn) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "WARN", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Info级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.info = function(msg) {

		// 级别是否低于Info级别
		if (this.level <= core.log.model.Level.info) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "INFO", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Debug级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.debug = function(msg) {

		// 级别是否低于Info级别
		if (this.level <= core.log.model.Level.debug) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "DEBUG", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	return {

		/**
		 * 获取日志记录者
		 * 
		 * @returns {core.log.Logger}
		 */
		getInstance : function() {

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
 * 类
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
	 *            输出信息
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
		 * 获取转换器
		 * 
		 * @returns {core.log.controller.FormatConvertor}
		 */
		getInstance : function() {

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
	 * @param mode{core.log.model.Mode}
	 *            输出模式
	 * @returns {core.log.model.Outputor}
	 */
	getOutputor : function(mode) {

		// 输出者
		var outputor;

		switch (mode) {
		case core.log.model.Mode.console:
			// 获取控制台输出者实例
			outputor = new core.log.controller.outputor.Console.getInstance();
			break;
		case core.log.model.Mode.popup:
			// 获取弹出框输出者实例
			outputor = new core.log.controller.outputor.Popup.getInstance();
			break;
		default:
			throw "core.log.controller.OutputorCreator.getOutputor:参数异常.模式(" + mode + ")不支持";
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
 * 类
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
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		console.log(msg);
	};

	return {

		/**
		 * 获取输出者
		 * 
		 * @returns {core.log.controller.outputor.Console}
		 */
		getInstance : function() {

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
 * 类
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
	 * @param msg{Object}
	 *            信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		alert(msg);
	};

	return {

		/**
		 * 获取输出者
		 * 
		 * @returns {core.log.controller.outputor.Popup}
		 */
		getInstance : function() {

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
	error : 3,
	// 警告
	warn : 2,
	// 信息
	info : 1,
	// 调试
	debug : 0
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
 * @method getId 获取元素ID
 * @method getjQuery 获取元素jQuery对象
 * @method show 展示元素
 * @method hide 隐藏元素
 * @method destroy 销毁元素
 * @method appendTo 添加元素到
 * @method add 添加子元素
 * @method remove 移除子元素
 * @method getChildren 获取子元素集合
 * @method find 检索子元素集合,包含子元素的子元素
 */
core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "getId", "getjQuery", "show",
		"hide", "destroy", "appendTo", "add", "remove", "getChildren", "find" ]);
/**
 * Element
 * 
 * 元素,实现部分core.html.element.Element通用属性及方法
 * 
 * 抽象类
 */

core.html.element.model.Element = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		// 元素ID
		var id = _id || "coreHtmlElementModelElement" + count;

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

		/**
		 * 获取子元素集合
		 * 
		 * @returns {Array<core.html.element.Element>}
		 */
		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns {Object}
	 */
	Constructor.prototype.getjQuery = function() {

		return $("#" + this.getId());
	};

	/**
	 * 展示元素
	 * 
	 * @returns {core.html.element.model.Element}
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.show();

		return this;
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns {core.html.element.model.Element}
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.hide();

		return this;
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

		// 元素的jQuery对象
		var $element = this.getjQuery();
		$element.remove();
	};

	/**
	 * 添加元素到
	 * 
	 * @param id{String}
	 *            添加到的Div ID
	 * @returns {core.html.element.model.Element}
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();

		return this;
	};

	/**
	 * 添加子元素
	 * 
	 * @param children{core.html.element.Element}
	 *            形参,子元素
	 * @returns {core.html.element.model.Element}
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
			// 若元素存在,则直接展示添加的子元素
			this.exist() && child.appendTo(this.getId());
		}

		return this;
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild{core.html.element.Element}
	 *            待移除的子元素
	 * @returns {core.html.element.model.Element}
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

		return this;
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array<core.html.element.Element>}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data{Object}
	 *            查找数据
	 * @returns {Array<core.html.element.Element>}
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
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		// 元素的jQuery对象
		var $element = this.getjQuery();
		return ($element.length !== 0);
	};

	/**
	 * 转为HTML-抽象方法
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {
		throw "core.html.element.model.Element.convertHtml:方法未实现."
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

	return Constructor;
})();
/**
 * ElementProcess
 * 
 * 元素处理
 * 
 * 接口
 */

/**
 * @method exist 元素是否存在
 * @method convertHtml 转为HTML
 * @method dealHtml 处理HTML
 */
core.html.element.model.ElementProcess = new core.lang.Interface("core.html.element.model.ElementProcess", [ "exist",
		"convertHtml", "dealHtml" ]);
/**
 * Button
 * 
 * 按钮
 * 
 * 抽象类
 */

core.html.element.viewer.Button = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Button.superClass.constructor.call(this, id || "coreHtmlElementViewerButton" + count);
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Button.add:方法异常.按钮不允许继续添加子元素";
	};

	/**
	 * 转为HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.convertHtml = function() {
		throw "core.html.element.viewer.Button.convertHtml:方法未实现."
	};

	/**
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Button.dealHtml:方法未实现."
	};

	return Constructor;
})();
/**
 * Custom
 * 
 * 自定义元素,直接传入自定义HTML.
 * 
 * 类
 */

core.html.element.viewer.Custom = (function() {

	/**
	 * 构造函数
	 * 
	 * @param custom{String}
	 *            自定义HTML
	 */
	var Constructor = function(_custom) {

		// 自定义HTML
		var custom = _custom || "";

		/**
		 * 获取自定义HTML
		 * 
		 * @returns {String}
		 */
		this.getCustom = function() {
			return custom;
		};
	};

	/**
	 * 获取元素Id
	 * 
	 * @returns
	 */
	Constructor.prototype.getId = function() {
		throw "core.html.element.viewer.Custom.getId:方法异常.自定义元素无getId()方法实现";
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns
	 */
	Constructor.prototype.getjQuery = function() {
		throw "core.html.element.viewer.Custom.getjQuery:方法异常.自定义元素无getjQuery()方法实现";
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {
		throw "core.html.element.viewer.Custom.show:方法异常.自定义元素无show()方法实现";
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {
		throw "core.html.element.viewer.Custom.hide:方法异常.自定义元素无hide()方法实现";
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {
		throw "core.html.element.viewer.Custom.destroy:方法异常.自定义元素无destroy()方法实现";
	};

	/**
	 * 添加元素到
	 * 
	 * @param id{String}
	 *            添加到的Div ID
	 * @returns {core.html.element.viewer.Custom}
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();

		return this;
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Custom.add:方法异常.自定义元素不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
		throw "core.html.element.viewer.Custom.remove:方法异常.自定义元素无remove()方法实现";
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data{Object}
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		return [];
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		throw "core.html.element.viewer.Custom.exist:方法异常.自定义元素无exist()方法实现";
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		return this.getCustom();
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Custom.dealHtml:方法异常.自定义元素无dealHtml()方法实现";
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
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Div.superClass.constructor.call(this, id || "coreHtmlElementViewerDiv" + count);

		// class
		var clazz = "";

		/**
		 * 获取Class样式
		 * 
		 * @returns {String}
		 */
		this.getClass = function() {
			return clazz;
		};

		/**
		 * 设置Class样式
		 * 
		 * @param class
		 *            class样式
		 * @returns {core.html.element.viewer.Div}
		 */
		this.setClass = function(_clazz) {
			clazz = _clazz;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

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
		html.push("' class='");
		html.push(this.getClass());
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
	 * @param id{String}
	 *            元素ID
	 * @param legend{String}
	 *            legend
	 */
	var Constructor = function(id, _legend) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Fieldset.superClass.constructor.call(this, id || "coreHtmlElementViewerFieldset"
				+ count);

		// legend
		var legend = _legend || "";

		/**
		 * 获取legend属性值
		 * 
		 * @returns {String}
		 */
		this.getLegend = function() {
			return legend;
		};

		/**
		 * 设置legend属性值
		 * 
		 * @param legend{String}
		 *            legend属性值
		 * @returns {core.html.element.viewer.Fieldset}
		 */
		this.setLegend = function(_legend) {
			legend = _legend;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

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

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 * @param method{String}
	 *            表单的提交方式
	 * @param action{String}
	 *            表单的提交地址
	 */
	var Constructor = function(id, _method, _action) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Form.superClass.constructor.call(this, id || "coreHtmlElementViewerForm" + count);

		// method
		var method = _method || "post";
		// action
		var action = _action || "";

		/**
		 * 获取表单的提交方式
		 * 
		 * @returns {String}
		 */
		this.getMethod = function() {
			return method;
		};

		/**
		 * 设置表单的提交方式
		 * 
		 * @param method{String}
		 *            表单的提交方式
		 * @returns {core.html.element.viewer.Form}
		 */
		this.setMethod = function(_method) {
			method = _method;
			return this;
		};

		/**
		 * 获取表单的提交地址
		 * 
		 * @returns {String}
		 */
		this.getAction = function() {
			return action;
		};

		/**
		 * 设置表单的提交地址
		 * 
		 * @param action{String}
		 *            表单的提交地址
		 * @returns {core.html.element.viewer.Form}
		 */
		this.setAction = function(_action) {
			action = _action;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

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

	return Constructor;
})();
/**
 * Input
 * 
 * 输入框
 * 
 * 抽象类
 */

core.html.element.viewer.Input = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            输入框ID
	 * @param name{String}
	 *            输入框名称
	 */
	var Constructor = function(id, _name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id || "coreHtmlElementViewerInput" + count);

		// name
		var name = _name || id || "coreHtmlElementViewerInput" + count;

		/**
		 * 获取输入框名称
		 * 
		 * @returns {String}
		 */
		this.getName = function() {
			return name;
		};

		/**
		 * 设置输入框名称
		 * 
		 * @param name{String}
		 *            输入框名称
		 * @returns {core.html.element.viewer.Input}
		 */
		this.setName = function(_name) {
			name = _name;
			return this;
		}
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Input.add:方法异常.输入框不允许继续添加子元素";
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(this.getId());
		html.push("' name='");
		html.push(this.getName());
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Input.dealHtml:方法未实现."
	};

	/**
	 * 获取输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {
		throw "core.html.element.viewer.Input.getValue:方法未实现."
	};

	/**
	 * 设置输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function() {
		throw "core.html.element.viewer.Input.setValue:方法未实现."
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
	 * @param id{String}
	 *            元素ID
	 * @param text{String}
	 *            标签的文本信息
	 */
	var Constructor = function(id, _text) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Label.superClass.constructor.call(this, id || "coreHtmlElementViewerLabel" + count);

		// 文本
		var text = _text || "";
		// for
		var forr;
		// form
		var form;

		/**
		 * 获取文本信息
		 * 
		 * @returns {String}
		 */
		this.getText = function() {
			return text;
		};

		/**
		 * 设置文本信息
		 * 
		 * @param text{String}
		 *            文本信息
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setText = function(_text) {
			text = _text;
			return this;
		};

		/**
		 * 获取For属性值
		 * 
		 * @returns {String}
		 */
		this.getFor = function() {
			return forr;
		};

		/**
		 * 设置For属性值
		 * 
		 * @param for{String}
		 *            for属性值
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setFor = function(_forr) {
			forr = _forr
			return this;
		};

		/**
		 * 获取form属性值
		 * 
		 * @returns {String}
		 */
		this.getForm = function() {
			return form;
		};

		/**
		 * 设置form属性值
		 * 
		 * @param form{String}
		 *            form属性值
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setForm = function(_form) {
			form = _form;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Label.add:方法异常.标签不允许继续添加子元素";
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
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Table.superClass.constructor.call(this, id || "coreHtmlElementViewerTable" + count);
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @param children{core.html.element.Element}
	 *            形参,子元素
	 * @returns {core.html.element.viewer.Table}
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {

			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 若为Tr,则直接添加.
			if (child.constructor === core.html.element.viewer.Tr) {
				// 添加子元素
				this.getElements().push(child);
				// 若元素存在,则直接展示添加的子元素
				this.exist() && child.appendTo(this.getId());
			} else {
				// 待添加的子元素不为Tr,则创建一个Tr,放入Tr再添加
				var tr = new core.html.element.viewer.Tr();
				tr.add(child);
				this.add(tr);
			}
		}

		return this;
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
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Td.superClass.constructor.call(this, id || "coreHtmlElementViewerTd" + count);

		// 列数
		var colspan = 1;

		/**
		 * 获取列数
		 * 
		 * @returns {Number}
		 */
		this.getColspan = function() {
			return colspan;
		};

		/**
		 * 设置列数
		 * 
		 * @param colspan{Number}
		 *            列数
		 * @returns {core.html.element.viewer.Td}
		 */
		this.setColspan = function(_colspan) {
			colspan = _colspan;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

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
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Tr.superClass.constructor.call(this, id || "coreHtmlElementViewerTr" + count);
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @param children{core.html.element.Element}
	 *            形参,子元素
	 * @returns {core.html.element.viewer.Tr}
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
				// 若元素存在,则直接展示添加的子元素
				this.exist() && child.appendTo(this.getId());
			} else {
				var td = new core.html.element.viewer.Td();
				td.add(child);
				this.add(td);
			}
		}

		return this;
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

	return Constructor;
})();
/**
 * Button
 * 
 * 基础按钮
 * 
 * 类
 */

core.html.element.viewer.button.Button = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.button.Button.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonButton" + count);

		// text
		var text = "";

		/**
		 * 获取按钮文本
		 * 
		 * @returns {String}
		 */
		this.getText = function() {
			return text;
		};

		/**
		 * 设置按钮文本
		 * 
		 * @param text{String}
		 *            按钮文本
		 * @returns {core.html.element.viewer.button.Button}
		 */
		this.setText = function(_text) {
			text = _text;
			return this;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<button id='");
		html.push(this.getId());
		html.push("'>");
		html.push(this.getText());
		html.push("</button>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns {core.html.element.viewer.button.Button}
	 */
	Constructor.prototype.dealHtml = function() {

		return this;
	};

	return Constructor;
})();

/**
 * Easyui
 * 
 * EasyUI 按钮
 * 
 * 抽象类
 */

core.html.element.viewer.button.Easyui = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.button.Easyui.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonEasyui" + count);

		// easyui 配置
		var easyui = {};

		/**
		 * 获取EasyUI配置
		 * 
		 * @returns {Object}
		 */
		this.getEasyui = function() {
			return easyui;
		};

		/**
		 * 设置EasyUI配置
		 * 
		 * @param easyui{Object}
		 *            EasyUI配置
		 * @returns {core.html.element.viewer.button.Easyui}
		 */
		this.setEasyui = function(_easyui) {
			easyui = _easyui;
			return this;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<a id='");
		html.push(this.getId());
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.button.Easyui.dealHtml:方法未实现."
	};

	return Constructor;
})();
/**
 * Linkbutton
 * 
 * EasyUI Linkbutton按钮
 * 
 * 类
 */

core.html.element.viewer.button.easyui.Linkbutton = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.button.easyui.Linkbutton.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonEasyuiLinkbutton" + count);
	};
	// 继承Easyui按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.button.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns {core.html.element.viewer.button.easyui.Linkbutton}
	 */
	Constructor.prototype.dealHtml = function() {

		var $button = this.getjQuery();
		$button.linkbutton(this.getEasyui());

		return this;
	};

	return Constructor;
})();
/**
 * Easyui
 * 
 * EasyUI 输入框
 * 
 * 抽象类
 */

core.html.element.viewer.input.Easyui = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.Easyui.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyui" + count, name);

		// easyui 配置
		var easyui = {};

		this.getEasyui = function() {
			return easyui;
		};

		this.setEasyui = function(_easyui) {
			easyui = _easyui;
		};
	};
	// 继承输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Input);

	/**
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.input.Easyui.dealHtml:方法未实现."
	};

	/**
	 * 获取输入框的值-抽象方法
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {
		throw "core.html.element.viewer.input.Easyui.getValue:方法未实现."
	};

	/**
	 * 设置输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function() {
		throw "core.html.element.viewer.input.Easyui.setValue:方法未实现."
	};

	return Constructor;
})();
/**
 * Text
 * 
 * 基础输入框
 * 
 * 类
 */

core.html.element.viewer.input.Text = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.Text.superClass.constructor.call(this, id || "coreHtmlElementViewerInputText"
				+ count, name);
	};
	// 继承输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Input);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.val();
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.val(value);
	};

	return Constructor;
})();
/**
 * Combobox
 * 
 * EasyUI Combobox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Combobox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Combobox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiCombobox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.combobox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.combobox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.combobox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Datebox
 * 
 * EasyUI Datebox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Datebox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Datebox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiDatebox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.datebox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.datebox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.datebox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Datetimebox
 * 
 * EasyUI Datetimebox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Datetimebox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Datetimebox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiDatetimebox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.datetimebox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.datetimebox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.datetimebox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Filebox
 * 
 * EasyUI Filebox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Filebox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Filebox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiFilebox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.filebox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.filebox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.filebox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Numberbox
 * 
 * EasyUI Numberbox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Numberbox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Numberbox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiNumberbox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.numberbox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.numberbox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.numberbox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Numberspinner
 * 
 * EasyUI Numberspinner输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Numberspinner = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Numberspinner.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiNumberspinner" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.numberspinner(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.numberspinner("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.numberspinner("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Searchbox
 * 
 * EasyUI Searchbox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Searchbox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Searchbox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiSearchbox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.searchbox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.searchbox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.searchbox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Slider
 * 
 * EasyUI Slider输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Slider = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Slider.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiSlider" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.slider(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.slider("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.slider("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Textbox
 * 
 * EasyUI Textbox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Textbox = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Textbox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiTextbox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.textbox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.textbox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.textbox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();
/**
 * Timespinner
 * 
 * EasyUI Timespinner输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Timespinner = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.easyui.Timespinner.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiTimespinner" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.timespinner(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.timespinner("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.timespinner("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
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
 * Cookie操作者
 * 
 * 类
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
	 * @param name{String}
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
	 * @param name{String}
	 *            cookie名称
	 * @param value{String}
	 *            cookie值
	 * @param expiredays{Number}
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
	 * @param name{String}
	 *            cookie名称
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
		 * 获取cookie操作者
		 * 
		 * @returns {core.html.util.Cookie}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!cookie) {
				cookie = new Constructor();
			}

			return cookie;
		}
	};
})();
