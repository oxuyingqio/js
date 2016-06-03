/**
 * Datetimebox
 * 
 * EasyUI Datetimebox输入框
 * 
 * 对象
 */

core.html.element.viewer.input.easyui.Datetimebox = (function() {

	// 输入框
	var input;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 元素是否存在
	 * 
	 * @param id
	 *            输入框的ID
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
	 *            输入框的ID
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
	 *            输入框的ID
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
	 *            输入框的ID
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
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function(id, config) {

		// 输入框名称
		var name = config.name || "";

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(id);
		html.push("' name='");
		html.push(name);
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @param id
	 *            输入框的ID
	 * @param config
	 *            配置项
	 * @returns
	 */
	Constructor.prototype.dealHtml = function(id, config) {

		// 获取EasyUI配置
		var easyui = config.easyui;

		$("#" + id).datetimebox(easyui);
	};

	return {

		/**
		 * 获取输入框 懒加载,且仅创建一个
		 * 
		 * @returns {core.html.element.model.Input}
		 */
		getInput : function() {

			// 不存在,则创建
			if (!input) {
				input = new Constructor();
			}

			return input;
		}
	};
})();