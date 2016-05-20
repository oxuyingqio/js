// 全局Cookie对象
var Cookie = function() {
	/**
	 * 添加Cookie
	 * 
	 * @param name
	 * @param value
	 * @return
	 */
	this.set = function(name, value) {
		var day = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}

	/**
	 * 获取Cookie
	 * 
	 * @param name
	 * @return value
	 */
	this.get = function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if (arr = document.cookie.match(reg))
			return (arr[2]);
		else
			return null;
	}

	/**
	 * 删除Cookie
	 * 
	 * @param name
	 * @return
	 */
	this.del = function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}
