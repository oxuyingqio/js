/**
 * core
 * 
 * JS 核心包
 * 
 * 使用时,不允许存在名为"core"的全局变量
 */
(function() {
	if (typeof (core) == "undefined") {
		core = {};
	} else {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}
})();
