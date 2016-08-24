/**
 * Logger
 * 
 * 日志记录者
 * 
 * 类
 */
core.log.Logger = (function() {

	/**
	 * 日志记录者
	 */
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
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.error = function(msg) {

		// 级别是否低于Error级别
		if (this.level <= core.log.model.Level.error) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "ERROR", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Warn级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.warn = function(msg) {

		// 级别是否低于Warn级别
		if (this.level <= core.log.model.Level.warn) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "WARN", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Info级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.info = function(msg) {

		// 级别是否低于Info级别
		if (this.level <= core.log.model.Level.info) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "INFO", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	/**
	 * 输出Debug级别日志信息
	 * 
	 * @param msg{Object}
	 *            输出信息
	 * @returns
	 */
	Constructor.prototype.debug = function(msg) {

		// 级别是否低于Info级别
		if (this.level <= core.log.model.Level.debug) {

			// 格式化输出信息
			msg = core.log.controller.FormatConvertor.getInstance().convert(msg, "DEBUG", this.format);
			// 输出信息
			core.log.controller.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	};

	return {

		/**
		 * 获取日志记录者
		 * 
		 * @returns {core.log.Logger}
		 */
		getInstance : function() {

			// 不存在,则创建
			if (!logger) {
				logger = new Constructor();
			}

			return logger;
		}
	};
})();