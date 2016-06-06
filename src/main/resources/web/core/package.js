/**
 * 包
 */

(function() {
	if (typeof (core) !== "undefined") {
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	}

	// 核心包
	core = {

		// HTML 包
		html : {
			// 常量包
			constant : {},

			// 元素包
			element : {
				// 控制包
				controller : {},
				// 模型包
				model : {},
				// 展示包
				viewer : {
					// 按钮实现包
					button : {
						// EasyUI按钮实现包
						easyui : {}
					},
					// 输入框实现包
					input : {
						// EasyUI输入框实现包
						easyui : {}
					}
				}
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
