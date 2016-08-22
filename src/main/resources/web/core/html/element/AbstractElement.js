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
		 * 元素是否在HTML中存在
		 */
		this.exist = false;

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

	};

	/**
	 * 显示元素
	 * 
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.show = function(target) {

		// 获取元素是否在HTML中存在
		if (this.exist) {

			// 存在则直接调用jQuery显示
			$("#" + this.getId()).show();
		} else {

			// 不存在则调用添加至body
			this.appendTo("body");
		}

		return this;
	}

	/**
	 * 隐藏元素
	 * 
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.hide = function(target) {

		// 获取元素是否在HTML中存在,存在则隐藏
		this.exist && $("#" + this.getId()).hide();

		return this;
	}

	/**
	 * 添加至
	 * 
	 * @param target{String}
	 *            目标位置
	 * @returns {core.html.element.AbstractElement}
	 */
	Constructor.prototype.appendTo = function(target) {

		// 获取元素是否在HTML中存在
		if (this.exist) {

			// 存在则调用jQuery插入
			$("#" + this.getId()).appendTo(target);
		} else {

			// 不存在则修改存在状态,且调用jQuery添加至方法
			this.exist = true;
			$(target).append(this.convertHtml());
		}

		return this;
	}

	// 返回构造函数
	return Constructor;
})();