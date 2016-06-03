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
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(_id, _name) {

		// ID
		var id = _id;
		// 名称
		var name = _name;

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

		this.getName = function() {
			return name;
		};

		this.setName = function(_name) {
			name = _name;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $input = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($input.length === 0) {
			$("body").append(this.convertHtml());
		} else {
			$input.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $input = $("#" + this.getId());
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 元素的jQuery对象
		var $input = $("#" + this.getId());
		$input.remove();
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
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		alert("处理了输入框:" + this.getId());
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