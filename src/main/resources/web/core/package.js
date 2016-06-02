/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// 核心包
	core = {
		// 常量包
		constant : {},

		// 事件包
		event : {
			// document事件包
			document : {},
			// window事件包
			window : {}
		},

		// 示例包
		example : {},

		// 基础包
		lang : {},

		// 工具包
		util : {},

	};

	// 日志包
	core.log = {};
	// 日志输出包
	core.log.output = {};
})();
