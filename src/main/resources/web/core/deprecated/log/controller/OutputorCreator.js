/**
 * @name OutputorCreator
 * @package core.log.controller
 * @desc 输出者创建者
 * @type 对象
 * 
 * @date 2016年8月19日 16:18:28
 */
core.log.controller.OutputorCreator = {

	/**
	 * 获取输出者
	 * 
	 * @param mode{core.log.model.Mode}
	 *            输出模式
	 * @returns {core.log.model.Outputor}
	 */
	getOutputor : function(mode) {

		// 输出者
		var outputor;

		switch (mode) {
		case core.log.model.Mode.console:
			// 获取控制台输出者实例
			outputor = new core.log.controller.outputor.Console.getInstance();
			break;
		case core.log.model.Mode.popup:
			// 获取弹出框输出者实例
			outputor = new core.log.controller.outputor.Popup.getInstance();
			break;
		default:
			throw "core.log.controller.OutputorCreator.getOutputor:参数异常.模式(" + mode + ")不支持";
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(outputor, core.log.model.Outputor);
		// 返回实例
		return outputor;
	}
};