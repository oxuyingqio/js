/**
 * @name	Input
 * @package	core.html.element.viewer
 * @desc	输入控件
 * @type	类
 * 
 * @constructor	core.html.element.viewer.Input(String id)
 * 
 * @method	继承core.html.element.AbstractElement所有方法
 * 
 * @date	2016年8月20日 11:56:33
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