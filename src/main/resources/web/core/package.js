/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// 核心包
	core = {
		// 示例包
		example : {},

		// HTML 包
		html : {
			// 常量包
			constant : {},

			// 元素包
			element : {
				// 模型包
				model : {},
				// 展示实现包
				viewer : {}
			},

			// 事件包
			event : {
				// document事件包
				document : {},
				// window事件包
				window : {}
			},

			// 工具包
			util : {}
		},

		// 基础包
		lang : {},

		// 日志包
		log : {
			// 控制包
			controller : {
				// 输出者实现包
				outputor : {}
			},
			// 模型包
			model : {}
		},

		// 工具包
		util : {}
	};
})();
