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
	 * @param id{String}
	 *            元素ID
	 * @param text{String}
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

		/**
		 * 获取文本信息
		 * 
		 * @returns {String}
		 */
		this.getText = function() {
			return text;
		};

		/**
		 * 设置文本信息
		 * 
		 * @param text{String}
		 *            文本信息
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setText = function(_text) {
			text = _text;
			return this;
		};

		/**
		 * 获取For属性值
		 * 
		 * @returns {String}
		 */
		this.getFor = function() {
			return forr;
		};

		/**
		 * 设置For属性值
		 * 
		 * @param for{String}
		 *            for属性值
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setFor = function(_forr) {
			forr = _forr
			return this;
		};

		/**
		 * 获取form属性值
		 * 
		 * @returns {String}
		 */
		this.getForm = function() {
			return form;
		};

		/**
		 * 设置form属性值
		 * 
		 * @param form{String}
		 *            form属性值
		 * @returns {core.html.element.viewer.Label}
		 */
		this.setForm = function(_form) {
			form = _form;
			return this;
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