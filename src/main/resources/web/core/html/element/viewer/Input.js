/**
 * @name Input
 * @package core.html.element.viewer
 * @desc 输入控件
 * @type 类
 * 
 * @constructor core.html.element.viewer.Input(String id)
 * 
 * @extend core.html.element.AbstractElement
 * 
 * @date 2016年8月20日 11:56:33
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id);

		/**
		 * name属性
		 */
		var name;

		/**
		 * 获取/设置name属性
		 * 
		 * @param name
		 */
		this.name = function() {

			switch (arguments.length) {
			case 0:
				return name;
			default:
				name = arguments[0];
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

		// Input HTML
		html.push("<input ");
		html.push("id='" + this.id() + "' ");
		html.push("name='" + this.name() + "' ");
		// class
		var clazz = this.clazz();
		clazz === null || html.push("class='" + clazz + "' ");
		// style
		var style = this.style();
		style === null || html.push("style='" + style.toString() + "' ");
		html.push("/>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();