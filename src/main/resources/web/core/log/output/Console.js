/**
 * Console
 * 
 * 控制台输出者
 * 
 * 类
 */

core.log.output.Console = function() {
	this.output = function(msg) {
		console.log(msg);
	};
}