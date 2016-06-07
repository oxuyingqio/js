/**
 * Label
 * 
 * 标签
 * 
 * 类
 */

core.html.element.viewer.Label = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param text
	 *            标签的文本信息
	 */
	var Constructor = function(id, _text) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Label.superClass.constructor.call(this, id || "coreHtmlElementViewerLabel" + count);

		// 文本
		var text = _text || "";
		// for
		var forr;
		// form
		var form;

		this.getText = function() {
			return text;
		};

		this.setText = function(_text) {
			text = _text;
		};

		this.getFor = function() {
			return forr;
		};

		this.setFor = function(_forr) {
			forr = _forr
		};

		this.getForm = function() {
			return form;
		};

		this.setForm = function(_form) {
			form = _form;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Label.add:方法异常.标签不允许继续添加子元素";
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<label id='");
		html.push(this.getId());
		html.push("' for='");
		html.push(this.getFor());
		html.push("' form='");
		html.push(this.getForm());
		html.push("'>");
		html.push(this.getText());
		html.push("</label>");

		return html.join("");
	};

	return Constructor;
})();