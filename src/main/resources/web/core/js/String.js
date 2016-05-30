/**
 * String
 * 
 * 字符串
 * 
 * 对象扩展
 */

/**
 * 替换所有字符串
 * 
 * @param target
 *            目标字符
 * @param result
 *            替换字符
 * @returns
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 字符串转2进制
 * 
 * @returns
 */
String.prototype.toBinaryString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历每一个字符
	for (var i = 0, length = this.length; i < length; i++) {
		// 获取对应字符的2进制
		var bs = this.charCodeAt(i).toString(2);

		// 不足8位的补0
		for (var j = bs.length; j < 8; j++) {
			rtnStr.push(0);
		}

		rtnStr.push(bs);
	}

	// 返回
	return rtnStr.join("");
}

/**
 * 字符串转16进制
 * 
 * @returns
 */
String.prototype.toHexString = function() {

	// 返回的字符串
	var rtnStr = [];

	// 遍历每一个字符
	for (var i = 0, length = this.length; i < length; i++) {
		// 获取对应字符的16进制
		var hs = this.charCodeAt(i).toString(16);

		// 不足2位的补0
		for (var j = hs.length; j < 2; j++) {
			rtnStr.push(0);
		}

		rtnStr.push(hs);
	}

	// 返回
	return rtnStr.join("");
}