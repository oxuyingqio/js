/**
 * Fieldset
 * 
 * 控件组
 * 
 * 类
 */

core.html.element.viewer.Fieldset = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id
	 *            元素ID
	 * @param legend
	 *            legend
	 */
	var Constructor = function(_id, _legend) {

		// 对象个数+1
		count++;

		// ID
		var id = _id || "coreHtmlElementViewerFieldset" + count;
		// legend
		var legend = _legend || "";

		// 子元素
		var elements = [];

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

		this.getLegend = function() {
			return legend;
		};

		this.setLegend = function(_legend) {
			legend = _legend;
		};

		this.getElements = function() {
			return elements;
		};
	};

	/**
	 * 展示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function() {

		// 元素的jQuery对象
		var $fieldset = $("#" + this.getId());

		// 不存在则添加,存在则展示
		if ($fieldset.length === 0) {
			$("body").append(this.convertHtml());
			this.dealHtml();
		} else {
			$fieldset.show();
		}
	};

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function() {

		// 元素的jQuery对象
		var $fieldset = $("#" + this.getId());
		$fieldset.hide();
	};

	/**
	 * 销毁元素
	 * 
	 * @returns
	 */
	Constructor.prototype.destroy = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时移除子元素
		for (var i = 0, length = children.length; i < length; i++) {
			this.remove(children[i]);
		}

		// 销毁元素
		var $fieldset = $("#" + this.getId());
		$fieldset.remove();
	};

	/**
	 * 添加子元素
	 * 
	 * @param children
	 *            形参,子元素
	 * @returns
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {
			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 添加子元素
			this.getElements().push(child);
		}
	};

	/**
	 * 移除子元素
	 * 
	 * @param removeChild
	 *            待移除的子元素
	 * @returns
	 */
	Constructor.prototype.remove = function(removeChild) {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			// 若为该子元素,则移除并销毁.否则继续查找子元素的子元素
			if (child === removeChild) {
				// 删除子元素
				this.getElements().remove(child);
				// 调用子元素销毁方法
				child.destroy();
			} else {
				child.remove(removeChild);
			}
		}
	};

	/**
	 * 检索子元素集合
	 * 
	 * @param data
	 *            查找数据
	 * @returns {Array}
	 */
	Constructor.prototype.find = function(data) {

		// 查找的结果
		var result = [];

		// 查找的类型
		var type = typeof (data);

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合
		for (var i = 0, length = children.length; i < length; i++) {
			// 子元素
			var child = children[i];

			switch (type) {
			case "function":
				child.constructor === data && result.push(child);
				break;
			case "object":
				child === data && result.push(child);
				break;
			case "string":
				child.getId() === data && result.push(child);
				break;
			}

			// 继续查找子元素的子元素
			var childChildren = child.find(data);
			if (childChildren.length > 0) {
				result = result.concat(childChildren);
			}
		}

		return result;
	};

	/**
	 * 转换为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<fieldset id='");
		html.push(this.getId());
		html.push("'>");
		html.push("<legend>");
		html.push(this.getLegend());
		html.push("</legend>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</fieldset>");

		return html.join("");
	};

	/**
	 * 处理HTML
	 * 
	 * @returns
	 */
	Constructor.prototype.dealHtml = function() {

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时处理HTML
		for (var i = 0, length = children.length; i < length; i++) {
			children[i].dealHtml();
		}
	};

	/**
	 * 获取子元素集合
	 * 
	 * @returns {Array}
	 */
	Constructor.prototype.getChildren = function() {

		return this.getElements();
	};

	return Constructor;
})();