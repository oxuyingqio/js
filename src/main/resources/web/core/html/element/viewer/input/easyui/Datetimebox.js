/**
 * Datetimebox
 * 
 * EasyUI Datetimebox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Datetimebox = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 调用父类构造
		core.html.element.viewer.input.easyui.Datetimebox.superClass.constructor.call(this, id, name);

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

		var $input = $("#" + this.getId());
		$input.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		var $input = $("#" + this.getId());
		$input.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		var $input = $("#" + this.getId());
		$input.remove();
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		var $input = $("#" + this.getId());
		return ($input.length !== 0);
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

		var $input = $("#" + this.getId());
		$input.datetimebox(this.getEasyui());
	};

	return Constructor;
})();