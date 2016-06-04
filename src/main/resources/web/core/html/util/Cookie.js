/**
 * Cookie
 * 
 * Cookie操作
 * 
 * 对象
 */

core.html.util.Cookie = (function() {

	// cookie操作者
	var cookie;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 获取cookie
	 * 
	 * @param name
	 *            cookie名称
	 * @returns {Object}
	 */
	Constructor.prototype.get = function(name) {

		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if (arr = document.cookie.match(reg)) {
			return (arr[2]);
		} else {
			return null;
		}
	};

	/**
	 * 设置cookie
	 * 
	 * @param name
	 *            名称
	 * @param value
	 *            值
	 * @param expiredays
	 *            过期天数
	 * @returns
	 */
	Constructor.prototype.set = function(name, value, expiredays) {

		// 过期天数不存在,则默认7天
		var day = expiredays === null ? 7 : expiredays;
		// 当前时间
		var exp = new Date();
		// 设置过期时间
		exp.setDate(exp.getDate() + day * 24 * 60 * 60 * 1000);
		// 设置cookie
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	};

	/**
	 * 删除cookie
	 * 
	 * @param name
	 *            名称
	 * @returns
	 */
	Constructor.prototype.del = function(name) {

		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval !== null) {
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
	};

	return {

		/**
		 * 获取cookie操作者 懒加载,且仅创建一个
		 */
		getCookie : function() {

			// 不存在,则创建
			if (!cookie) {
				cookie = new Constructor();
			}

			return cookie;
		}
	};
})();