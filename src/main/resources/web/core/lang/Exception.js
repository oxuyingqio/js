/**
 * @name	Exception
 * @package	core.lang
 * @desc	异常
 * @type	类
 * 
 * @constructor core.lang.Exception(Object _this, String msg...)
 * 
 * @date	2016年8月20日 09:32:06
 */

/**
 * 构造函数
 * 
 * @param _this{Object}
 *            异常对象
 */
core.lang.Exception = function(_this) {

	// 异常信息
	var msg = [];
	// 遍历参数
	for (var i = 1, length = arguments.length; i < length; i++) {
		msg.push(arguments[i]);
		msg.push(" ");
	}

	// 打印信息
	if (window.console && window.console.error) {
		window.console.error(_this);
		window.console.error(msg.join(""));
	} else {
		alert((msg.join("")));
	}
};