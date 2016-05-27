/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// core 核心包
	core = {};

	// lang 基础包
	core.lang = {};

	// constant 常量包
	core.constant = {};

	// util 工具包
	core.util = {};

	// event 事件包
	core.event = {};
	// event.window window事件包
	core.event.window = {};
	// event.document document事件包
	core.event.document = {};

	// log 日志包
	core.log = {};
	// log.output 日志输出包
	core.log.output = {};

	// example 示例包
	core.example = {};
})();
