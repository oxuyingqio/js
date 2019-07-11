/**
 * @name	String
 * @package	core.js
 * @desc	字符串
 * @type	类扩展
 * 
 * @method	string	replaceAll(string target, string result)	替换所有字符串
 * 			string	toBinaryString()							转为2进制字符串
 * 			string	toHexString()								转为16进制字符串
 * 
 * @date	2016年8月20日 09:38:33
 */

/**
 * 替换所有字符串
 * 
 * @param target{string}
 *            目标字符串
 * @param result{string}
 *            待替换的字符串
 * @returns {string}
 */
String.prototype.replaceAll = function(target, result) {

	return this.replace(new RegExp(target, "g"), result);
};

/**
 * 转为2进制字符串
 * 
 * @returns {string}
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
 * @returns {string}
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