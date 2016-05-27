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
		this.level = core.log.output.Level.debug;
		// 输出模式
		this.mode = core.log.output.Mode.console;
		// 输出格式化参数
		this.format = "[" + core.log.output.Format.level + "] " + core.log.output.Format.msg;
	}

	/**
	 * 输出Error级别日志信息
	 */
	Constructor.prototype.error = function(msg) {
		if (this.level <= core.log.output.Level.error) {
			msg = core.log.output.FormatConvertor.getConvertor().convert(msg, "ERROR", this.format);
			core.log.output.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	}

	/**
	 * 输出Warn级别日志信息
	 */
	Constructor.prototype.warn = function(msg) {
		if (this.level <= core.log.output.Level.warn) {
			msg = core.log.output.FormatConvertor.getConvertor().convert(msg, "WARN", this.format);
			core.log.output.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	}

	/**
	 * 输出Info级别日志信息
	 */
	Constructor.prototype.info = function(msg) {
		if (this.level <= core.log.output.Level.info) {
			msg = core.log.output.FormatConvertor.getConvertor().convert(msg, "INFO", this.format);
			core.log.output.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	}

	/**
	 * 输出Debug级别日志信息
	 */
	Constructor.prototype.debug = function(msg) {
		if (this.level <= core.log.output.Level.debug) {
			msg = core.log.output.FormatConvertor.getConvertor().convert(msg, "DEBUG", this.format);
			core.log.output.OutputorCreator.getOutputor(this.mode).output(msg);
		}
	}

	return {
		// 获取单例日志管理者
		getLogger : function() {
			// 懒加载,调用时才创建,且仅创建一个
			if (!logger) {
				logger = new Constructor();
			}

			return logger;
		}
	}
})();