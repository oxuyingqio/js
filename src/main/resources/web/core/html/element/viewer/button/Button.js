/**
 * Button
 * 
 * 基础Button按钮
 * 
 * 对象
 */

core.html.element.viewer.button.Button = (function() {

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

		return ($("#" + id).length !== 0);
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

		$("#" + id).show();
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

		$("#" + id).hide();
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

		$("#" + id).remove();
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

		// 按钮描述
		var text = config.text || "";

		// HTML元素
		var html = [];
		html.push("<button id='");
		html.push(id);
		html.push("'>");
		html.push(text);
		html.push("</button>");

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

		core.log.Logger.getLogger().info("处理了按钮" + id);
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