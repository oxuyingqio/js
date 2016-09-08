/**
 * @name	Warning
 * @package	core.lang
 * @desc	警告
 * @type	类
 * 
 * @constructor core.lang.Warning(Object _this, String msg...)
 * 
 * @date	2016年9月8日 10:20:53
 */

/**
 * 构造函数
 * 
 * @param _this{Object}
 *            警告对象
 */
core.lang.Warning = function(_this) {

	// 警告信息
	var msg = [];
	// 遍历参数
	for (var i = 1, length = arguments.length; i < length; i++) {
		msg.push(arguments[i]);
		msg.push(" ");
	}

	// 打印信息
	if (window.console && window.console.warn) {
		window.console.warn(_this);
		window.console.warn(msg.join(""));
	}
};