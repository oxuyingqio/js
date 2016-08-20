/**
 * Button
 * 
 * 基础按钮
 * 
 * 类
 */

core.html.element.viewer.button.Button = (function() {

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
		core.html.element.viewer.button.Button.superClass.constructor.call(this, id
				|| "coreHtmlElementViewerButtonButton" + count);

		// text
		var text = "";

		/**
		 * 获取按钮文本
		 * 
		 * @returns {String}
		 */
		this.getText = function() {
			return text;
		};

		/**
		 * 设置按钮文本
		 * 
		 * @param text{String}
		 *            按钮文本
		 * @returns {core.html.element.viewer.button.Button}
		 */
		this.setText = function(_text) {
			text = _text;
			return this;
		};
	};
	// 继承按钮抽象类
	core.lang.Class.extend(Constructor, core.html.element.viewer.Button);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<button id='");
		html.push(this.getId());
		html.push("'>");
		html.push(this.getText());
		html.push("</button>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns {core.html.element.viewer.button.Button}
	 */
	Constructor.prototype.dealHtml = function() {

		return this;
	};

	return Constructor;
})();
