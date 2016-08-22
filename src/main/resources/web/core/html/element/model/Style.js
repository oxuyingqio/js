/**
 * @name Style
 * @package core.html.element.model
 * @desc 样式
 * @type 类
 * 
 * @date 2016年8月22日 21:04:37
 */

core.html.element.model.Style = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 宽度
		var width;
		// 高度
		var height;
		// 颜色
		var color;
		// 背景
		var background;

		/**
		 * 获取宽度
		 * 
		 * @returns
		 */
		this.getWidth = function() {

			return width;
		};

		/**
		 * 设置宽度
		 * 
		 * @param width
		 * @returns {core.html.element.model.Style}
		 */
		this.setWidth = function(_width) {

			width = _width;

			return this;
		};

		/**
		 * 获取高度
		 * 
		 * @returns
		 */
		this.getHeight = function() {

			return height;
		};

		/**
		 * 设置高度
		 * 
		 * @param height
		 * @returns {core.html.element.model.Style}
		 */
		this.setHeight = function(_height) {

			height = _height;

			return this;
		};

		/**
		 * 获取颜色
		 * 
		 * @returns
		 */
		this.getColor = function() {

			return color;
		};

		/**
		 * 设置颜色
		 * 
		 * @param color
		 * @returns {core.html.element.model.Style}
		 */
		this.setColor = function(_color) {

			color = _color;

			return this;
		};

		/**
		 * 获取背景
		 * 
		 * @returns
		 */
		this.getBackground = function() {

			return background;
		};

		/**
		 * 设置背景
		 * 
		 * @param background
		 * @returns {core.html.element.model.Style}
		 */
		this.setBackground = function(_background) {

			background = _background;

			return this;
		};
	};

	// 返回构造函数
	return Construtor;
})();