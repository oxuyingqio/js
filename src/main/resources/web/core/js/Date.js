/**
 * Date
 * 
 * 日期
 * 
 * 对象扩展
 */

/**
 * 格式化日期
 * 
 * @param fmt
 *            格式 yyyy-MM-dd HH:mm:ss
 * @returns {String}
 */
Date.prototype.format = function(fmt) {

	var obj = {

		// 月份
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 小时
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 小时
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for ( var el in obj) {

		if (new RegExp("(" + el + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[el]) : (("00" + obj[el])
					.substr(("" + obj[el]).length)));
		}
	}

	return fmt;
};