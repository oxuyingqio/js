/**
 * Console
 * 
 * 控制台输出者
 * 
 * 对象
 */

core.log.output.Console = (function() {

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
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.output = function(msg) {

		console.log(msg);
	};

	return {

		/**
		 * 获取输出者 懒加载,且仅创建一个
		 */
		getOutputor : function() {

			// 不存在,则创建
			if (!outputor) {
				outputor = new Constructor();
			}

			return outputor;
		}
	};
})();