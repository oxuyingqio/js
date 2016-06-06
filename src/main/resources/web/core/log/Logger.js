/**
 * Logger
 * 
 * 日志管理者
 * 
 * 对象
 */

core.log.Logger = (function() {

	// 日志管理者
	var logger;

	/**
	 * 构造函数
	 */
	var Constructor = function() {

		// 输出级别
		this.level = core.log.model.Level.debug;
		// 输出模式
		this.mode = core.log.model.Mode.console;
		// 输出格式化参数
		this.format = "[" + core.log.model.Format.level + "] " + core.log.model.Format.msg;
	};

	/**
	 * 输出Error级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.error = function(msg) {

		if (this.level <= core.log.model.Level.error) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "ERROR", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Warn级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.warn = function(msg) {

		if (this.level <= core.log.model.Level.warn) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "WARN", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Info级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.info = function(msg) {

		if (this.level <= core.log.model.Level.info) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "INFO", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Debug级别日志信息
	 * 
	 * @param msg
	 *            信息
	 * @returns
	 */
	Constructor.prototype.debug = function(msg) {

		if (this.level <= core.log.model.Level.debug) {
			msg = core.log.controller.FormatConvertor.getConvertor().convert(msg, "DEBUG", this.format);
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	return {

		/**
		 * 获取日志管理者 懒加载,且仅创建一个
		 * 
		 * @returns {core.log.Logger.Constructor}
		 */
		getLogger : function() {

			// 不存在,则创建
			if (!logger) {
				logger = new Constructor();
			}

			return logger;
		}
	};
})();