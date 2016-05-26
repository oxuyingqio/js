/**
 * FormatConvertor
 * 
 * 格式化转换器
 * 
 * 对象
 */

core.log.output.FormatConvertor = (function() {
	// 转换器
	var convertor;

	// 构造函数
	var Constructor = function() {
	}

	/**
	 * 格式转换
	 */
	Constructor.prototype.convert = function(msg, level, format) {
		return format.replaceAll(core.log.output.Format.msg, msg).replaceAll(core.log.output.Format.level, level)
				.replaceAll(core.log.output.Format.date, new Date()).replaceAll(core.log.output.Format.enter, "\n");
	}

	return {
		// 返回转换器
		getConvertor : function() {
			// 保证单例,仅创建一个对象
			if (!convertor) {
				convertor = new Constructor();
			}

			return convertor;
		}
	}
})();