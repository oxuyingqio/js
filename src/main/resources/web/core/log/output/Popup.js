/**
 * Pop-up
 * 
 * 弹出框输出者
 * 
 * 对象
 */

core.log.output.Popup = (function() {

	// 输出者
	var outputor;

	// 构造函数
	var Constructor = function() {

		/**
		 * 实现Outputor接口output方法
		 */
		this.output = function(msg) {
			alert(msg);
		};
	}

	return {
		// 获取输出者
		getOutputor : function() {
			// 懒加载,调用时才创建,同时仅创建一个
			if (!outputor) {
				outputor = new Constructor();
			}

			return outputor;
		}
	}
})();