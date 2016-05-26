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
		// 替换消息
		format = format.replaceAll(core.log.output.Format.msg, msg);
		// 替换输出级别
		format = format.replaceAll(core.log.output.Format.level, level);
		// 替换日期??如何支持自定义format
		format = format.replaceAll(core.log.output.Format.date, (new Date()).format("yyyy-MM-dd HH:mm:ss"));
		// 替换换行
		format = format.replaceAll(core.log.output.Format.enter, "\n");

		return format;
	}

	return {
		// 返回转换器
		getConvertor : function() {
			// 懒加载,调用时才创建,同时仅创建一个
			if (!convertor) {
				convertor = new Constructor();
			}

			return convertor;
		}
	}
})();