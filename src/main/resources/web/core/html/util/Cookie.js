/**
 * @name	Cookie
 * @package core.html.util
 * @desc	Cookie操作
 * @type	类
 * 
 * @method	static					core.html.util.Cookie getInstance()								获取cookie操作
 * 			Object					get(String key)													获取cookie
 * 			core.html.util.Cookie	set(String key, String value, Number expireDays, String path) 	设置cookie
 * 			core.html.util.Cookie	del(String key)													删除cookie
 * 
 * @date 2017年8月8日 09:20:30
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
	 * @param key{String}
	 *            cookie键
	 * @returns {Object}
	 */
	Constructor.prototype.get = function(key) {

		// 正则表达式匹配cookie值
		var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");

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
	 * @param key{String}
	 *            cookie键
	 * @param value{String}
	 *            cookie值
	 * @param expireDays{Number}
	 *            过期天数
	 * @param path{String}
	 *            权限路径
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.set = function(key, value, expireDays, path) {

		// cookie字符串
		var cookieStr = [];

		// 添加key,value
		cookieStr.push(key + "=" + value + ";");

		// 判断是否存在过期天数
		if (expireDays) {

			// 当前时间
			var exp = new Date();
			// 设置过期时间
			exp.setTime(exp.getTime() + (expireDays * 24 * 60 * 60 * 1000));
			// 添加过期天数
			cookieStr.push("expires=" + exp.toGMTString() + ";");
		}

		//判断是否存在权限路径
		if (path) {

			// 添加权限路径
			cookieStr.push("path=" + path + ";");
		}

		// 设置cookie
		document.cookie = cookieStr.join(" ");

		return this;
	};

	/**
	 * 删除cookie
	 * 
	 * @param key{String}
	 *            cookie键
	 * @returns {core.html.util.Cookie}
	 */
	Constructor.prototype.del = function(key) {

		// 获取cookie值
		var value = this.get(key);

		// 不为空则设置超时时间
		if (value !== null) {

			// 获取当前时间
			var exp = new Date();
			// 设置当前时间前一毫秒
			exp.setTime(exp.getTime() - 1);
			// 设置cookie
			document.cookie = key + "=" + value + ";expires=" + exp.toGMTString();
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