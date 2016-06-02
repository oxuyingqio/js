/**
 * Keydown
 * 
 * 键盘事件
 * 
 * 数组<函数>
 */

core.event.document.Keydown = [];

document.onkeydown = function(event) {

	for (var i = 0, length = core.event.document.Keydown.length; i < length; i++) {

		var keydown = core.event.document.Keydown[i];
		typeof (keydown) === "function" && keydown(event);
	}
};