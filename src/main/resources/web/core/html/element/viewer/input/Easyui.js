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
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		// 抽象方法
	};

	return Constructor;
})();