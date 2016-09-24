/**
 * @name	AbstractElement
 * @package core.html.element
 * @desc	HTML元素公共抽象实现
 * @type	抽象类
 * 
 * @constructor core.html.element.AbstractElement(String id)
 * 
 * @date	2016年8月20日 11:34:27
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
		 * 属性
		 */
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
		 * 子元素
		 */
		var children = [];
		/**
		 * 自定义属性
		 */
		var attributes = new core.util.Map();

		/**
		 * 事件
		 */
		/**
		 * 加载事件
		 */
		var load = function() {

		};
		/**
		 * 单击事件
		 */
		var click = function() {

		};

		/**
		 * 获取/设置 id
		 * 
		 * @param id
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
		 * @param class
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
		 * 获取/设置样式
		 * 
		 * @param style
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
		 * 添加子元素
		 * 
		 * @param child{Object}
		 *            子元素
		 * @returns {core.html.element.Element}
		 */
		this.addChild = function(child) {

			children.push(child);

			return this;
		};

		/**
		 * 移除子元素
		 * 
		 * @param child{Object}
		 *            子元素
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
		 * 清空子元素
		 * 
		 * @returns {core.html.element.Element}
		 */
		this.clearChildren = function() {

			children = [];

			return this;
		}

		/**
		 * 获取属性
		 * 
		 * @param key{Object}
		 * @returns {Object}
		 */
		this.getAttribute = function(key) {

			return attributes.get(key);
		};

		/**
		 * 设置属性
		 * 
		 * @param key{Object}
		 * @param value{Object}
		 * @returns {core.html.element.Element}
		 */
		this.setAttribute = function(key, value) {

			attributes.put(key, value);

			return this;
		};

		/**
		 * 移除属性
		 * 
		 * @param key{Object}
		 * @returns {core.html.element.Element}
		 */
		this.removeAttribute = function(key) {

			attributes.remove(key);

			return this;
		};

		/**
		 * 清空属性
		 * 
		 * @returns {core.html.element.Element}
		 */
		this.clearAttributes = function() {

			attributes.clear();

			return this;
		};

		/**
		 * 获取/设置加载事件
		 * 
		 * @param load
		 */
		this.load = function() {

			switch (arguments.length) {
			case 0:
				return load;
			default:
				load = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置单击事件
		 * 
		 * @param click
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
	 * 清空内容
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.clear = function(target) {

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 获取子元素
			var child = children[i];
			// 若子元素为元素对象,则调用其销毁方法
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				// 调用子元素清空内容方法
				child.clear();
			}
		}

		// 清空子元素
		this.clearChildren();

		// 判断元素是否在HTML中存在,存在则调用jQuery清空
		this.exist() && $("#" + this.id()).empty();

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
		for (var i = 0, length = children.length; i < length; i++) {

			// 获取子元素
			var child = children[i];
			// 若子元素为元素对象,则调用其销毁方法
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				// 调用子元素销毁方法
				child.destroy();
			}
		}

		// 清空子元素,清空属性
		this.clearChildren().clearAttributes();

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
				// 调用装载成功函数
				element.loadSucess();
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
				// 调用装载成功函数
				this.loadSucess();
			}
		}

		return this;
	};

	/**
	 * 装载成功
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.loadSucess = function() {

		// 装载单击事件
		this.click() === null || $("#" + this.id()).click(this.click());
		// 调用装载事件
		this.load()(this);

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
				// 调用装载成功函数
				child.loadSucess();
			}
		}
	}

	// 返回构造函数
	return Constructor;
})();