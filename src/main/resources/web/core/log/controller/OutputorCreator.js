/**
 * OutputorCreator
 * 
 * 输出者创建者
 * 
 * 对象
 */

core.log.controller.OutputorCreator = {

	/**
	 * 获取输出者
	 * 
	 * @param mode
	 *            模式
	 * @returns {core.log.model.Outputor}
	 */
	getOutputor : function(mode) {

		// 输出者
		var outputor;

		switch (mode) {
		case core.log.model.Mode.console:
			// 获取控制台输出者实例
			outputor = new core.log.controller.outputor.Console.getOutputor();
			break;
		case core.log.model.Mode.popup:
			// 获取弹出框输出者实例
			outputor = new core.log.controller.outputor.Popup.getOutputor();
			break;
		}

		// 判断是否实现接口方法
		core.lang.Interface.ensureImplements(outputor, core.log.model.Outputor);
		// 返回实例
		return outputor;
	}
};