/**
 * Date
 * 
 * 日期
 * 
 * 类扩展
 */

/**
 * 格式化日期
 * 
 * @param format{String}
 *            格式化参数
 * @returns {String}
 */
Date.prototype.format = function(format) {

	// 日期数据
	var data = {

		// 月份
		"M+" : this.getMonth() + 1,
		// 日
		"d+" : this.getDate(),
		// 小时,12进制
		"h+" : this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
		// 小时,24进制
		"H+" : this.getHours(),
		// 分
		"m+" : this.getMinutes(),
		// 秒
		"s+" : this.getSeconds(),
		// 毫秒
		"S" : this.getMilliseconds()
	};

	// 处理年份
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	// 处理月 日 时 分 秒 毫秒
	for ( var el in data) {

		if (new RegExp("(" + el + ")").test(format)) {
			format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (data[el]) : (("00" + data[el])
					.substr(("" + data[el]).length)));
		}
	}

	return format;
};