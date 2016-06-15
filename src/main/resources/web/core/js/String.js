/**
 * String
 * 
 * 字符串
 * 
 * 类扩展
 */

/**
 * 替换所有字符串
 * 
 * @param target{String}
 *            目标字符串
 * @param result{String}
 *            待替换的字符串
 * @returns {String}
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 转为2进制字符串
 * 
 * @returns {String}
 */
String.prototype.toBinaryString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的2进制字符串
		var bs = this.charCodeAt(i).toString(2);
		// 不足8位,则在前面补0
		for (var j = bs.length; j < 8; j++) {

			rtnStr.push(0);
		}

		rtnStr.push(bs);
	}

	// 返回
	return rtnStr.join("");
};

/**
 * 转为16进制字符串
 * 
 * @returns {String}
 */
String.prototype.toHexString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历字符串所有字符
	for (var i = 0, length = this.length; i < length; i++) {

		// 获取对应字符的16进制字符串
		var hs = this.charCodeAt(i).toString(16);
		// 不足2位,则在前面补0
		for (var j = hs.length; j < 2; j++) {

			rtnStr.push(0);
		}

		rtnStr.push(hs);
	}

	// 返回
	return rtnStr.join("");
};