/**
 * @name AbstractElement
 * @package core.html.element
 * @desc HTML元素公共抽象实现
 * @type 抽象类
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
		 * 子元素
		 */
		var children = [];

		/**
		 * 属性
		 */
		var attributes = new core.util.Map();

		/**
		 * 获取id
		 * 
		 * @returns {String}
		 */
		this.getId = function() {

			return id;
		};

		/**
		 * 设置id
		 * 
		 * @param id{String}
		 * @returns {core.html.element.Element}
		 */
		this.setId = function(_id) {

			id = _id;

			return this;
		};

		/**
		 * 获取class
		 * 
		 * @returns {String}
		 */
		this.getClass = function() {

			return clazz;
		};

		/**
		 * 设置class
		 * 
		 * @param clazz{String}
		 * @returns {core.html.element.Element}
		 */
		this.setClass = function(_clazz) {

			clazz = _clazz;

			return this;
		};

		/**
		 * 获取style
		 * 
		 * @returns {core.html.element.model.Style/String}
		 */
		this.getStyle = function() {

			return style;
		};

		/**
		 * 设置style
		 * 
		 * @param style
		 *            {core.html.element.model.Style/String}
		 * @returns {core.html.element.Element}
		 */
		this.setStyle = function(_style) {

			style = _style;

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
		var $jQuery = $("#" + this.getId());
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
			$("#" + this.getId()).show();
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
		this.exist() && $("#" + this.getId()).hide();

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
		this.exist() && $("#" + this.getId()).remove();
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
				$("#" + this.getId()).append(element.convertHtml());
			} else {

				$("#" + this.getId()).append(element);
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
				$("#" + this.getId()).appendTo(target);
			} else {

				// 不存在则调用jQuery添加元素
				$(target).append(this.convertHtml());
			}
		}

		return this;
	};

	// 返回构造函数
	return Constructor;
})();