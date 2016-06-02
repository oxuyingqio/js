/**
 * Resize
 * 
 * 窗口改变事件
 * 
 * 数组<函数>
 */

core.event.window.Resize = [];

window.onresize = function() {

	for (var i = 0, length = core.event.window.Resize.length; i < length; i++) {

		var resize = core.event.window.Resize[i];
		typeof (resize) === "function" && resize();
	}
};
