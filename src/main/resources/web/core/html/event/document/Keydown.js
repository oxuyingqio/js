/**
 * @name	Keydown
 * @package	core.html.event.document
 * @desc	键盘事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:12:28
 */

core.html.event.document.Keydown = [];

document.onkeydown = function(event) {

	// 遍历键盘事件
	for (var i = 0, length = core.html.event.document.Keydown.length; i < length; i++) {

		// 获取键盘事件,且判断是否为函数
		var keydown = core.html.event.document.Keydown[i];
		typeof (keydown) === "function" && keydown(event);
	}
};