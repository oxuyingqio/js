/**
 * Easyui
 * 
 * EasyUI 按钮
 * 
 * 抽象类
 */

core.html.element.viewer.button.Easyui = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.button.Easyui.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonEasyui" + count);

		// easyui 配置
		var easyui = {};

		/**
		 * 获取EasyUI配置
		 * 
		 * @returns {Object}
		 */
		this.getEasyui = function() {
			return easyui;
		};

		/**
		 * 设置EasyUI配置
		 * 
		 * @param easyui{Object}
		 *            EasyUI配置
		 * @returns {core.html.element.viewer.button.Easyui}
		 */
		this.setEasyui = function(_easyui) {
			easyui = _easyui;
			return this;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

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
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.button.Easyui.dealHtml:方法未实现."
	};

	return Constructor;
})();