/**
 * @name	Form
 * @package	core.html.element.viewer
 * @desc	供用户输入的 HTML 表单
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Form(String id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2017年6月14日 15:14:22
 */

core.html.element.viewer.Form = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Form.superClass.constructor.call(this, id);

		/**
		 * 提交方式
		 */
		var method = null;
		/**
		 * 编码方式
		 */
		var enctype = null;

		/**
		 * 获取/设置提交方式
		 * 
		 * @param method
		 */
		this.method = function() {

			switch (arguments.length) {
			case 0:
				return method;
			default:
				method = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置编码方式
		 * 
		 * @param enctype
		 */
		this.enctype = function() {

			switch (arguments.length) {
			case 0:
				return enctype;
			default:
				enctype = arguments[0];
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

		// Form HTML
		html.push("<form ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style().toString() + "' ");
		this.method() && html.push("method='" + this.method() + "' ");
		this.enctype() && html.push("enctype='" + this.enctype() + "' ");
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

		html.push("</form>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();