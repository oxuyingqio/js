/**
 * Linkbutton
 * 
 * EasyUI Linkbutton按钮
 * 
 * 类
 */

core.html.element.viewer.button.easyui.Linkbutton = (function() {

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
		core.html.element.viewer.button.easyui.Linkbutton.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonEasyuiLinkbutton" + count);
	};
	// 继承Easyui按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.button.Easyui);

	/**
	 * 处理HTML
	 * 
	 * @returns {core.html.element.viewer.button.easyui.Linkbutton}
	 */
	Constructor.prototype.dealHtml = function() {

		var $button = this.getjQuery();
		$button.linkbutton(this.getEasyui());

		return this;
	};

	return Constructor;
})();