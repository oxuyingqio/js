/**
 * 包
 */

// core 核心包
(function() {
	if (typeof (core) == "undefined") {
		core = {};
	} else {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}
})();

// lang 基础包
core.lang = core.lang || {};

// log 日志包
core.log = core.log || {};
// log.output 日志输出包
core.log.output = core.log.output || {};

// example 示例包
core.example = core.example || {};
