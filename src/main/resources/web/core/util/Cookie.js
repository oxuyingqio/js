/**
 * Cookie
 * 
 * Cookie操作
 * 
 * 对象
 */

core.util.Cookie = (function() {

	// cookie操作对象
	var cookie;

	// 构造函数
	var Constructor = function() {

	}

	/**
	 * 获取cookie
	 * 
	 * @param name
	 *            cookie名称
	 * @returns
	 */
	Constructor.prototype.get = function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if (arr = document.cookie.match(reg))
			return (arr[2]);
		else
			return null;
	}

	/**
	 * 设置cookie
	 * 
	 * @param name
	 *            名称
	 * @param value
	 *            值
	 * @param expiredays
	 *            过期天数
	 */
	Constructor.prototype.set = function(name, value, expiredays) {
		// 过期天数不存在,则默认7天
		var day = expiredays == null ? 7 : expiredays;
		// 当前时间
		var exp = new Date()
		// 设置过期时间
		exp.setDate(exp.getDate() + day * 24 * 60 * 60 * 1000);
		// 设置cookie
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}

	/**
	 * 删除cookie
	 * 
	 * @param name
	 *            名称
	 */
	Constructor.prototype.del = function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}

	return {
		getCookie : function() {
			// 懒加载,调用时才创建,同时仅创建一个
			if (!cookie) {
				cookie = new Constructor();
			}

			return cookie;
		}
	}
})();
