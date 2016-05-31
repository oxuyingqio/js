/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// 核心包
	core = {};

	// 基础包
	core.lang = {};

	// 常量包
	core.constant = {};

	// 工具包
	core.util = {};

	// 事件包
	core.event = {};
	// window事件包
	core.event.window = {};
	// document事件包
	core.event.document = {};

	// 日志包
	core.log = {};
	// 日志输出包
	core.log.output = {};

	// 示例包
	core.example = {};
})();
