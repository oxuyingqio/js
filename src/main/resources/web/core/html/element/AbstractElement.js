/**
 * @name AbstractElement
 * @package core.html.element
 * @desc HTML元素公共抽象实现
 * @type 抽象类
 * 
 * @date 2016年8月20日 11:34:27
 */

core.html.element.AbstractElement = (function() {

	/**
	 * 对象个数
	 */
	var count = 0;

	/**
	 * 构造函数
	 * 
	 * @param id{String}
	 *            ID
	 */
	var Constructor = function(_id) {

		// 对象个数+1
		count++;

		/**
		 * 元素是否在HTML中存在
		 */
		this.exist = false;

		/**
		 * ID
		 */
		var id = _id || "coreHtmlElementAbstractElement" + count;

		/**
		 * 获取ID
		 * 
		 * @returns {String}
		 */
		this.getId = function() {

			return id;
		};

		/**
		 * 设置ID
		 * 
		 * @param id{String}
		 * @returns {core.html.element.AbstractElement}
		 */
		this.setId = function(_id) {

			id = _id;

			return this;
		}
	};

	/**
	 * 显示元素
	 * 
	 * @returns
	 */
	Constructor.prototype.show = function(target) {

		if (this.exist) {

			$("#" + this.getId()).show();
		} else {

			this.exist = true;
			$("body").append(this.convertHtml());
		}
	}

	/**
	 * 隐藏元素
	 * 
	 * @returns
	 */
	Constructor.prototype.hide = function(target) {

		if (!this.exist) {

			this.exist = true;
			$("body").append(this.convertHtml());
		}

		$("#" + this.getId()).hide();
	}

	/**
	 * 添加至
	 * 
	 * @param target{String}
	 *            目标位置
	 * @returns
	 */
	Constructor.prototype.appendTo = function(target) {

		// 判断是否存在
		if (this.exist) {

			$("#" + this.getId()).appendTo(target);
		} else {

			this.exist = true;
			$(target).append(this.convertHtml());
		}

		return this;
	}

	// 返回构造函数
	return Constructor;
})();