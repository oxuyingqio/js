/**
 * Table
 * 
 * 表格
 * 
 * 类
 */

core.html.element.viewer.Table = (function() {

	// 对象个数
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            元素ID
	 */
	var Constructor = function(id) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Table.superClass.constructor.call(this, id || "coreHtmlElementViewerTable" + count);
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

	/**
	 * 添加子元素
	 * 
	 * @param children{core.html.element.Element}
	 *            形参,子元素
	 * @returns {core.html.element.viewer.Table}
	 */
	Constructor.prototype.add = function(children) {

		// 遍历参数
		for (var i = 0, length = arguments.length; i < length; i++) {

			// 待添加的子元素
			var child = arguments[i];
			// 判断是否实现元素接口
			core.lang.Interface.ensureImplements(child, core.html.element.Element,
					core.html.element.model.ElementProcess);

			// 若为Tr,则直接添加.
			if (child.constructor === core.html.element.viewer.Tr) {
				// 添加子元素
				this.getElements().push(child);
				// 若元素存在,则直接展示添加的子元素
				this.exist() && child.appendTo(this.getId());
			} else {
				// 待添加的子元素不为Tr,则创建一个Tr,放入Tr再添加
				var tr = new core.html.element.viewer.Tr();
				tr.add(child);
				this.add(tr);
			}
		}

		return this;
	};

	/**
	 * 转为HTML
	 * 
	 * @returns {String}
	 */
	Constructor.prototype.convertHtml = function() {

		// HTML元素
		var html = [];
		html.push("<table>");

		// 获取子元素集合
		var children = this.getChildren();
		// 遍历子元素集合,同时转为HTML
		for (var i = 0, length = children.length; i < length; i++) {
			html.push(children[i].convertHtml());
		}

		html.push("</table>");

		return html.join("");
	};

	return Constructor;
})();