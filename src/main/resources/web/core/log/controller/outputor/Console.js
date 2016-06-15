/**
 * Console
 * 
 * 控制台输出者
 * 
 * 类
 */

core.log.controller.outputor.Console = (function() {

	// 输出者
	var outputor;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 输出消息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		console.log(msg);
	};

	return {

		/**
		 * 获取输出者
		 * 
		 * @returns {core.log.controller.outputor.Console}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!outputor) {
				outputor = new Constructor();
			}

			return outputor;
		}
	};
})();