/**
 * @name	Label
 * @package core.html.element.viewer
 * @desc	input 元素的标注
 * @type	类
 * 
 * @constructor core.html.element.viewer.Label(String id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2016年8月20日 11:56:33
 */

core.html.element.viewer.Label = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Label.superClass.constructor.call(this, id);

		/**
		 * 指定标注
		 */
		var forAttr = null;

		/**
		 * 获取/设置指定标注
		 * 
		 * @param formId
		 */
		this.forAttr = function() {

			switch (arguments.length) {
			case 0:
				return forAttr;
			default:
				forAttr = arguments[0];
				return this;
			}
		};
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

		// Label HTML
		html.push("<label ");
		html.push("id='" + this.id() + "' ");
		this.title() || html.push("title='" + this.title() + "' ");
		this.clazz() || html.push("class='" + this.clazz() + "' ");
		this.style() || html.push("style='" + this.style().toString() + "' ");
		this.forAttr() || html.push("for='" + this.forAttr() + "' ");
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

		html.push("</label>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();