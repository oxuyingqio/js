/**
 * Form
 * 
 * 表单
 * 
 * 类
 */

core.html.element.viewer.Form = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param method
	 *            表单的提交方式
	 * @param action
	 *            表单的提交地址
	 */
	var Constructor = function(id, _method, _action) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Form.superClass.constructor.call(this, id || "coreHtmlElementViewerForm" + count);

		// method
		var method = _method || "post";
		// action
		var action = _action || "";

		this.getMethod = function() {
			return method;
		};

		this.setMethod = function(_method) {
			method = _method;
		};

		this.getAction = function() {
			return action;
		};

		this.setAction = function(_action) {
			action = _action;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 转换为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<form id='");
		html.push(this.getId());
		html.push("' method='");
		html.push(this.getMethod());
		html.push("' action='");
		html.push(this.getAction());
		html.push("' enctype='multipart/form-data'>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</form>");

		return html.join("");
	};

	return Constructor;
})();