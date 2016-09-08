/**
 * @name	A
 * @package	core.html.element.viewer
 * @desc	锚
 * @type	类
 * 
 * @constructor	core.html.element.viewer.A(String id)
 * 
 * @method	继承core.html.element.AbstractElement所有方法
 * 
 * @date	2016年8月24日 10:51:28
 */

core.html.element.viewer.A = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.A.superClass.constructor.call(this, id);
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// A HTML
		html.push("<a ");
		html.push("id='" + this.id() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
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
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				html.push(child.convertHtml());
			} else {

				html.push(child);
			}
		}

		html.push("</a>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();