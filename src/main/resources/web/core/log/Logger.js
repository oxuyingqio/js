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

	// 日志管理者构造函数
	var constructor = function() {
		// 日志级别
		this.level = core.log.Level.debug;
		// 日志输出模式
		this.outputMode = core.log.output.Mode.console;
	}

	/**
	 * 输出Error级别日志信息
	 */
	constructor.prototype.error = function(msg) {
		this.level <= core.log.Level.error && core.log.output.OutputCreator.getOutputor(this.outputMode).output(msg);
	}

	/**
	 * 输出Warn级别日志信息
	 */
	constructor.prototype.warn = function(msg) {
		this.level <= core.log.Level.warn && core.log.output.OutputCreator.getOutputor(this.outputMode).output(msg);
	}

	/**
	 * 输出Info级别日志信息
	 */
	constructor.prototype.info = function(msg) {
		this.level <= core.log.Level.info && core.log.output.OutputCreator.getOutputor(this.outputMode).output(msg);
	}

	/**
	 * 输出Debug级别日志信息
	 */
	constructor.prototype.debug = function(msg) {
		this.level <= core.log.Level.debug && core.log.output.OutputCreator.getOutputor(this.outputMode).output(msg);
	}

	return {
		getLogger : function() {
			// 判断日志管理者是否存在
			if (!logger) {
				// 不存在则创建
				logger = new constructor();
			}

			// 返回日志管理者
			return logger;
		}
	}
})();