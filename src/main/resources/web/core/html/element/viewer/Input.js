/**
 * Input
 * 
 * 输入框
 * 
 * 抽象类
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            输入框ID
	 * @param name
	 *            输入框名称
	 */
	var Constructor = function(_id, _name) {

		// ID
		var id = _id;
		// name
		var name = _name || id;

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.getName = function() {
			return name;
		};

		this.setName = function(_name) {
			name = _name;
		}
	};

	/**
	 * 获取元素jQuery对象
	 * 
	 * @returns
	 */
	Constructor.prototype.getjQuery = function() {

		return $("#" + this.getId());
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Input.add:方法异常.输入框不允许继续添加子元素";
	};

	/**
	 * 移除子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.remove = function() {
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
	 * @returns {Array}
	 */
	Constructor.prototype.find = function() {

		return [];
	};

	return Constructor;
})();