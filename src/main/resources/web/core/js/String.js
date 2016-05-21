// String对象扩展

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