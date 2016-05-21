// String对象扩展

/**
 * 替换所有字符串
 * 
 * @param target
 *            目标
 * @param result
 *            结果
 * @returns
 */
String.prototype.replaceAll = function(target, result) {
	return this.replace(new RegExp(target, "g"), result);
}