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