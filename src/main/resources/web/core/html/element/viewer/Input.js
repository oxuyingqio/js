/**
 * @name	Input
 * @package	core.html.element.viewer
 * @desc	输入控件
 * @type	类
 * 
 * @constructor core.html.element.viewer.Input(String id)
 * 
 * @extend	core.html.element.AbstractElement
 * 
 * @date	2016年8月20日 11:56:33
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
		this.title() || html.push("title='" + this.title() + "' ");
		this.clazz() || html.push("class='" + this.clazz() + "' ");
		this.style() || html.push("style='" + this.style().toString() + "' ");
		this.type() || html.push("type='" + this.type() + "' ");
		this.name() || html.push("name='" + this.name() + "' ");
		this.value() || html.push("value='" + this.value() + "' ");
		html.push("/>");

		return html.join("");
	}

	/**
	 * 装载成功
	 * 
	 * @returns {core.html.element.Element}
	 */
	Constructor.prototype.loadSucess = function() {

		// 调用装载事件
		this.load()(this);
		// 装载单击事件
		this.click() || $("#" + this.id()).click(this.click());
		// 装载改变事件
		this.change() || $("#" + this.id()).change(this.change());

		// 获取子元素
		var children = this.getChildren();
		// 遍历子元素
		for (var i = 0, length = children.length; i < length; i++) {

			// 子元素
			var child = children[i];
			// 若子元素为元素对象,则调用其销毁方法
			if (child instanceof core.html.element.AbstractElement) {

				// 判断是否实现元素接口
				core.lang.Interface
						.ensureImplements(child, core.html.element.Element, core.html.element.ElementProcess);
				// 调用装载成功函数
				child.loadSucess();
			}
		}
	}

	// 返回构造函数
	return Constructor;
})();