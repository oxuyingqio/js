/**
 * Datebox
 * 
 * EasyUI Datebox输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Datebox = (function() {

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
		core.html.element.viewer.input.easyui.Datebox.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiDatebox" + count, name);
	};
	// 继承Easyui输入框抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.input.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		var $input = this.getjQuery();
		$input.datebox(this.getEasyui());
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {

		// 获取jQuery对象
		var $input = this.getjQuery();
		return $input.datebox("getValue");
	};

	/**
	 * 设置输入框的值
	 * 
	 * @param value
	 *            值
	 * @param hiddenValue
	 *            隐藏值
	 * @returns
	 */
	Constructor.prototype.setValue = function(value, hiddenValue) {

		// 获取jQuery对象
		var $input = this.getjQuery();
		$input.datebox("setValue", value);

		if (hiddenValue) {
			$("input[name='" + this.getName() + "']").val(hiddenValue);
		}
	};

	return Constructor;
})();