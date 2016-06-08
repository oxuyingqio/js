/**
 * Text
 * 
 * 基础输入框
 * 
 * 类
 */

core.html.element.viewer.input.Text = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.input.Text.superClass.constructor.call(this, id || "coreHtmlElementViewerInputText"
				+ count, name);
	};
	// 继承输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Input);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.val();
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.val(value);
	};

	return Constructor;
})();