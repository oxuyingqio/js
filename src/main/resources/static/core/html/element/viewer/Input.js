/**
 * @name	Input
 * @package	core.html.element.viewer
 * @desc	输入控件
 * @type	类
 * 
 * @constructor core.html.element.viewer.Input(string id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2018年5月10日 14:24:01
 */
core.html.element.viewer.Input = (function() {

	/**
	 * 构造函数
	 * 
	 * @param id{string}
	 *            ID
	 */
	var Constructor = function(id) {

		// 调用父类构造
		core.html.element.viewer.Input.superClass.constructor.call(this, id);

		/**
		 * 类型
		 */
		var type;
		/**
		 * 名称
		 */
		var name;
		/**
		 * 值
		 */
		var value;

		/**
		 * 获取/设置类型
		 * 
		 * @param type{string}
		 * @returns {string/core.html.element.viewer.Input}
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
		 * @param name{string}
		 * @returns {string/core.html.element.viewer.Input}
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
		 * @param value{string}
		 * @returns {string/core.html.element.viewer.Input}
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
	}
	// 继承父类
	core.lang.Class.extend(Constructor, core.html.element.AbstractElement);

	/**
	 * 转为HTML
	 * 
	 * @returns {string}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML
		var html = [];

		// Input HTML
		html.push("<input ");
		html.push("id='" + this.id() + "' ");
		this.title() && html.push("title='" + this.title() + "' ");
		this.clazz() && html.push("class='" + this.clazz() + "' ");
		this.style() && html.push("style='" + this.style() + "' ");
		this.type() && html.push("type='" + this.type() + "' ");
		this.name() && html.push("name='" + this.name() + "' ");
		this.value() && html.push("value='" + this.value() + "' ");
		html.push("/>");

		return html.join("");
	}

	// 返回构造函数
	return Constructor;
})();