/**
 * @name	AbstractElement
 * @package core.html.element
 * @desc	HTML元素公共抽象实现
 * @type	抽象类
 * 
 * @constructor core.html.element.AbstractElement(string id)
 * 
 * @date	2018年5月10日 10:43:59
 */
core.html.element.AbstractElement = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{string}
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
		 * 额外信息
		 */
		var title;
		/**
		 * 样式类名
		 */
		var clazz;
		/**
		 * 样式
		 */
		var style;
		
		/**
		 * 事件
		 */
		/**
		 * 初始化事件
		 */
		var onInit;

		/**
		 * 附加属性
		 */
		/**
		 * 自定义属性
		 */
		var attributes = new core.util.Map();
		/**
		 * 子元素
		 */
		var children = [];

		/**
		 * 获取/设置ID
		 * 
		 * @param id{string}
		 * @returns {string/core.html.element.Element}
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
		 * 获取/设置额外信息
		 * 
		 * @param title{string}
		 * @returns {string/core.html.element.Element}
		 */
		this.title = function() {

			switch (arguments.length) {
			case 0:
				return title;
			default:
				title = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置样式类名
		 * 
		 * @param class{string}
		 * @returns {string/core.html.element.Element}
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
		 * @param style{string}
		 * @returns {string/core.html.element.Element}
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
		 * 获取/设置初始化事件
		 * 
		 * @param onInit{function}
		 * @returns {function/core.html.element.Element}
		 */
		this.onInit = function() {

			switch (arguments.length) {
			case 0:
				return onInit;
			default:
				onInit = arguments[0];
				return this;
			}
		};

		/**
		 * 获取属性
		 * 
		 * @param key{object}
		 * @returns {object}
		 */
		this.getAttribute = function(key) {

			return attributes.get(key);
		};

		/**
		 * 设置属性
		 * 
		 * @param key{object}
		 * @param value{object}
		 * @returns {core.html.element.Element}
		 */
		this.setAttribute = function(key, value) {

			attributes.put(key, value);

			return this;
		};

		/**
		 * 移除属性
		 * 
		 * @param key{object}
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
		 * 添加子元素
		 * 
		 * @param child{object}
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
		 * @param child{object}
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
		 * @returns {array}
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

			children.clear();

			return this;
		}
	};

	/**
	 * 初始化
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.init = function() {

		// 判断元素是否在HTML中存在
		if (this.$jQuery().length > 0) {

			// 存在则直接调用jQuery显示
			this.$jQuery().show();
		} else {

			// 不存在则调用添加至body
			this.appendTo("body");
		}

		return this;
	};
	
	/**
	 * 获取jQuery对象
	 * 
	 * @returns {object}
	 */
	Constructor.prototype.$jQuery = function() {

		return $("#" + this.id());
	};

	/**
	 * 添加子元素
	 * 
	 * @param element{core.html.element.Element/string}
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.append = function(element) {

		// 首先判断element是否不为空或undefined
		if (element) {

			// 添加子元素
			this.addChild(element);

			// 判断元素是否在HTML中存在
			if (this.$jQuery().length > 0) {

				// 判断子元素类型.若为元素则调用转为convertHtml方法添加,其他则直接添加
				if (element instanceof core.html.element.AbstractElement) {

					// 判断是否实现元素接口
					core.lang.Interface.ensureImplements(element, core.html.element.Element);
					// 添加HTML内容
					this.$jQuery().append(element.convertHtml());
					// 调用装载成功函数
					element.onInit()(this);
				} else {

					// 直接添加
					this.$jQuery().append(element);
				}
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
			core.lang.Interface.ensureImplements(target, core.html.element.Element);
			target.append(this);
		} else if (target.constructor === String) {

			// 判断元素是否在HTML中存在
			if (this.$jQuery().length > 0) {

				// 存在则调用jQuery插入
				this.$jQuery().appendTo(target);
			} else {

				// 不存在则调用jQuery添加元素
				$(target).append(this.convertHtml());
				// 调用装载成功函数
				this.onInit()(this);
			}
		}

		return this;
	};

	// 返回构造函数
	return Constructor;
})();