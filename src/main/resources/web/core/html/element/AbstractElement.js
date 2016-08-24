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
		 * jQuery对象
		 */
		var jQuery = null;

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
		 * @returns {core.html.element.AbstractElement}
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
		 * @returns {core.html.element.AbstractElement}
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
		 * @returns {core.html.element.AbstractElement}
		 */
		this.setStyle = function(_style) {

			style = _style;

			return this;
		};

		/**
		 * 添加子元素
		 */
		this.addChild = function(child) {

			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);

			children.push(child);
		};

		/**
		 * 移除子元素
		 */
		this.removeChild = function(child) {

			children.remove(child);
		};

		/**
		 * 获取jQuery对象
		 * 
		 * @returns {jQuery}
		 */
		this.getJQuery = function() {

			return jQuery;
		};

		/**
		 * 设置jQuery对象
		 * 
		 * @param jQuery{jQuery}
		 * @returns {core.html.element.AbstractElement}
		 */
		this.setJQuery = function(_jQuery) {

			jQuery = _jQuery;

			return this;
		};
	};

	/**
	 * 显示元素
	 * 
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.show = function(target) {

		// 获取jQuery对象
		var $jQuery = this.getJQuery();

		// 判断元素是否存在
		if ($jQuery == null) {

			// 不存在则调用添加至body
			this.appendTo("body");
		} else {

			// 存在则直接调用jQuery显示
			$jQuery.show();
		}

		return this;
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.hide = function(target) {

		// 获取jQuery对象
		var $jQuery = this.getJQuery();

		// 判断元素是否存在,存在则隐藏
		$jQuery == null || $jQuery.hide();

		return this;
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取jQuery对象
		var $jQuery = this.getJQuery();

		// 判断元素是否存在,存在则隐藏
		$jQuery == null || $jQuery.remove();
	};

	/**
	 * 添加至
	 * 
	 * @param target{String}
	 *            目标位置
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.appendTo = function(target) {

		// 获取jQuery对象
		var $jQuery = this.getJQuery();

		// 判断元素是否存在
		if ($jQuery == null) {

			// 不存在则添加元素,且设置jQuery对象
			$(target).append(this.convertHtml());
			this.setJQuery($("#" + this.getId()));
		} else {
			// 存在则调用jQuery插入
			$jQuery.appendTo(target);
		}

		return this;
	};

	// 返回构造函数
	return Constructor;
})();