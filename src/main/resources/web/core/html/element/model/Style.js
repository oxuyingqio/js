/**
 * @name	Style
 * @package	core.html.element.model
 * @desc	样式
 * @type	类
 * 
 * @constructor	core.html.element.model.Style()
 * 
 * @date	2016年8月22日 21:04:37
 */

core.html.element.model.Style = (function() {

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 宽度
		var width = null;
		// 高度
		var height = null;
		// 颜色
		var color = null;
		// 背景
		var background = null;

		/**
		 * 获取/设置 width
		 * 
		 * @param width{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.width = function() {

			switch (arguments.length) {
			case 0:
				return width;
			default:
				width = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 height
		 * 
		 * @param height{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.height = function() {

			switch (arguments.length) {
			case 0:
				return height;
			default:
				height = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 color
		 * 
		 * @param color{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.color = function() {

			switch (arguments.length) {
			case 0:
				return color;
			default:
				color = arguments[0];
				return this;
			}
		};

		/**
		 * 获取/设置 background
		 * 
		 * @param background{String}
		 * @returns {String}/{core.html.element.model.Style}
		 */
		this.background = function() {

			switch (arguments.length) {
			case 0:
				return background;
			default:
				background = arguments[0];
				return this;
			}
		};
	};

	/**
	 * 转为字符串
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.toString = function() {

		var str = [];
		// 宽度
		var width = this.width();
		width == null || str.push("width:" + width + ";");
		// 高度
		var height = this.height();
		height == null || str.push("height:" + height + ";");
		// 颜色
		var color = this.color();
		color == null || str.push("color:" + color + ";");
		// 背景
		var background = this.background();
		background == null || str.push("background:" + background + ";");

		return str.join("");
	};

	// 返回构造函数
	return Constructor;
})();