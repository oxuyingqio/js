/**
 * Linkbutton
 * 
 * EasyUI Linkbutton按钮
 * 
 * 对象
 */

core.html.element.viewer.button.easyui.Linkbutton = (function() {

	// 按钮
	var button;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function(id, config) {

		var $button = $("#" + id);
		return ($button.length !== 0);
	};

	/**
	 * 展示元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.show = function(id, config) {

		var $button = $("#" + id);
		$button.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.hide = function(id, config) {

		var $button = $("#" + id);
		$button.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.destroy = function(id, config) {

		var $button = $("#" + id);
		$button.remove();
	};

	/**
	 * 转为HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// HTML元素
		var html = [];
		html.push("<a id='");
		html.push(id);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            按钮的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		var $button = $("#" + id);

		// 获取EasyUI配置
		var easyui = config.easyui;

		$button.linkbutton(easyui);
	};

	return {

		/**
		 * 获取按钮 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Button}
		 */
		getButton : function() {

			// 不存在,则创建
			if (!button) {
				button = new Constructor();
			}

			return button;
		}
	};
})();