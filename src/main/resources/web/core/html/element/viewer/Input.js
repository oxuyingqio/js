/**
 * @name Input
 * @package core.html.element.viewer
 * @desc 输入控件
 * @type 类
 * 
 * @constructor core.html.element.viewer.Input(String id)
 * 
 * @extend core.html.element.AbstractElement
 * 
 * @date 2016年8月20日 11:56:33
 */

core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id);

		/**
		 * 类型
		 */
		var type = null;
		/**
		 * 名称
		 */
		var name = null;
		/**
		 * 值
		 */
		var value = null;

		/**
		 * 事件
		 */
		/**
		 * 改变事件
		 */
		var change = function() {

		};

		/**
		 * 获取/设置类型
		 * 
		 * @param type
		 */
		this.type = function() {

			switch (arguments.length) {
			case 0:
				return type;
			default:
				type = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置名称
		 * 
		 * @param name
		 */
		this.name = function() {

			switch (arguments.length) {
			case 0:
				return name;
			default:
				name = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置值
		 * 
		 * @param value
		 */
		this.value = function() {

			switch (arguments.length) {
			case 0:
				return value;
			default:
				value = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置改变事件
		 * 
		 * @param change
		 */
		this.change = function() {

			switch (arguments.length) {
			case 0:
				return change;
			default:
				change = arguments[0];
				return this;
			}
		};
	}
	// 继承HTML元素公共抽象实现
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Input HTML
		html.push("<input ");
		html.push("id='" + this.id() + "' ");
		this.clazz() === null || html.push("class='" + this.clazz() + "' ");
		this.style() === null || html.push("style='" + this.style().toString() + "' ");
		this.type() === null || html.push("type='" + this.type() + "' ");
		this.name() === null || html.push("name='" + this.name() + "' ");
		this.value() === null || html.push("value='" + this.value() + "' ");
		html.push("/>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();