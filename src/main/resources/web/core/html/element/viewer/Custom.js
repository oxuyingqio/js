/**
 * Custom
 * 
 * 自定义元素,直接传入自定义HTML.自定义不允许增加子元素
 * 
 * 类
 */

core.html.element.viewer.Custom = (function() {

	/**
	 * 构造函数
	 * 
	 * @param custom
	 *            自定义HTML
	 */
	var Constructor = function(_custom) {

		// 自定义HTML
		var custom = _custom || "";

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

		return undefined;
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns
	 */
	Constructor.prototype.getjQuery = function() {

		return undefined;
	};

	/**
	 * 展示元素
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.show = function() {

		// 返回本身,以便链式调用
		return this;
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.hide = function() {

		// 返回本身,以便链式调用
		return this;
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

	};

	/**
	 * 添加元素到
	 * 
	 * @param id
	 *            添加到的位置
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();

		// 返回本身,以便链式调用
		return this;
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Custom.add:方法异常.自定义HTML不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.remove = function() {

		// 返回本身,以便链式调用
		return this;
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
	 * @param data
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

		return undefined;
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

	};

	return Constructor;
})();