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
	var Constructor = function(_id, _text) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerLabel" + count;
		// 文本
		var text = _text;
		// for
		var forr;
		// form
		var form;

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

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

	/**
	 * 添加元素到
	 * 
	 * @param id
	 *            添加到的位置
	 * @returns
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());
		$label.show();
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());
		$label.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 元素的jQuery对象
		var $label = $("#" + this.getId());
		$label.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Label.add:方法异常.标签不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
	};

	/**
	 * 检索子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		var $label = $("#" + this.getId());
		return ($label.length !== 0);
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

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	return Constructor;
})();