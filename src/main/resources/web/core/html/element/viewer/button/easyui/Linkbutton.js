/**
 * Linkbutton
 * 
 * EasyUI Linkbutton按钮
 * 
 * 类
 */

core.html.element.viewer.button.easyui.Linkbutton = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.button.easyui.Linkbutton.superClass.constructor.call(this, id);

		// easyui 配置
		var easyui = {};

		this.getEasyui = function() {
			return easyui;
		};

		this.setEasyui = function(_easyui) {
			easyui = _easyui;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

	/**
	 * 添加元素到
	 * 
	 * @param id
	 *            添加到的位置
	 * @returns
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		var $button = $("#" + this.getId());
		$button.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		var $button = $("#" + this.getId());
		$button.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		var $button = $("#" + this.getId());
		$button.remove();
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		var $button = $("#" + this.getId());
		return ($button.length !== 0);
	};

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
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $button = $("#" + this.getId());
		$button.linkbutton(this.getEasyui());
	};

	return Constructor;
})();