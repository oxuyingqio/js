/**
 * Button
 * 
 * 按钮
 * 
 * 抽象类
 */

core.html.element.viewer.Button = (function() {

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
		core.html.element.viewer.Button.superClass.constructor.call(this, id || "coreHtmlElementViewerButton" + count);
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Button.add:方法异常.按钮不允许继续添加子元素";
	};

	/**
	 * 转为HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.convertHtml = function() {
		throw "core.html.element.viewer.Button.convertHtml:方法未实现."
	};

	/**
	 * 处理HTML-抽象方法
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Button.dealHtml:方法未实现."
	};

	return Constructor;
})();