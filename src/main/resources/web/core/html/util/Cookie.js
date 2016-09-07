/**
 * @name	Cookie
 * @package core.html.util
 * @desc	Cookie操作
 * @type	类
 * 
 * @method	static					core.html.util.Cookie getInstance()					获取cookie操作
 * 			Object					get(String name)									获取cookie
 * 			core.html.util.Cookie	set(String name, String value)						设置cookie
 * 			core.html.util.Cookie	set(String name, String value, Number expiredays)	设置cookie
 * 			core.html.util.Cookie	del(String name)									删除cookie
 * 
 * @date	2016年8月20日 09:53:30
 */

core.html.util.Cookie = (function() {

	/**
	 * cookie操作
	 */
	var cookie;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 获取cookie
	 * 
	 * @param name{String}
	 *            cookie名称
	 * @returns {Object}
	 */
	Constructor.prototype.get = function(name) {

		// 正则表达式匹配cookie值
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		// 返回cookie值
		if (arr = document.cookie.match(reg)) {
			return (arr[2]);
		} else {
			return null;
		}
	};

	/**
	 * 设置cookie
	 * 
	 * @param name{String}
	 *            cookie名称
	 * @param value{String}
	 *            cookie值
	 * @param expiredays{Number}
	 *            过期天数
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.set = function(name, value, expiredays) {

		// 过期天数不存在,则默认7天
		var day = expiredays === undefined ? 7 : expiredays;
		// 当前时间
		var exp = new Date();
		// 设置过期时间
		exp.setDate(exp.getDate() + (day * 24 * 60 * 60 * 1000));
		// 设置cookie
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

		return this;
	};

	/**
	 * 删除cookie
	 * 
	 * @param name{String}
	 *            cookie名称
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.del = function(name) {

		// 获取当前时间
		var exp = new Date();
		// 设置当前时间前一毫秒
		exp.setTime(exp.getTime() - 1);
		// 获取cookie
		var cval = this.get(name);
		// 不为空则设置超时时间
		if (cval !== null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}

		return this;
	};

	return {

		/**
		 * 获取cookie操作
		 * 
		 * @returns {core.html.util.Cookie}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!cookie) {
				cookie = new Constructor();
			}

			return cookie;
		}
	};
})();