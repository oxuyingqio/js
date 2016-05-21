// window事件
var WindowEvent = {
	onresize : [],
	onload : [],
	onkeydown : []
}

// window事件
$(function() {
	window.onresize = function() {
		for (var i = 0, length = WindowEvent["onresize"]["length"]; i < length; i++) {
			WindowEvent["onresize"][i]();
		}
	}

	document.onkeydown = function(event) {
		for (var i = 0, length = WindowEvent["onkeydown"]["length"]; i < length; i++) {
			WindowEvent["onkeydown"][i](event);
		}
	};
});