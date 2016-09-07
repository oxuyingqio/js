/**
 * 包
 */
(function() {

	if (typeof (core) !== "undefined") {
		
		throw "全局变量'core'被占用,请确保'core'未被占用后再进行使用";
	} else {

		// 核心包
		core = {

			// HTML 包
			html : {

				// 常量包
				constant : {},

				// 元素包
				element : {

					// HTML5 包
					html5 : {

						// 展示包
						viewer : {}
					},

					// 模型包
					model : {},

					// 展示包
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

			// 工具包
			util : {}
		};
	}
})();