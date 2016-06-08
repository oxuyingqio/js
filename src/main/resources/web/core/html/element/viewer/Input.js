/**
 * Input
 * 
 * 输入框
 * 
 * 抽象类
 */

core.html.element.viewer.Input = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            输入框ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(id, _name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id || "coreHtmlElementViewerInput" + count);

		// name
		var name = _name || id || "coreHtmlElementViewerInput" + count;

		this.getName = function() {
			return name;
		};

		this.setName = function(_name) {
			name = _name;
		}
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Input.add:方法异常.输入框不允许继续添加子元素";
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<input id='");
		html.push(this.getId());
		html.push("' name='");
		html.push(this.getName());
		html.push("' />");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		// 抽象方法
	};

	/**
	 * 获取输入框的值
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.getValue = function() {
		// 抽象方法
	};

	/**
	 * 设置输入框的值
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function() {
		// 抽象方法
	};

	return Constructor;
})();