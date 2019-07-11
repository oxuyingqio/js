/**
 * 包
 */
(function() {

	if (typeof (core) !== "undefined") {

		throw "全局变量'core'被占用.请确保'core'未被占用后,再进行使用.";
	} else {

		// 核心包
		core = {

			// 常量包
			constant : {},

			// HTML 包
			html : {

				// 常量包
				constant : {},

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

			// 项目包
			project : {},

			// 工具包
			util : {}
		};
	}
})();