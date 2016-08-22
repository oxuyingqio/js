/**
 * @name Div
 * @package core.html.element.viewer
 * @desc 块
 * @type 类
 * 
 * @date 2016年8月20日 11:56:33
 */

core.html.element.viewer.Div = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Div.superClass.constructor.call(this, id || "coreHtmlElementViewerDiv" + count);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		var html = [];

		html.push("<div ");
		html.push("id='" + this.getId() + "' ");
		html.push("class='" + this.getClass() + "' ");
		html.push("></div>");

		return html.join("");
	}

	return Constructor;
})();