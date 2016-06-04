/**
 * FormatConvertor
 * 
 * 格式化转换器
 * 
 * 对象
 */

core.log.controller.FormatConvertor = (function() {

	// 转换器
	var convertor;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 格式转换
	 * 
	 * @param msg
	 *            信息
	 * @param level
	 *            级别信息
	 * @param format
	 *            格式化信息
	 * @returns {String}
	 */
	Constructor.prototype.convert = function(msg, level, format) {

		// 替换消息
		format = format.replaceAll(core.log.model.Format.msg, msg);
		// 替换输出级别
		format = format.replaceAll(core.log.model.Format.level, level);
		// 替换日期??如何支持自定义format
		format = format.replaceAll(core.log.model.Format.date, (new Date()).format("yyyy-MM-dd HH:mm:ss"));
		// 替换换行
		format = format.replaceAll(core.log.model.Format.enter, "\n");

		return format;
	};

	return {

		/**
		 * 获取转换器 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.controller.FormatConvertor}
		 */
		getConvertor : function() {

			// 不存在,则创建
			if (!convertor) {
				convertor = new Constructor();
			}

			return convertor;
		}
	};
})();