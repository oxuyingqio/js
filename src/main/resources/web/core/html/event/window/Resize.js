/**
 * @name	Resize
 * @package	core.html.event.window
 * @desc	窗口改变事件
 * @type	数组<函数>
 * 
 * @date	2016年8月20日 10:19:16
 */

core.html.event.window.Resize = [];

window.onresize = function(event) {

	// 遍历窗口改变事件
	for (var i = 0, length = core.html.event.window.Resize.length; i < length; i++) {

		// 获取窗口改变事件,且判断是否为函数
		var resize = core.html.event.window.Resize[i];
		typeof (resize) === "function" && resize(event);
	}
};