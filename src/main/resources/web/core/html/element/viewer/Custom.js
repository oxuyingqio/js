/**
 * Custom
 * 
 * 自定义元素,直接传入自定义HTML.
 * 
 * 类
 */

core.html.element.viewer.Custom = (function() {

	/**
	 * 构造函数
	 * 
	 * @param custom{String}
	 *            自定义HTML
	 */
	var Constructor = function(_custom) {

		// 自定义HTML
		var custom = _custom || "";

		/**
		 * 获取自定义HTML
		 * 
		 * @returns {String}
		 */
		this.getCustom = function() {
			return custom;
		};
	};

	/**
	 * 获取元素Id
	 * 
	 * @returns
	 */
	Constructor.prototype.getId = function() {
		throw "core.html.element.viewer.Custom.getId:方法异常.自定义元素无getId()方法实现";
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns
	 */
	Constructor.prototype.getjQuery = function() {
		throw "core.html.element.viewer.Custom.getjQuery:方法异常.自定义元素无getjQuery()方法实现";
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {
		throw "core.html.element.viewer.Custom.show:方法异常.自定义元素无show()方法实现";
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {
		throw "core.html.element.viewer.Custom.hide:方法异常.自定义元素无hide()方法实现";
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {
		throw "core.html.element.viewer.Custom.destroy:方法异常.自定义元素无destroy()方法实现";
	};

	/**
	 * 添加元素到
	 * 
	 * @param id{String}
	 *            添加到的Div ID
	 * @returns {core.html.element.viewer.Custom}
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();

		return this;
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Custom.add:方法异常.自定义元素不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
		throw "core.html.element.viewer.Custom.remove:方法异常.自定义元素无remove()方法实现";
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return [];
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data{Object}
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		return [];
	};

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		throw "core.html.element.viewer.Custom.exist:方法异常.自定义元素无exist()方法实现";
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		return this.getCustom();
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {
		throw "core.html.element.viewer.Custom.dealHtml:方法异常.自定义元素无dealHtml()方法实现";
	};

	return Constructor;
})();