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
	 * @param id{String}
	 *            输入框ID
	 * @param name{String}
	 *            输入框名称
	 */
	var Constructor = function(id, _name) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id || "coreHtmlElementViewerInput" + count);

		// name
		var name = _name || id || "coreHtmlElementViewerInput" + count;

		/**
		 * 获取输入框名称
		 * 
		 * @returns {String}
		 */
		this.getName = function() {
			return name;
		};

		/**
		 * 设置输入框名称
		 * 
		 * @param name{String}
		 *            输入框名称
		 * @returns {core.html.element.viewer.Input}
		 */
		this.setName = function(_name) {
			name = _name;
			return this;
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
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Input.dealHtml:方法未实现."
	};

	/**
	 * 获取输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.getValue = function() {
		throw "core.html.element.viewer.Input.getValue:方法未实现."
	};

	/**
	 * 设置输入框的值-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.setValue = function() {
		throw "core.html.element.viewer.Input.setValue:方法未实现."
	};

	return Constructor;
})();