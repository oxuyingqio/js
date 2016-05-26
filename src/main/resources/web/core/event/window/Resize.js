/**
 * Resize
 * 
 * window窗口改变事件
 * 
 * 对象
 */

core.event.window.Resize = [];

window.onload = function() {
	window.onresize = function() {
		for (var i = 0, length = core.event.window.Resize.length; i < length; i++) {
			core.event.window.Resize[i]();
		}
	}
}