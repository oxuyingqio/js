/**
 * Keydown
 * 
 * 键盘事件
 * 
 * 数组<函数>
 */

core.html.event.document.Keydown = [];

document.onkeydown = function(event) {

	for (var i = 0, length = core.html.event.document.Keydown.length; i < length; i++) {

		var keydown = core.html.event.document.Keydown[i];
		typeof (keydown) === "function" && keydown(event);
	}
};