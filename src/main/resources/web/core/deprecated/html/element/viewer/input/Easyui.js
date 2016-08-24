/**
 * Easyui
 * 
 * EasyUI 输入框
 * 
 * 抽象类
 */

core.html.element.viewer.input.Easyui = (function() {

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
		core.html.element.viewer.input.Easyui.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyui" + count, name);

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
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.input.Easyui.dealHtml:方法未实现."
	};

	/**
	 * 获取输入框的值-抽象方法
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {
		throw "core.html.element.viewer.input.Easyui.getValue:方法未实现."
	};

	/**
	 * 设置输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function() {
		throw "core.html.element.viewer.input.Easyui.setValue:方法未实现."
	};

	return Constructor;
})();