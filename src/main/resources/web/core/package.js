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

// constant 常量包
core.constant = core.constant || {};

// util 工具包
core.util = core.util || {};

// event 事件包
core.event = core.event || {};
// event.window window事件包
core.event.window = core.event.window || {};
// event.document document事件包
core.event.document = core.event.document || {};

// component 组件包
core.component = core.component || {};

// log 日志包
core.log = core.log || {};
// log.output 日志输出包
core.log.output = core.log.output || {};

// example 示例包
core.example = core.example || {};
