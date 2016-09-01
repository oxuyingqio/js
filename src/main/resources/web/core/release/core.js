/**
 * @name	Array
 * @package	core.js
 * @desc	数组
 * @type	类扩展
 * 
 * @method	void	clear()								清空数组
 * 			Boolean	contains(Object object)				是否存在指定对象
 * 			Number	indexOf(Object object)				获取指定对象下标值
 * 			void	insert(Number index, Object object)	在指定下标位置插入对象
 * 			void	remove(Object object)				删除指定对象
 * 			void	removeAt(Number index)				删除指定下标位置的对象
 * 
 * @date	2016年8月20日 09:45:15
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
 * @name	Date
 * @package	core.js
 * @desc	日期
 * @type	类扩展
 * 
 * @method	String	format(String format)	格式化日期
 * 
 * @date	2016年8月20日 09:41:57
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
 * @name	Math
 * @package	core.js
 * @desc	数学计算
 * @type	对象扩展
 * 
 * @method	static Number	subtract(Number subtrahend, Number minuend, Number precision)	减法
 * 
 * @date	2016年8月20日 09:41:02
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
 * @name	Object
 * @package	core.js
 * @desc	超类
 * @type	类扩展
 * 
 * @method	static Object	clone(Object object)	克隆对象(原型式继承)
 * 
 * @attention	1.若扩展Object.prototype,引入jQuery时会产生未知错误.
 * 
 * @date	2016年8月20日 09:15:16
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
 * @name	String
 * @package	core.js
 * @desc	字符串
 * @type	类扩展
 * 
 * @method	String	replaceAll(String target, String result)	替换所有字符串
 * 			String	toBinaryString()							转为2进制字符串
 * 			String	toHexString()								转为16进制字符串
 * 
 * @date	2016年8月20日 09:38:33
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

					// HTML5 包
					html5 : {

						// 展示包
						viewer : {}
					},

					// 模型包
					model : {},

					// 展示包
					viewer : {}
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

			// // 日志包
			// log : {
			//
			// // 控制包
			// controller : {
			//
			// // 输出者实现包
			// outputor : {}
			// },
			//
			// // 模型包
			// model : {}
			// },

			// 工具包
			util : {}
		};
	}
})();
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
		new core.lang.Exception(this, "core.lang.Class", "extend方法参数异常", "参数个数必须为2个,得到" + arguments.length + "个");
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
 * @name	Exception
 * @package	core.lang
 * @desc	异常
 * @type	类
 * 
 * @constructor core.lang.Exception(Object _this, String msg)
 * 
 * @date	2016年8月20日 09:32:06
 */

/**
 * 构造函数
 * 
 * @param _this{Object}
 */
core.lang.Exception = function(_this) {

	// 异常信息
	var msg = [];
	// 遍历参数
	for (var i = 1, length = arguments.length; i < length; i++) {
		msg.push(arguments[i]);
		msg.push(" ");
	}

	if (window.console && window.console.error) {
		window.console.error(msg.join(""));
	}
};
/**
 * @name	Interface
 * @package	core.lang
 * @desc	接口
 * @type	类
 * 
 * @constructor	core.lang.Interface(String name, Array<String> methods)
 * 
 * @method	static void	ensureImplements(Object object, core.lang.Interface interface...)	检查对象是否实现对应接口的方法
 * 
 * @date	2016年8月20日 09:35:10
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
		new core.lang.Exception(this, "core.lang.Interface", "构造参数异常", "参数个数必须为2个,得到" + arguments.length + "个");
	}

	// 接口名称
	this.name = name;
	// 接口方法
	this.methods = [];
	// 设置接口方法
	for (var i = 0, length = methods.length; i < length; i++) {

		if (typeof (methods[i]) !== "string") {
			new core.lang.Exception(this, "core.lang.Interface", "构造参数异常", "接口方法名必须为字符串");
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
		new core.lang.Exception(this, "core.lang.Interface", "ensureImplements方法参数异常",
				"参数个数>=2.首参数为实现接口的对象,后续参数为实现的接口对象");
	}

	// 遍历实现的接口对象
	for (var i = 1, length = arguments.length; i < length; i++) {

		// 获取实现的接口对象
		var _interface = arguments[i];

		// 接口对象是否存在
		if (_interface) {
			// 存在,则检查接口对象是否为core.lang.Interface类
			if (_interface.constructor !== core.lang.Interface) {
				new core.lang.Exception(this, "core.lang.Interface", "ensureImplements方法参数异常",
						"传入的接口对象必须是core.lang.Interface类");
			}
		} else {
			new core.lang.Exception(this, "core.lang.Interface", "ensureImplements方法参数异常", "传入的接口对象不存在");
		}

		// 遍历接口方法
		for (var j = 0, jLength = _interface.methods.length; j < jLength; j++) {

			// 获取接口方法
			var method = _interface.methods[j];

			// 接口方法不存在,或类型不为方法
			if (!object[method] || typeof (object[method]) !== "function") {
				new core.lang.Exception(this, "core.lang.Interface", "ensureImplements接口实现异常", "接口" + _interface.name
						+ "(" + method + ")方法未实现");
			}
		}
	}
};
/**
 * @name	Map
 * @package	core.util
 * @desc	映射
 * @type	类
 * 
 * @constructor	core.util.Map()
 * 
 * @method	Number 	size() 							返回映射个数
 * 			Boolean	isEmpty()						映射是否包含键-值映射关系,未包含则返回 true.
 * 			Boolean	containsKey(Object key)			映射是否包含指定键的映射关系,包含则返回 true.
 * 			Boolean	containsValue(Object value)		映射是否包含指定值的映射关系,包含则返回 true.
 * 			Object	get(Object key)					返回指定键所映射的值;如果映射中不包含该键的映射关系,则返回 undefined.
 * 			void	put(Object key, Object value)	将指定键-值映射保存;若存在键,则更新对应映射的值.
 * 			void	remove(Object key)				若存在指定键的映射关系,则将其删除.
 * 			void	clear()							清除映射中所有映射关系
 * 
 * @date	2016年8月20日 09:29:54
 */

core.util.Map = function() {

	/**
	 * 元素
	 */
	var elements = {};
	/**
	 * 元素个数
	 */
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
	 * 映射是否包含键-值映射关系,未包含则返回 true.
	 * 
	 * @returns {Boolean}
	 */
	this.isEmpty = function() {

		return (length === 0);
	};

	/**
	 * 映射是否包含指定键的映射关系,包含则返回 true.
	 * 
	 * @param key{Object}
	 *            键
	 * @returns {Boolean}
	 */
	this.containsKey = function(key) {

		return (elements[key] !== undefined);
	};

	/**
	 * 映射是否包含指定值的映射关系,包含则返回 true.
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

		length = 0;
		elements = {};
	};
};
/**
 * @name	KeyCode
 * @package	core.html.constant
 * @desc	键盘Code值
 * @type	枚举
 * 
 * @date	2016年8月20日 10:20:27
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
 * @name	AbstractElement
 * @package	core.html.element
 * @desc	HTML元素公共抽象实现
 * @type	抽象类
 * 
 * @date 2016年8月20日 11:34:27
 */

core.html.element.AbstractElement = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            id
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		/**
		 * id
		 */
		var id = _id || "coreHtmlElementAbstractElement" + count;
		/**
		 * class
		 */
		var clazz = null;
		/**
		 * style
		 */
		var style = null;

		/**
		 * 单击事件
		 */
		var click = null;

		/**
		 * 子元素
		 */
		var children = [];

		/**
		 * 自定义属性
		 */
		var attributes = new core.util.Map();

		/**
		 * 获取/设置 id
		 * 
		 * @param id{String}
		 * @returns {String}/{core.html.element.Element}
		 */
		this.id = function() {

			switch (arguments.length) {
			case 0:
				return id;
			default:
				id = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 class
		 * 
		 * @param class{String}
		 * @returns {String}/{core.html.element.Element}
		 */
		this.clazz = function() {

			switch (arguments.length) {
			case 0:
				return clazz;
			default:
				clazz = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 style
		 * 
		 * @param style{Object}
		 * @returns {Object}/{core.html.element.Element}
		 */
		this.style = function() {

			switch (arguments.length) {
			case 0:
				return style;
			default:
				style = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 click
		 * 
		 * @param click{function}
		 * @returns {function}/{core.html.element.Element}
		 */
		this.click = function() {

			switch (arguments.length) {
			case 0:
				return click;
			default:
				click = arguments[0];
				return this;
			}
		};

		/**
		 * 装载事件
		 * 
		 * @returns {core.html.element.Element}
		 */
		this.loadEvent = function() {

			// 若元素在HTML中存在
			if (this.exist()) {

				// 单击事件
				click === null || $("#" + id).click(click);
			}

			return this;
		};

		/**
		 * 添加子元素
		 * 
		 * @param child
		 * @returns {core.html.element.Element}
		 */
		this.addChild = function(child) {

			children.push(child);

			return this;
		};

		/**
		 * 移除子元素
		 * 
		 * @param child
		 * @returns {core.html.element.Element}
		 */
		this.removeChild = function(child) {

			children.remove(child);

			return this;
		};

		/**
		 * 获取子元素集合
		 * 
		 * @returns {Array}
		 */
		this.getChildren = function() {

			return children;
		};

		/**
		 * 获取属性
		 * 
		 * @param key{String}
		 * @returns {Object}
		 */
		this.getAttribute = function(key) {

			return attributes.get(key);
		};

		/**
		 * 设置属性
		 * 
		 * @param key{String}
		 * @param value{Object}
		 * @returns {core.html.element.Element}
		 */
		this.setAttribute = function(key, value) {

			attributes.put(key, value);

			return this;
		};
	};

	/**
	 * 元素是否在HTML中存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		// 获取jQuery对象
		var $jQuery = $("#" + this.id());
		// 通过获取jQuery对象是否存在,来判断元素是否存在
		if ($jQuery.length === 0) {

			return false;
		} else {

			return true;
		}
	};

	/**
	 * 添加HTML后的处理
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.dealHtml = function() {

		// 装载事件
		this.loadEvent();

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 若子元素为元素对象,则调用其销毁方法
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				child.dealHtml();
			}
		}
	};

	/**
	 * 显示元素
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.show = function() {

		// 判断元素是否在HTML中存在
		if (this.exist()) {

			// 存在则直接调用jQuery显示
			$("#" + this.id()).show();
		} else {

			// 不存在则调用添加至body
			this.appendTo("body");
		}

		return this;
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.hide = function(target) {

		// 判断元素是否在HTML中存在,存在则调用jQuery隐藏
		this.exist() && $("#" + this.id()).hide();

		return this;
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = chidlren.length; i < length; i++) {

			// 获取子元素
			var child = children[i];
			// 若子元素为元素对象,则调用其销毁方法
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				child.destroy();
			}
		}

		// 判断元素是否在HTML中存在,存在则调用jQuery移除
		this.exist() && $("#" + this.id()).remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param element{core.html.element.Element}
	 */
	Constructor.prototype.append = function(element) {

		// 添加子元素
		this.addChild(element);

		// 判断元素是否在HTML中存在,若存在则调用jQuery添加
		if (this.exist()) {

			// 判断子元素类型.若为元素则调用转为convertHtml方法添加,其他则直接添加
			if (element instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(element, core.html.element.Element,
						core.html.element.ElementProcess);
				// 添加HTML内容
				$("#" + this.id()).append(element.convertHtml());
				// 添加HTML后处理HTML
				element.dealHtml();
			} else {

				$("#" + this.id()).append(element);
			}
		}

		return this;
	};

	/**
	 * 添加至
	 * 
	 * @param target{String}
	 *            目标位置
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.appendTo = function(target) {

		// 判断目标类型.若为元素则调用添加方法,若为字符串则调用jQuery添加方法
		if (target instanceof core.html.element.AbstractElement) {

			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(target, core.html.element.Element, core.html.element.ElementProcess);
			target.append(this);
		} else if (target.constructor === String) {

			// 判断元素是否在HTML中存在
			if (this.exist()) {

				// 存在则调用jQuery插入
				$("#" + this.id()).appendTo(target);
			} else {

				// 不存在则调用jQuery添加元素
				$(target).append(this.convertHtml());
				// 添加HTML后处理HTML
				this.dealHtml();
			}
		}

		return this;
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Element
 * @package	core.html.element
 * @desc	HTML元素
 * @type	接口
 * 
 * @method	String						getId()										获取ID
 * 			core.html.element.Element	show()										显示元素
 * 			core.html.element.Element	hide()										隐藏元素
 * 			void						destroy()									销毁元素
 * 			core.html.element.Element	append(Object child)						添加子元素
 * 			core.html.element.Element	appendTo(String target)						添加至
 * 			Object						getAttribute(String key)					获取属性
 * 			core.html.element.Element	setAttribute(String key, Object value)		设置属性
 * 
 * @date	2016年8月20日 11:31:48
 */

core.html.element.Element = new core.lang.Interface("core.html.element.Element", [ "getId", "show", "hide", "destroy",
		"append", "appendTo", "getAttribute", "setAttribute" ]);
/**
 * @name	ElementProcess
 * @package	core.html.element
 * @desc	HTML元素处理
 * @type	接口
 * 
 * @method	Boolean 							exist()			元素是否在HTML中存在
 * 			String								convertHtml()	转为HTML
 * 			core.html.element.ElementProcess	dealHtml()		处理HTML
 * 
 * @date	2016年8月20日 11:43:53
 */

core.html.element.ElementProcess = new core.lang.Interface("core.html.element.ElementProcess", [ "exist",
		"convertHtml", "dealHtml" ]);
/**
 * @name	Style
 * @package	core.html.element.model
 * @desc	样式
 * @type	类
 * 
 * @date	2016年8月22日 21:04:37
 */

core.html.element.model.Style = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 宽度
		var width = null;
		// 高度
		var height = null;
		// 颜色
		var color = null;
		// 背景
		var background = null;

		/**
		 * 获取/设置 width
		 * 
		 * @param width{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.width = function() {

			switch (arguments.length) {
			case 0:
				return width;
			default:
				width = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 height
		 * 
		 * @param height{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 color
		 * 
		 * @param color{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.color = function() {

			switch (arguments.length) {
			case 0:
				return color;
			default:
				color = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 background
		 * 
		 * @param background{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.background = function() {

			switch (arguments.length) {
			case 0:
				return background;
			default:
				background = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 转为字符串
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.toString = function() {

		var str = [];
		// 宽度
		var width = this.width();
		width == null || str.push("width:" + width + ";");
		// 高度
		var height = this.height();
		height == null || str.push("height:" + height + ";");
		// 颜色
		var color = this.color();
		color == null || str.push("color:" + color + ";");
		// 背景
		var background = this.background();
		background == null || str.push("background:" + background + ";");

		return str.join("");
	};

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	A
 * @package	core.html.element.viewer
 * @desc	锚
 * @type	类
 * 
 * @date	2016年8月24日 10:51:28
 */

core.html.element.viewer.A = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.A.superClass.constructor.call(this, id || "coreHtmlElementViewerA" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// A HTML
		html.push("<a ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</a>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Button
 * @package core.html.element.viewer
 * @desc	按钮
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Button = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Button.superClass.constructor.call(this, id || "coreHtmlElementViewerButton" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Button HTML
		html.push("<button ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</button>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Div
 * @package	core.html.element.viewer
 * @desc	文档中的节
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Div = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Div.superClass.constructor.call(this, id || "coreHtmlElementViewerDiv" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// DIV HTML
		html.push("<div ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</div>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Fieldset
 * @package	core.html.element.viewer
 * @desc	围绕表单中元素的边框
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Fieldset = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Fieldset.superClass.constructor.call(this, id || "coreHtmlElementViewerFieldset"
				+ count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Fieldset HTML
		html.push("<fieldset ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</fieldset>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Form
 * @package	core.html.element.viewer
 * @desc	供用户输入的 HTML 表单
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Form = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Form.superClass.constructor.call(this, id || "coreHtmlElementViewerForm" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Form HTML
		html.push("<form ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</form>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Input
 * @package	core.html.element.viewer
 * @desc	输入控件
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id || "coreHtmlElementViewerInput" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Input HTML
		html.push("<input ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push("/>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Label
 * @package	core.html.element.viewer
 * @desc	input 元素的标注
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Label = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Label.superClass.constructor.call(this, id || "coreHtmlElementViewerLabel" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Label HTML
		html.push("<label ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</label>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Legend
 * @package	core.html.element.viewer
 * @desc	fieldset 元素的标题
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Legend = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Legend.superClass.constructor.call(this, id || "coreHtmlElementViewerLegend" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Legend HTML
		html.push("<legend ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</legend>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Table
 * @package	core.html.element.viewer
 * @desc	表格
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Table = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Table.superClass.constructor.call(this, id || "coreHtmlElementViewerTable" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Table HTML
		html.push("<table ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</table>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Td
 * @package	core.html.element.viewer
 * @desc	表格中的单元
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Td = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Td.superClass.constructor.call(this, id || "coreHtmlElementViewerTd" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Td HTML
		html.push("<td ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</td>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Textarea
 * @package	core.html.element.viewer
 * @desc	多行的文本输入控件
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Textarea = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Textarea.superClass.constructor.call(this, id || "coreHtmlElementViewerTextarea" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Textarea HTML
		html.push("<textarea ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</textarea>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Tr
 * @package	core.html.element.viewer
 * @desc	表格中的行
 * @type	类
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Tr = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Tr.superClass.constructor.call(this, id || "coreHtmlElementViewerTr" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Tr HTML
		html.push("<tr ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</tr>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();
/**
 * @name	Keydown
 * @package	core.html.event.document
 * @desc	键盘事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:12:28
 */

core.html.event.document.Keydown = [];

document.onkeydown = function(event) {

	// 遍历键盘事件
	for (var i = 0, length = core.html.event.document.Keydown.length; i < length; i++) {

		// 获取键盘事件,且判断是否为函数
		var keydown = core.html.event.document.Keydown[i];
		typeof (keydown) === "function" && keydown(event);
	}
};
/**
 * @name	Resize
 * @package	core.html.event.window
 * @desc	窗口改变事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:19:16
 */

core.html.event.window.Resize = [];

window.onresize = function() {

	// 遍历窗口改变事件
	for (var i = 0, length = core.html.event.window.Resize.length; i < length; i++) {

		// 获取窗口改变事件,且判断是否为函数
		var resize = core.html.event.window.Resize[i];
		typeof (resize) === "function" && resize();
	}
};
/**
 * @name	Cookie
 * @package	core.html.util
 * @desc	Cookie操作
 * @type	类
 * 
 * @method	static core.html.util.Cookie	getInstance()										获取cookie操作
 * 			Object							get(String name)									获取cookie
 * 			void							set(String name, String value)						设置cookie
 * 			void							set(String name, String value, Number expiredays)	设置cookie
 * 			void							del(String name)									删除cookie
 * 
 * @date	2016年8月20日 09:53:30
 */

core.html.util.Cookie = (function() {

	/**
	 * cookie操作
	 */
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
		 * 获取cookie操作
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
