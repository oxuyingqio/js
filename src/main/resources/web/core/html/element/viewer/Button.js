/**
 * Button
 * 
 * 按钮
 * 
 * 类
 */

core.html.element.viewer.Button = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param type
	 *            按钮类型
	 */
	var Constructor = function(_id, _type) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerButton" + count;
		// 类型
		var type = _type || core.html.element.model.ButtonType.button;
		// 配置项
		var config = {};

		// 按钮
		var button = core.html.element.controller.ButtonCreator.getButton(type);
		if (button === undefined) {
			throw "core.html.element.viewer.Button:构造参数异常.类型(" + type + ")暂不支持";
		}

		/**
		 * 获取元素ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {
			return id;
		};

		this.setId = function(_id) {
			id = _id;
		};

		this.getType = function() {
			return type;
		};

		this.setType = function(_type) {
			type = _type;
		};

		this.getConfig = function() {
			return config;
		};

		this.setConfig = function(_config) {
			config = _config;
		};

		this.getButton = function() {
			return button;
		};
	};

	/**
	 * 添加元素到
	 * 
	 * @param id
	 *            添加到的位置
	 * @returns
	 */
	Constructor.prototype.appendTo = function(id) {

		$(id === "body" ? id : "#" + id).append(this.convertHtml());
		this.dealHtml();
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.show(id, config);
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.hide(id, config);
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.destroy(id, config);
	};

	/**
	 * 添加子元素
	 * 
	 * @returns
	 */
	Constructor.prototype.add = function() {
		throw "core.html.element.viewer.Button.add:方法异常.按钮不允许继续添加子元素";
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

	/**
	 * 元素是否存在
	 * 
	 * @returns {Boolean}
	 */
	Constructor.prototype.exist = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.exist(id, config);
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		return button.convertHtml(id, config);
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取按钮
		var button = this.getButton();
		// ID
		var id = this.getId();
		// 配置项
		var config = this.getConfig();

		button.dealHtml(id, config);
	};

	return Constructor;
})();