/**
 * Resize
 * 
 * 窗口改变事件
 * 
 * 数组<函数>
 */

core.html.event.window.Resize = [];

window.onresize = function() {

	for (var i = 0, length = core.html.event.window.Resize.length; i < length; i++) {

		var resize = core.html.event.window.Resize[i];
		typeof (resize) === "function" && resize();
	}
};
