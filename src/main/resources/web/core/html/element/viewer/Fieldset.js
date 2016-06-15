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
	 * @param id{String}
	 *            元素ID
	 * @param legend{String}
	 *            legend
	 */
	var Constructor = function(id, _legend) {

		// 对象个数+1
		count++;

		// 调用父类构造
		core.html.element.viewer.Fieldset.superClass.constructor.call(this, id || "coreHtmlElementViewerFieldset"
				+ count);

		// legend
		var legend = _legend || "";

		/**
		 * 获取legend属性值
		 * 
		 * @returns {String}
		 */
		this.getLegend = function() {
			return legend;
		};

		/**
		 * 设置legend属性值
		 * 
		 * @param legend{String}
		 *            legend属性值
		 * @returns {core.html.element.viewer.Fieldset}
		 */
		this.setLegend = function(_legend) {
			legend = _legend;
			return this;
		};
	};
	// 继承元素抽象类
	core.lang.Class.extend(Constructor, core.html.element.model.Element);

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

	return Constructor;
})();