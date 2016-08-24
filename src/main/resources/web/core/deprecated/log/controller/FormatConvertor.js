/**
 * @name FormatConvertor
 * @package core.log.controller
 * @desc 格式化转换器
 * @type 类
 * 
 * @date 2016年8月19日 16:14:53
 */
core.log.controller.FormatConvertor = (function() {

	/**
	 * 格式化转换器实例
	 */
	var instance;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

	};

	/**
	 * 格式转换
	 * 
	 * @param msg
	 *            输出信息
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
		 * 获取转换器
		 * 
		 * @returns {core.log.controller.FormatConvertor}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!instance) {
				instance = new Constructor();
			}

			return convertor;
		}
	};
})();