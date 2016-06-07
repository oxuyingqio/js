/**
 * Slider
 * 
 * EasyUI Slider输入框
 * 
 * 类
 */

core.html.element.viewer.input.easyui.Slider = (function() {

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
		core.html.element.viewer.input.easyui.Slider.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerInputEasyuiSlider" + count, name);
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
		$input.slider(this.getEasyui());
	};

	return Constructor;
})();