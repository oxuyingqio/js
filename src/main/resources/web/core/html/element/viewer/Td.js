/**
 * Td
 * 
 * 表格列
 * 
 * 类
 */

core.html.element.viewer.Td = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Td.superClass.constructor.call(this, id || "coreHtmlElementViewerTd" + count);

		// 列数
		var colspan = 1;

		this.getColspan = function() {
			return colspan;
		};

		this.setColspan = function(_colspan) {
			colspan = _colspan;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<td id='");
		html.push(this.getId());
		html.push("' colspan='");
		html.push(this.getColspan());
		html.push("'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</td>");

		return html.join("");
	};

	return Constructor;
})();