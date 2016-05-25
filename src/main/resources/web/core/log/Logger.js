/**
 * Logger
 * 
 * 日志管理者
 */

core.log.Logger = (function() {
	// 日志管理者
	var logger;

	// 默认的日志级别
	var DEFAULT_LOGGER_LEVEL = core.log.Level.debug;
	// 默认的输出模式
	var DEFAULT_OUTPUT_MODE = [ core.log.output.Mode.console ];

	// 日志管理者构造函数
	function constructor() {
		// 日志级别
		this.level = DEFAULT_LOGGER_LEVEL;
		// 日志输出模式
		this.outputMode = DEFAULT_OUTPUT_MODE;

		/**
		 * 输出Error级别日志信息
		 */
		this.error = function(msg) {

		}

		/**
		 * 输出Warn级别日志信息
		 */
		this.warn = function(msg) {

		}

		/**
		 * 输出Info级别日志信息
		 */
		this.info = function(msg) {

		}

		/**
		 * 输出Debug级别日志信息
		 */
		this.debug = function(msg) {

		}
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