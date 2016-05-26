/**
 * Keydown
 * 
 * document键盘事件
 * 
 * 对象
 */

core.event.document.Keydown = [];

document.onkeydown = function(event) {
	for (var i = 0, length = core.event.document.Keydown.length; i < length; i++) {
		core.event.document.Keydown[i](event);
	}
};