/**
 * @name	Tr
 * @package	core.html.element.viewer
 * @desc	表格中的行
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Tr(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 11:39:37
 */
core.html.element.viewer.Tr = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Tr.superClass.constructor.call(this, id);
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Tr HTML
		html.push("<tr ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		html.push(">");

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 判断子元素类型.若为元素,则调用其转为HTML方法.其他则直接添加
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface.ensureImplements(child, core.html.element.Element);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</tr>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();